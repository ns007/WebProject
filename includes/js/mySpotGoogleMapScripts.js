/**
 * Created by ysapir on 12/28/2015.
 */
function initMap() {
    var mapOptions = {
        zoom: 13,
        center: {lat: 32.326490, lng: 34.846500},
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };//
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    //var image = 'includes/img/star.gif';

    var image = 'includes/img/grey.png';
    var marker = new google.maps.Marker({
        position: {lat: 32.326490, lng: 34.846500},
        map: map,
        icon: image,
        title: 'Sironit Beach'
    });

    var marker2 = new google.maps.Marker({
        position: {lat: 32.3083869, lng: 34.8437168},
        map: map,
        title: 'Poleg Beach',
        icon: image
    });

    var marker3 = new google.maps.Marker({
        position: {lat: 32.302905, lng: 34.841614},
        map: map,
        title: 'Argaman Beach'
    });
}

