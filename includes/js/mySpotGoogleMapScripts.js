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

    var image = 'includes/img/grey.png';
    var marker = new google.maps.Marker({
        position: {lat: 32.326490, lng: 34.846500},
        map: map,
        icon: image,
        title: 'Sironit Beach'
    });

	 marker.addListener('click', function() {
	    window.open ('spotinfo.html','_self',false)
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

function changeStars(num){
    $('.stars label').removeClass("star st2");
    $('.stars label').addClass("star st1");
    for(var i = 1; i <= num; i++) {
        $('.stars label:nth-child(' + i + ')').removeClass("star st1");
        $('.stars label:nth-child(' + i + ')').addClass("star st2");
    }
}