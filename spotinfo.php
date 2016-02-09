<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="includes/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="includes/css/HeaderStyle.css"/>
    <link rel="stylesheet" href="includes/css/navMenu.css"/>
    <link rel="stylesheet" href="includes/css/rankingStars.css"/>
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
    <header id="glbHeader">
        <a href="#" id="userPic"></a>
        <a href="#" id="logo"></a>
        <a href="#" id="hamburgerButton"></a>
    </header>
    <nav id="navMenu" class="navMenuState">
        <ul id="menu">
            <li><a href="#">התראות</a></li>
            <li><a href="#">עדכון תנאי גלישה</a></li>
            <li><a href="newspot.html">הוסף ספוט</a></li>
            <li><a href="spots.html">ספוטים</a></li>
            <li class="firstNavLink"><a href="index.html">דף הבית</a></li>
        </ul>
    </nav>
    <div class="clear"></div>
    <section id="spotInfo">
        <h2 id="spotName"></h2>
        <h3><span id="spotCity" class="txtInfo"></span><span id="spotRegion" class="txtInfo"></span></h3>
    </section>
    <div id="map">
    </div>
    <div class="starsContainer">
        <div class="stars">
            <label class="star st1"></label>
            <label class="star st1"></label>
            <label class="star st1"></label>
            <label class="star st1"></label>
            <label class="star st1"></label>
        </div>
    </div>

    <section id="getDrvDirections">
        <img src="includes/img/car.jpg" alt="car">
        <a>קבל הוראות נסיעה</a>
    </section>
    <section id="waterInfo">
        <img src="includes/img/wave-spotdetails.png" alt="car">
        <h3 class="dataTxt paddedWaterInfo" id="waveHeight"></h3>
        <img src="includes/img/clock-spotdetails.png" alt="car">
        <h3 class="dataTxt paddedWaterInfo" id="waveTiming"></h3>
        <img src="includes/img/tempratur-spotdetails.png" alt="car">
        <img src="includes/img/celcius-spotdetails.png" alt="car">
        <h3 class="dataTxt" id="waveTemp"></h3>
    </section>
    <section id="extendedSpotDetails">
        <h2 id="extendedSpotDetailsHeader">פרטי חוף</h2>
        <section id="extendedSpotDetailsBackground">
            <section id="spotDataRightBlock">
                <h4 class="spotDataKey">רוח מיטבית</h4>
                <h2 class="spotDataValue" id="optWind"></h2>
                <h4 class="spotDataKey">רמה ממולצת</h4>
                <h2 class="spotDataValue" id="level">/p>
                <h4 class="spotDataKey">עונה</h4>
                <h2 class="spotDataValue" id="season"></h2>
                <h4 class="spotDataKey">סוג שבירה</h4>
                <h2 class="spotDataValue" id="waveBreakType"></h2>
            </section>
            <section id="spotDataLeftBlock">
                <h4 class="spotDataKey">סוג שבירה</h4>
                <h2 class="spotDataValue" id="waveBreakType2"></h2>
                <h4 class="spotDataKey">כיוון שבירה</h4>
                <h2 class="spotDataValue" id="waveDirection"></h2>
                <h4 class="spotDataKey">סוג תחתית</h4>
                <h2 class="spotDataValue" id="bottomType"></h2>
                <h4 class="spotDataKey">גובה גל</h4>
                <h2 class="spotDataValue" id="waveHeightData"></h2>
            </section>
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
                    <div id="drivingInstrucionsPanel">
                        <div id="directionsMap"></div>
                        <div id="directionsPanel"></div>
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