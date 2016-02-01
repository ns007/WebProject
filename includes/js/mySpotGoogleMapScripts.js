/**
 * Created by ysapir on 12/28/2015.
 */

var self = this;
var spots = [];
var greyMarkerIconImage = 'includes/img/grey.png';
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
}

var postQueryToDB = function (sql) {
    return $.ajax({
        url: 'includes/php/postQueryToDB.php',
        type: 'POST',
        data: {sql: sql}
    });
}

var mapDataManager = function () {
    switch (window.location.href.split("/")[6]) {
        case "index.html":
        case "index.html#":
            getDataToIndexPage();
            break;
        case "spots.html":
        case "spots.html#":
            getDataToSpotsPage();
            break;
        default:
            break;
    }
}

var getDataToIndexPage = function () {
    self.markers = [];
    var i = 0;
    initMap();
    getDataFromDB("select * from spot_74").done(function (data) {
        spots = JSON.parse(data);
        updateSpotData(findFavoriteSpotInSpots());
        var spot = {};
        for (var i = 0; i < spots.length; i++) {
            var marker = new google.maps.Marker({
                position: {lat: parseFloat(spots[i].latitude), lng: parseFloat(spots[i].longitude)},
                map: self.map,
                icon: spots[i].favourite == "1" ? null : greyMarkerIconImage,
                title: spots[i].name,
                spotId: i
            });
            marker.addListener('click', function () {
                window.open('spotinfo.html', '_self', false);
            });
            self.markers.push(marker);
            $('#favoriteSpot').append("<option value='" + i + "'>" + "חוף " + spots[i].name + "</option>");
        }
        google.maps.event.addDomListener(document.getElementById("btn1"), "click", function () {
            var newFavoriteIndex = $('#favoriteSpot').val();
            var oldFavoriteIndex = findFavoriteSpotIndexInSpots();
            if (newFavoriteIndex != oldFavoriteIndex) {
                postQueryToDB("update spot_74 set favourite = 0 where id = " + (parseInt(oldFavoriteIndex) + 1)).done(function (data) {
                    postQueryToDB("update spot_74 set favourite = 1 where id = " + (parseInt(newFavoriteIndex) + 1)).done(function (data) {
                        spots[newFavoriteIndex].favourite = "1";
                        spots[oldFavoriteIndex].favourite = "0";
                        markers[oldFavoriteIndex].setIcon(greyMarkerIconImage);
                        markers[newFavoriteIndex].setIcon(null);
                        updateSpotData(spots[newFavoriteIndex]);
                        mapDetails.positionChanged = true;
                        $('#spotsModal').modal('hide');
                    })
                })
            }
        });
    });
    postsImplementor();
    initDirectionsMap();
}

var getDataToSpotsPage = function(){
    self.markers = [];
    var i = 0;
    initMap();
    getDataFromDB("select * from spot_74").done(function (data) {
        spots = JSON.parse(data);
        var spot = {};
        for (var i = 0; i < spots.length; i++) {
            var marker = new google.maps.Marker({
                position: {lat: parseFloat(spots[i].latitude), lng: parseFloat(spots[i].longitude)},
                map: self.map,
                icon: spots[i].favourite == "1" ? null : greyMarkerIconImage,
                title: spots[i].name,
                spotId: i
            });
            marker.addListener('click', function () {
                window.open('spotinfo.html', '_self', false);
            });
            self.markers.push(marker);
        }
    });
}

var postsImplementor = function () {
    var sql = "select u.username, p.* from posts_74 p join users_74 u on p.user_id = u.id";
    var posts = [];
    getDataFromDB(sql).done(function (data) {
        posts = JSON.parse(data);
        posts.forEach(function (post) {
            var passedTimeStringFromLastModifiedPostDate = getPassedTimeStringFromLastModifiedPostDate(post.date);
            $('#posts').append("<article>" +
                "<img src='includes/img/logo.jpg' alt='user'>" +
                "<section>" +
                "<br>" +
                "<h2>" + post.username + "</h2>" +
                "<p class='updatetime'>" + "עדכן תנאי גלישה לפני " + passedTimeStringFromLastModifiedPostDate + "</p>" +
                "</section>" +
                "<br>" +
                "<h2>" + post.msg + "</h2>" +
                "<img class='postImage' src='includes/img/" + post.img_name + ".png'>" +
                "</article>")
        })
    })
}

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
    }

    navigator.geolocation.getCurrentPosition(getRouteRequest);
}

var initDirectionsMap = function () {
    self.mapDetails = {};
    mapDetails.directionsService = new google.maps.DirectionsService();
    mapDetails.directionsDisplay = new google.maps.DirectionsRenderer();
    mapDetails.map = new google.maps.Map(document.getElementById('directionsMap'), {
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    mapDetails.directionsDisplay.setMap(mapDetails.map);
    mapDetails.directionsDisplay.setPanel(document.getElementById('panel'));
    mapDetails.positionChanged = true;
}

var openDirectionsModal = function () {

    var favoriteSpot = findFavoriteSpotInSpots();
    if (mapDetails.positionChanged) {
        getDirections('חוף ' + favoriteSpot.name + ' ' + favoriteSpot.city);
        mapDetails.positionChanged = false;
    }
    $('#directionsModal').modal('show');
}

var findFavoriteSpotInSpots = function () {
    var favouriteSpot = {};
    for (var i = 0; i < spots.length; i++) {
        if (spots[i].favourite == "1") {
            favouriteSpot = spots[i];
            break;
        }
    }
    return favouriteSpot;
}

var findFavoriteSpotIndexInSpots = function () {
    var favouriteSpotIndex = -1;
    for (var i = 0; i < spots.length; i++) {
        if (spots[i].favourite == "1") {
            favouriteSpotIndex = i;
            break;
        }
    }
    return favouriteSpotIndex;
}

var updateSpotData = function (spot) {

    changeRankStars(spot.rank,false);
    $('#waveHeight').text(spot.wave_height + " מטר");
    $('#waveTiming').text(spot.wave_timing + " שניות");
    $('#waveTemp').text(spot.tempreture);
    $('#spotName').text("חוף " + spot.name);
    $('#spotLocation').text(spot.city + ', אזור ה' + spot.region);
}

var changeRankStars = function(num, updatedNeeded) {
    $('.stars label').removeClass("star st2");
    $('.stars label').addClass("star st1");
    for (var i = 1; i <= num; i++) {
        $('.stars label:nth-child(' + i + ')').removeClass("star st1");
        $('.stars label:nth-child(' + i + ')').addClass("star st2");
    }
    if(updatedNeeded){
        var oldFavoriteIndex = findFavoriteSpotIndexInSpots();
        postQueryToDB("update spot_74 set rank = " + num + " where id = " + (parseInt(oldFavoriteIndex) + 1));
    }
}


var getDatesDiff = function (date) {
    var diff = new Date() - new Date(date);
    return {
        m: Math.floor(diff / 60000 % 60),
        h: Math.floor(diff / 3600000 % 24),
        d: Math.floor(diff / 86400000)
    }
}

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
}