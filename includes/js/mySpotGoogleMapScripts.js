/**
 * Created by ysapir on 12/28/2015.
 */
function initMap() {
    var mapOptions = {
        zoom: 13,
        center: {lat: 32.3283869, lng: 34.8480568},
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };//
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    //var image = 'includes/img/star.gif';
    var marker = new google.maps.Marker({
        position: {lat: 32.3283869, lng: 34.8480568},
        map: map,
        title: 'Hello World!',
        //icon: image
    });
}

