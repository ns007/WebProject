/**
 * Created by ysapir on 12/28/2015.
 */

var self = this;
self.markers = [];
self.spots = [];
var chosenSpot = {};
var hamIsShown = false;
var greyMarkerIconImage = 'includes/img/grey.png';

var showHam = function(){
    var menu = $('#navMenu');
    if(hamIsShown == false){
        menu.addClass('shownMobileMenu');
        menu.removeClass('navMenuState');
        hamIsShown = true;
    }
    else{
        menu.removeClass('shownMobileMenu');
        menu.addClass('navMenuState');
        hamIsShown = false;
    }
};

function initMap() {
    var mapOptions = {
        zoom: 13,
        center: {lat: 32.326490, lng: 34.846500},
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };//
    self.map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

var getDataFromDB = function (sql) {
    return $.ajax({
        url: 'includes/php/getDataFromDB.php',
        type: 'GET',
        data: {sql: sql}
    });
};

var postQueryToDB = function (sql) {
    return $.ajax({
        url: 'includes/php/postQueryToDB.php',
        type: 'POST',
        data: {sql: sql}
    });
};

var mapDataManager = function () {
    var url = window.location.href;
    switch (url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."))) {
        case "index":
            getDataToIndexPage();
            break;
        case "spots":
            getDataToSpotsPage();
            break;
        case "spotinfo":
            getDataToSpotInfoPage();
            break;
        case "newspot":
            getDataToNewSpotPage();
            break;
        default:
            break;
    }
};

var assignSpotsToGoogleMapsMarkers = function () {
    initMap();
    getDataFromDB("select * from 74_spot").done(function (data) {
        spots = JSON.parse(data);
        for (var i = 0; i < spots.length; i++) {
            var marker = createMarker(i);
            self.markers.push(marker);
        }
    });
};

var createMarker = function (i) {
    var marker = new google.maps.Marker({
        position: {lat: parseFloat(spots[i].latitude), lng: parseFloat(spots[i].longitude)},
        map: self.map,
        icon: spots[i].favourite == "1" ? null : greyMarkerIconImage,
        title: spots[i].name,
        spotId: i
    });
    marker.addListener('click', function () {
        window.open('spotinfo.php?spotId=' + (spots[i].id), '_self', false);
    });
    return marker;
};

var getDataToIndexPage = function () {
    initMap();
    getDataFromDB("select * from 74_spot").done(function (data) {
        spots = JSON.parse(data);
        for (var i = 0; i < spots.length; i++) {
            var marker = createMarker(i);
            self.markers.push(marker);
        }
        for (var i = 0; i < spots.length; i++) {
            $('#favoriteSpot').append("<option value='" + i + "'>" + "חוף " + spots[i].name + "</option>");
            if (spots[i].favourite == 1)
                chosenSpot = spots[i];
        }
        updateSpotData(chosenSpot);
        google.maps.event.addDomListener(document.getElementById("btn1"), "click", function () {
            var newFavoriteIndex = $('#favoriteSpot').val();
            var oldFavoriteIndex = findFavoriteSpotIndexInSpots();
            if (newFavoriteIndex != oldFavoriteIndex) {
                postQueryToDB("update 74_spot set favourite = 0 where id = " + (parseInt(oldFavoriteIndex) + 1)).done(function () {
                    postQueryToDB("update 74_spot set favourite = 1 where id = " + (parseInt(newFavoriteIndex) + 1)).done(function () {
                        spots[newFavoriteIndex].favourite = "1";
                        spots[oldFavoriteIndex].favourite = "0";
                        markers[oldFavoriteIndex].setIcon(greyMarkerIconImage);
                        markers[newFavoriteIndex].setIcon(null);
                        chosenSpot = spots[newFavoriteIndex];
                        updateSpotData(spots[newFavoriteIndex]);
                        mapDetails.positionChanged = true;
                        $('#spotsModal').modal('hide');
                    });
                });
            }
        });
        indexPagePostsImplementor();
        initDirectionsMap();
    });
};

var getDataToSpotsPage = function () {
    var availableTags = [];
    $.ajax({
        url: assignSpotsToGoogleMapsMarkers()
    }).done(function () {
        for (var i = 0; i < spots.length; i++) {
            availableTags.push("חוף " + spots[i].name);
        }
        $("#txtSrc").autocomplete({
            source: availableTags,
            select: function (event, ui) {
                $("#txtSrc").val(ui.item ? ui.item.label : "");
                setRelevantMarkers();
            }
        });
    });
};

var getDataToSpotInfoPage = function () {
    var params = getUrlParams(window.location);
    initMap();
    initDirectionsMap();
    getDataFromDB("select * from 74_spot where id = " + params.spotId).done(function (data) {
        var spotData = JSON.parse(data)[0];
        chosenSpot = spotData;
        spotPagePostsImplementor();
        $("#spotName").text(spotData.name);
        $("#spotCity").text(spotData.city + ",");
        $("#spotRegion").text("אזור ה" + spotData.region);
        $("#waveHeight").text(spotData.wave_height + " מטר");
        $("#waveTiming").text(spotData.wave_timing + " שניות");
        $("#waveTemp").text(spotData.tempreture);
        $("#spotname").text(spotData.name);
        $("#optWind").text(spotData.optimal_wind);
        $("#level").text(spotData.surfing_level);
        $("#season").text(spotData.season);
        $("#waveBreakType").text(spotData.wave_break_type);
        $("#waveBreakType2").text(spotData.wave_break_type);
        $("#waveDirection").text(spotData.wave_direction);
        $("#bottomType").text(spotData.bottom_type);
        $("#waveHeightData").text(spotData.wave_height);
        var marker = new google.maps.Marker({
            position: {lat: parseFloat(spotData.latitude), lng: parseFloat(spotData.longitude)},
            map: self.map,
            icon: spotData.favourite == "1" ? null : greyMarkerIconImage,
            title: spotData.name,
            spotId: spotData.id
        });
        marker.addListener('click', function () {
            window.open('spotinfo.php?spotId=' + spotData.id, '_self', false);
        });
        self.markers.push(marker);
        var event = {data:{num: spotData.rank, updatedNeeded:false}};
        changeRankStars(event);
    });
};


var getDataToNewSpotPage = function () {
    var availableTags = [];
    $.ajax({
        url: assignSpotsToGoogleMapsMarkers()
    }).done(function () {
        for (var i = 0; i < spots.length; i++) {
            availableTags.push("חוף " + spots[i].name);
        }
        setMapCurser();
        $('#addSpotButton').click(addSpot);
    });
};

var getUrlParams = function (urlLocation) {
    var keyValues = urlLocation.search.substring(1).split("&");
    var params = {};
    keyValues.forEach(function (keyValue) {
        var pair = keyValue.split("=");
        params[pair[0]] = pair[1];
    });
    return params;
};

var indexPagePostsImplementor = function () {
    var sql = "select u.username, p.* from 74_posts p join 74_users u on p.user_id = u.id order by p.date desc";
    var posts = [];
    getDataFromDB(sql).done(function (data) {
        posts = JSON.parse(data);
        posts.forEach(function (post) {
            var passedTimeStringFromLastModifiedPostDate = getPassedTimeStringFromLastModifiedPostDate(post.date);
            var img = typeof(post.img_name) != "undefined" && post.img_name != "" ? "<img class='postImage' src='includes/img/" + post.img_name + ".png'>" : "";
            $('#posts').append("<article>" +
                "<img src='includes/img/logo.jpg' alt='user'>" +
                "<br>" +
                "<h2>" + post.username + "</h2>" +
                "<h4>" + "עדכן תנאי גלישה לפני " + passedTimeStringFromLastModifiedPostDate + "</h4>" +
                "<h2>" + post.msg + "</h2>" +
                img +
                "</article>");
        });
    });
};

var spotPagePostsImplementor = function () {
    var sql = "select u.username, p.* from 74_posts p join 74_users u on p.user_id = u.id where p.spot_id = " + chosenSpot.id + " order by p.date desc";
    var posts = [];
    getDataFromDB(sql).done(function (data) {
        posts = JSON.parse(data);
        posts.forEach(function (post) {
            var passedTimeStringFromLastModifiedPostDate = getPassedTimeStringFromLastModifiedPostDate(post.date);
            $('#posts').append("<article>" +
                    "<section class='postGeneralDetailsBox'>" +
                        "<section class='postGeneralDetails'>" +
                            "<h2 class='postUserName'>darom surfschool</h2>" +
                            "<p class='postUpdateTime'>" + "עדכן תנאי גלישה לפני " + passedTimeStringFromLastModifiedPostDate + "</p>" +
                        "</section>" +
                        "<img src='includes/img/logo.jpg' alt='user'>" +
                        "<p class='postMsg'>" + post.msg + "</p>" +
                    "</section>" +
                    "<section class='surfConditionDetails'>" +
                        "<p class='surfConditionDetailsHeader'>תנאי גלישה,</p>" +
                        //"<span class='glyphicon glyphicon-thumbs-up'></span>" +
                        "<img src='includes/img/like.png' alt='like'>" +
                    "</section>" +
                    "<section class='userCurrnetConditionsUpdate'>" +
                        "<section class='updatePair'>" +
                            "<h4 class='spotDataKey'>רוח</h4>" +
                            "<h2 class='spotDataValue'>" + post.crnt_wind + "</h2>" +
                        "</section>" +
                        "<section class='updatePair'>" +
                            "<h4 class='spotDataKey'>רמה</h4>" +
                            "<h2 class='spotDataValue'>" + post.crnt_level + "</h2>" +
                        "</section>" +
                        "<section class='waveMeterPair'>" +
                            "<div class='clear'></div>" +
                            "<img src='includes/img/wave-spotdetails.png' alt='wave' class='floatRight'>" +
                            "<h2 class='floatRight'>" + post.crnt_wave_height + " מטר" + "</h2>" +
                        "</section>" +
                    "</section>" +
                "</article>");
        });
    });
};

var modalOpenedBefore = false;
var getDirections = function (destination) {

    function getRouteRequest(position) {
        var request = {
            origin: position.coords.latitude + ',' + position.coords.longitude,
            destination: destination,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };

        mapDetails.directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                mapDetails.directionsDisplay.setDirections(response);
            }
        });

        if (!modalOpenedBefore) {
            modalOpenedBefore = true;
            google.maps.event.trigger(mapDetails.map, "resize");
        }
    };

    navigator.geolocation.getCurrentPosition(getRouteRequest);
};

var initDirectionsMap = function () {
    self.mapDetails = {};
    mapDetails.directionsService = new google.maps.DirectionsService();
    mapDetails.directionsDisplay = new google.maps.DirectionsRenderer();
    mapDetails.map = new google.maps.Map(document.getElementById('directionsMap'), {
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    mapDetails.directionsDisplay.setMap(mapDetails.map);
    mapDetails.directionsDisplay.setPanel(document.getElementById('directionsPanel'));
    mapDetails.positionChanged = true;
};

var openDirectionsModal = function () {

    if (mapDetails.positionChanged) {
        getDirections('חוף ' + chosenSpot.name + ' ' + chosenSpot.city);
        mapDetails.positionChanged = false;
    }
    $('#directionsModal').modal('show');
};

var findFavoriteSpotInSpots = function () {
    var favouriteSpot = {};
    for (var i = 0; i < spots.length; i++) {
        if (spots[i].favourite == "1") {
            favouriteSpot = spots[i];
            break;
        }
    }
    return favouriteSpot;
};

var findFavoriteSpotIndexInSpots = function () {
    var favouriteSpotIndex = -1;
    for (var i = 0; i < spots.length; i++) {
        if (spots[i].favourite == "1") {
            favouriteSpotIndex = i;
            break;
        }
    }
    return favouriteSpotIndex;
};

var updateSpotData = function (spot) {

    var event = {data:{num: spot.rank, updatedNeeded:false}};
    changeRankStars(event);
    $('#waveHeight').text(spot.wave_height + " מטר");
    $('#waveTiming').text(spot.wave_timing + " שניות");
    $('#waveTemp').text(spot.tempreture);
    $('#spotName').text("חוף " + spot.name);
    $('#spotLocation').text(spot.city + ', אזור ה' + spot.region);
};

var changeRankStars = function (event) {
    var num = event.data.num;
    var updatedNeeded = event.data.updatedNeeded;
    $('.stars label').removeClass("star st2");
    $('.stars label').addClass("star st1");
    for (var i = 1; i <= num; i++) {
        $('.stars label:nth-child(' + i + ')').removeClass("star st1");
        $('.stars label:nth-child(' + i + ')').addClass("star st2");
    }
    if (updatedNeeded) {
        postQueryToDB("update 74_spot set rank = " + num + " where id = " + (chosenSpot.id));
    }
};


var getDatesDiff = function (date) {
    var diff = new Date() - new Date(date);
    return {
        m: Math.floor(diff / 60000 % 60),
        h: Math.floor(diff / 3600000 % 24),
        d: Math.floor(diff / 86400000)
    };
};

var getPassedTimeStringFromLastModifiedPostDate = function (date) {
    var lastModifiedDateDiff = getDatesDiff(date);
    str1 = lastModifiedDateDiff.d == 0 ? "" : (lastModifiedDateDiff.d + " ימים, ");
    str2 = lastModifiedDateDiff.h == 0 ? "" : (lastModifiedDateDiff.h + "  שעות ");
    if (lastModifiedDateDiff.h == 0 && lastModifiedDateDiff.d == 0) {
        str3 = lastModifiedDateDiff.m == 0 ? "" : (lastModifiedDateDiff.m + " דקות");
    }
    else {
        str3 = lastModifiedDateDiff.m == 0 ? "" : ("ו- " + lastModifiedDateDiff.m + " דקות");
    }
    return str1 + str2 + str3;
};

$(document).ready(function() {
    $('#getDrvDirections > a').click(openDirectionsModal);
    $('#hamburgerButton').click(showHam);
    var stars = $('.star.st1');
    var i = 1;
    $( ".star.st1" ).each(function( index ) {
        $( this ).click({num: index+1, updatedNeeded: true},changeRankStars);
    });

});