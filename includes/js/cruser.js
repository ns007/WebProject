/**
 * Created by ysapir on 12/28/2015.
 */

var positionMarker = {};
var lat = 0;
var lng = 0;
function setMapCurser() {
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
    alert("lat: " + lat + " , lng: " + lng);
    window.open('newspotform.php', '_self', false);
};
