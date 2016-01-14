/**
 * Created by ysapir on 12/28/2015.
 */

var positionMarker = {};
var lat = 0;
var lng = 0;
function initMap() {
    var bangalore = {lat: 12.97, lng: 77.59};
    var mapOptions = {
        zoom: 13,
        center: {lat: 32.326490, lng: 34.846500},
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };//
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    map.setOptions({draggableCursor: 'crosshair'});

    var image = 'includes/img/grey.png';
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var markers = [];

    var sql = "select * from spot_74";
    var spots = [];
    $.ajax({
        url: 'includes/php/getDataFromDB.php',
        type: 'GET',
        data: {sql: sql},
        success: function (data) {
            spots = JSON.parse(data);
            var i = 0;
            spots.forEach(function (spot) {
                markers[i++] = new google.maps.Marker({
                    position: {lat: parseFloat(spot.latitude), lng: parseFloat(spot.longitude)},
                    map: map,
                    icon: spot.favourite == "1" ? null : image,
                    title: spot.name
                }).addListener('click', function () {
                    window.open('spotinfo.html', '_self', false);
                });
            });
        }
    });

    positionMarker = new google.maps.Marker({
        position: map.getCenter(),
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 15, strokeWeight: 6, strokeColor: 'white', fillColor: 'white', fillOpacity: 0.35,
        },
        draggable: true,
        map: map
    });
};

function addSpot() {
    lat = positionMarker.getPosition().lat();
    lng = positionMarker.getPosition().lng();
    adding();
};

var adding = function () {
    alert("lat: " + lat + " lng: " + lng);
};
