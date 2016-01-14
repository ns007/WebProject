/**
 * Created by ysapir on 12/28/2015.
 */
function initMap() {
    var mapOptions = {
        zoom: 13,
        center: {lat: 32.326490, lng: 34.846500},
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };//
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var markers = [];

    var sql = "select * from spot_74";
    var image = 'includes/img/grey.png';
    var spots = [];
    $.ajax({
        url: 'includes/php/getDataFromDB.php',
        type: 'GET',
        data: {sql:sql},
        success: function(data) {
            spots = JSON.parse(data);
            var i = 0;
            spots.forEach(function(spot) {
                markers[i++] = new google.maps.Marker({
                    position: {lat: parseFloat(spot.latitude), lng: parseFloat(spot.longitude)},
                    map: map,
                    icon: spot.favourite == "1" ? null : image,
                    title: spot.name
                }).addListener('click', function() {
                    window.open('spotinfo.html','_self',false);
                });
            });
        }
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