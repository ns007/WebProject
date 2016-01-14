var isShowing = false;

function showHideFilter() {
	var filter = document.getElementById("filter");
	if(isShowing==false){
		filter.style.display = "block";
		isShowing = true;
	}
	else if(isShowing==true){
		filter.style.display = "none";
		isShowing = false;
	}
}


var rangeValues = {
    	"1": "1M","2": "2M","3": "3M","4": "4M","5":"5M","6":"6M","7":"7M","8": "8M","9": "9M","10": "10M"
};

var distValues = {
    	"1": "1KM","2": "2KM","3": "3KM","4": "4KM","5":"5KM","6":"6KM","7":"7KM","8": "8KM","9": "9KM","10": "10KM",
    	"11":"11KM","12": "12KM","13": "13KM","14": "14KM","15":"15KM","16":"16KM","17":"17KM","18": "18KM","19": "19KM","20": "20KM",
    	"21":"21KM","22": "212KM","23": "23KM","24": "24KM","25":"25KM","26":"26KM","27":"27KM","28": "28KM","29": "29KM","30": "30KM"
};
$(function () {

    $('#rangeText').text(rangeValues[$('#rangeInput').val()]);

    $('#rangeInput').on('input change', function () {
        $('#rangeText').text(rangeValues[$(this).val()]);
    });
    
    $('#distText').text(distValues[$('#distRangeInput').val()]);

    $('#distRangeInput').on('input change', function () {
        $('#distText').text(distValues[$(this).val()]);
    });

});

function imgclick1(){
	var img2 = document.getElementById("break2Img");
	if(img2.className == "imgBackgroung"){
		img2.className = "";	
	}
  	var img1 = document.getElementById("break1Img");
  	img1.className = "imgBackgroung";
  	//img.style.background = "#690DFF";
  	
}
function imgclick2(){
	var img1 = document.getElementById("break1Img");
	if(img1.className == "imgBackgroung"){
		img1.className = "";	
	}
  	var img2 = document.getElementById("break2Img");
  	img2.className = "imgBackgroung";
  	
}