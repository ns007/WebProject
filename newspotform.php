<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="includes/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="includes/css/mySpotGoogleMapStyle.css"/>
    <link rel="stylesheet prefetch" href="http://fonts.googleapis.com/css?family=Noto+Sans:700"/>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <script src="includes/js/jquery-2.1.4.min.js"></script>
    <script src="includes/js/mySpotGoogleMapScripts.js"></script>
    <script src="includes/js/photo.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
<div id="wrapper">
    <!--<header>
        <a href="#" id="userPic">
           <img src="includes/img/logo.jpg">
        </a>
        <a href="#">
            <img src="includes/img/logo2.jpg" id="appLogo">
        </a>
        
        <div class="dropdown hamburgerCl">
            <img src="includes/img/hamburger.jpg" type="button" data-toggle="dropdown"/>
            <ul id="hamburgerNav" class="dropdown-menu pull-right">
                <li class="textAlignedRight"><a href="#">דף הבית</a></li>
                <li class="textAlignedRight"><a href="spots.html">ספוטים</a></li>
                <li class="textAlignedRight"><a href="newspot.html">הוסף ספוט</a></li>
                <li class="textAlignedRight"><a href="#">התראות</a></li>
                <li class="textAlignedRight"><a href="#">עדכון תנאי גלישה</a></li>
            </ul>
        </div>
        <nav id="navbar">
  			<ul>
    			<li><a class="active" href="#"></a></li>
    			<li><a href="spots.html">ספוטים</a></li>
    			<li><a href="newspot.html">הוסף ספוט</a></li>
    			<li><a href="#">התראות</a></li>
    			<li><a href="#">עדכון תנאי גלישה</a></li>
  			</ul>
		</nav>
    </header>-->
	<header id="glbHeader">
        <a href="#" id="userPic">
            <img src="includes/img/logo.jpg">
        </a>
        <a href="#" id="logo">
        </a>
        <img src="includes/img/hamburger.jpg" id="hamburderButton" onclick="showHam()"/>
    </header>
    <nav id="navMenu" class="navMenuState">
        <ul id="menu">
            <li><a href="#">התראות</a></li>
            <li><a href="#">עדכון תנאי גלישה</a></li>
            <li><a href="addspot.html" class="selected" >הוסף ספוט</a></li>
            <li><a href="spots.html">ספוטים</a></li>
            <li><a href="index.html">דף הבית</a></li>
        </ul>
    </nav>
    <section dir="rtl">
        <h2><b>פרטי הספוט</b></h2>
    </section>
    <br>
    <form class="addform">
    	<label class="inputlbl">
    		<p class="inputtxt">שם החוף</p>
    		<input type="text" name="SpotName" value="שם החוף" >
    	</label>
    	<br>
    	<label class="inputlbl">
    		<p class="inputtxt">תמונה</p>
    		<section class="upload">
    			<input type="file" name="upload" >
    			<img src="includes/img/imgicon.png">
    		</section>
    	</label>
    	<br>
    	<label class="inputlbl">
    		<p class="inputtxt">דירוג</p>
    		<div class="cont">
        		<div class="stars">
                	<label class="star st1" onclick="changeStars(1)"></label>
                	<label class="star st1" onclick="changeStars(2)"></label>
                	<label class="star st1" onclick="changeStars(3)"></label>
                	<label class="star st1" onclick="changeStars(4)"></label>
                	<label class="star st1" onclick="changeStars(5)"></label>
        		</div>
    		</div>
    	</label>
    	<br>
    	<label class="inputlbl">
    		<p class="inputtxt">רמה מומלצת</p>
    		<label class="surflvl"><input type="radio" name="SpotName" value="מתחילים" class="surflvlr"></label><p>מתחילים</p>
    		<label class="surflvl"><input type="radio" name="SpotName" value="מתקדמים" class="surflvlr"></label><p>מתקדמים</p>
    		<label class="surflvl"><input type="radio" name="SpotName" value="מקצוענים" class="surflvlr"></label><p>מקצוענים</p>
    	</label>
    	<label class="pages">
    		<label class="surflvl"><input type="radio" name="SpotName" class="surflvlr"></label>
    		<label class="surflvl"><input type="radio" name="SpotName"  class="surflvlr"></label>
    		<label class="surflvl"><input type="radio" name="SpotName"  class="surflvlr"></label>
    	</label>
    </form>
    <script>
        var sql = "select u.username, p.* from posts_74 p join users_74 u on p.user_id = u.id";
        var posts = [];
        $.ajax({
            url: 'includes/php/getDataFromDB.php',
            type: 'GET',
            data: {sql:sql},
            success: function(data) {
                posts = JSON.parse(data);
                posts.forEach(function(spot) {
                    $('#posts').append("<article>" +
                            "<img src='includes/img/logo.jpg' alt='user'>" +
                            "<section>" +
                            "<br>" +
                            "<h2>" + spot.username + "</h2>" +
                            "<p class='updatetime'>"+ "עדכן תנאי גלישה לפני 13 דקות" +"</p>" +
                            "</section>" +
                            "<br>" +
                            "<h2>" + spot.msg + "</h2>" +
                            "<img class='postImage' src='includes/img/" + spot.img_name + ".png'>" +
                            "</article>")
                })
            }
        });
    </script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnmvaIGMxpoWZoXkIs_JCGoetynTVfCks&callback=initMap">
    </script>
</div>
</body>
</html>