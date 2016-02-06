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
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <meta charset="UTF-8">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
</head>
<body>
<div id="wrapper">
    <header>
        <a href="#" id="userPic">
            <img src="includes/img/logo.jpg">
        </a>
        <a href="#">
            <img src="includes/img/logo2.jpg" id="appLogo">
        </a>
        <!--<hamburger></hamburger>-->
        <div class="dropdown hamburgerCl">
            <img src="includes/img/hamburger.jpg" type="button" data-toggle="dropdown"/>
            <ul id="hamburgerNav" class="dropdown-menu pull-right">
                <li class="textAlignedRight"><a href="index.html">דף הבית</a></li>
                <li class="textAlignedRight"><a href="spots.html">ספוטים</a></li>
                <li class="textAlignedRight"><a href="newspot.html">הוסף ספוט</a></li>
                <li class="textAlignedRight"><a href="#">התראות</a></li>
                <li class="textAlignedRight"><a href="#">עדכון תנאי גלישה</a></li>
            </ul>
        </div>
    </header>

    <section id="info">
        <h2 id="spotname"></h2>
        <h3><span id="city" class="txtinfo"></span><span id="region" class="txtinfo"></span></h3>
    </section>
    <div id="map">
    </div>

    <div class="cont">
        <div class="stars">
            <form action="">
                <label class="star st1" onclick="changeRankStars(1, true)"></label>
                <label class="star st1" onclick="changeRankStars(2, true)"></label>
                <label class="star st1" onclick="changeRankStars(3, true)"></label>
                <label class="star st1" onclick="changeRankStars(4, true)"></label>
                <label class="star st1" onclick="changeRankStars(5, true)"></label>
            </form>
        </div>
    </div>

    <section id="driving">
        <section id="carpic">
            <img src="includes/img/car.jpg" alt="car">
        </section>
        <a id="driveinst" onclick="openDirectionsModal()">קבל הוראות נסיעה</a>
    </section>
    <section id="waterdata">
        <section class="datapic">
            <img src="includes/img/wave-spotdetails.png" alt="car">
        </section>
        <p class="datatxt" id="waveHeight"></p>
        <section class="datapic">
            <img src="includes/img/clock-spotdetails.png" alt="car">
        </section>
        <p class="datatxt" id="waveTiming"></p>
        <section class="datapic">
            <img src="includes/img/tempratur-spotdetails.png" alt="car">
        </section>
        <section class="datapic">
            <img src="includes/img/celcius-spotdetails.png" alt="car">
        </section>
        <p class="datatxt" id="waveTemp"></p>
    </section>
    <section id="dataheader">
        <h2 id="details">פרטי חוף</h2>
    </section>
    <section id="datadetails">
        <section id="datablock">
            <p class="datahead">רוח מיטבית</p>
            <p class="datainfo" id="optWind"></p>
            <p class="datahead">רמה ממולצת</p>
            <p class="datainfo" id="level">/p>
            <p class="datahead">עונה</p>
            <p class="datainfo" id="season"></p>
            <p class="datahead">סוג שבירה</p>
            <p class="datainfo" id="waveBreakType"></p>
        </section>
        <section id="datablock2">
            <p class="datahead2">סוג שבירה</p>
            <p class="datainfo2" id="waveBreakType2"></p>
            <p class="datahead2">כיוון שבירה</p>
            <p class="datainfo2" id="waveDirection"></p>
            <p class="datahead2">סוג תחתית</p>
            <p class="datainfo2" id="bottomType"></p>
            <p class="datahead2">גובה גל</p>
            <p class="datainfo2" id="waveHeightData"></p>
        </section>
    </section>
    <section id="posts">
    </section>
    <div class="modal fade" id="directionsModal" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" dir="rtl">הוראות נסיעה לספוט מועדף</h4>
                </div>
                <div class="modal-body modal-lg">
                    <div id="directions">
                        <div id="directionsMap"></div>
                        <div id="panel"></div>
                    </div>
                </div>
                <div class="clear"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAnmvaIGMxpoWZoXkIs_JCGoetynTVfCks&callback=mapDataManager">
    </script>
</div>
</body>
</html>