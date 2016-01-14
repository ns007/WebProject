/**
 * Created by ysapir on 12/28/2015.
 */
function initMap() {
	var bangalore = { lat: 12.97, lng: 77.59 };
    var mapOptions = {
        zoom: 13,
        center: {lat: 32.326490, lng: 34.846500},
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };//
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    map.setOptions({draggableCursor:'crosshair'});

    //var image = 'includes/img/star.gif';

    var image = '../img/grey.png';
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
    
    var marker3 = new google.maps.Marker({
        position: {lat: 32.302905, lng: 34.841614},
        map: map,
        title: 'Argaman Beach'
    });
    /*
       ------------------------------------------------------------------------------- 
    */
    var posmarker = new google.maps.Marker({
    	position: map.getCenter(),
		icon: {
      	path: google.maps.SymbolPath.CIRCLE,
      	scale: 15,strokeWeight:6 ,strokeColor: 'white',fillColor: 'white',fillOpacity: 0.35,},
    	draggable: true,
    	map: map
  	});
	
};

function addSpot() {
	document.getElementById("addspot").onclick = adding;
	};
	
var adding = function() { start:
	alert("need to add the spot");
	return; goto:start;
	};

/*
		function addSpot() {
  	alert("yes1!");
		var posdocument.getElementById("addspot").onclick = adding;  
	}
	
	var adding = function() { start:
		var pos = a.getPosition();
	var tempmarker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'new loc'
    });
	alert("yes2!");
	return; goto:start;
	
	};
	*/
/*
	var templng;
	var templat;

	var adding = function(){
		alert("yes2!");
		
    };
    
// In the following example, markers appear when the user clicks on the map.
// Each marker is labeled with a single alphabetical character.
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
  var bangalore = { lat: 12.97, lng: 77.59 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: bangalore
  });

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });

  // Add a marker at the center of the map.
  addMarker(bangalore, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: labels[labelIndex++ % labels.length],
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

var templng = posmarker.getPosition().lng();
var templat = posmarker.getPosition().lat();
*/
