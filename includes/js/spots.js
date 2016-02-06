var rangeValues = {
    "0": "0M","1": "1M","2": "2M","3": "3M","4": "4M","5":"5M","6":"6M","7":"7M","8": "8M","9": "9M","10": "10M",
        "11": "11M","12": "12M","13": "13M","14": "14M","15":"15M","16":"16M","17":"17M","18": "18M","19": "19M","20": "20M"
};

var distValues = {
    	"1": "1KM","2": "2KM","3": "3KM","4": "4KM","5":"5KM","6":"6KM","7":"7KM","8": "8KM","9": "9KM","10": "10KM",
    	"11":"11KM","12": "12KM","13": "13KM","14": "14KM","15":"15KM","16":"16KM","17":"17KM","18": "18KM","19": "19KM","20": "20KM",
    	"21":"21KM","22": "212KM","23": "23KM","24": "24KM","25":"25KM","26":"26KM","27":"27KM","28": "28KM","29": "29KM","30": "30KM"
};

var filter = {
    waveHeight: true,
    distance: true,
    breakType: true,
    breakDir: true,
    level: true,
    name: true
};

var isFiltered = function(marker){
    if(((parseInt(spots[marker.spotId].distance_from_me) >= parseInt($('#distRangeInput').val())) || filter.distance)
    && ((parseFloat(spots[marker.spotId].wave_height) >= parseFloat($('#rangeInput').val())) || filter.waveHeight)
    && ((spots[marker.spotId].wave_break_type == $("input[name='break']").filter(':checked' ).val()) || filter.breakType)
    && ((spots[marker.spotId].wave_direction == wave_direction.dir) || filter.breakDir)
    && ((spots[marker.spotId].surfing_level == $("input[name='level']").filter(':checked' ).val()) || filter.level)
    && ((spots[marker.spotId].name == $("#txtSrc").val().replace("חוף ", "")) || filter.name))
        return true;
    return false;
}

var setRelevantMarkers = function(){
    for(var i = 0; i < self.markers.length; i++)
        self.markers[i].setVisible(isFiltered(self.markers[i]));
}

var wave_direction = {dir:"ימין"};
$(function () {

    $('#rangeText').text(rangeValues[$('#rangeInput').val()]);
    $('#rangeInput').on('input change', function () {
        $('#rangeText').text(rangeValues[$(this).val()]);
        filter.waveHeight = false;
        setRelevantMarkers();
    });
    
    $('#distText').text(distValues[$('#distRangeInput').val()]);
    $('#distRangeInput').on('input change', function () {
        $('#distText').text(distValues[$(this).val()]);
        filter.distance = false;
        setRelevantMarkers();
    });

    $("input[name='break']").change(function(){
        filter.breakType = false;
        setRelevantMarkers();
    });

    Object.observe(wave_direction, function(changes) {
        filter.breakDir = false;
        setRelevantMarkers();
    });


    $("input[name='level']").change(function(){
        filter.level = false;
        setRelevantMarkers();
    });

    $('#txtSrc').on('input',function(e){
        filter.name = false;
        if($("#txtSrc").val() == "") {
            for (var i = 0; i < self.markers.length; i++)
                self.markers[i].setVisible(true);
        }
        else {
            setRelevantMarkers();
        }
    });
});

function markRightSurfDirection(){
	var img2 = document.getElementById("break2Img");
    wave_direction.dir = "ימין";
    if(img2.className == "imgBackgroung"){
		img2.className = "";	
	}
  	var img1 = document.getElementById("break1Img");
  	img1.className = "imgBackgroung";
}

function markLeftSurfDirection(){
	var img1 = document.getElementById("break1Img");
    wave_direction.dir = "שמאל";
    if(img1.className == "imgBackgroung"){
		img1.className = "";	
	}
  	var img2 = document.getElementById("break2Img");
  	img2.className = "imgBackgroung";
}

$('.dropdown-menu').on('click', function(event){
	event.stopPropagation();
});