<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="includes/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="includes/css/HeaderStyle.css"/>
    <link rel="stylesheet" href="includes/css/newSpot.css"/>
    <link rel="stylesheet" href="includes/css/navMenu.css"/>
    <link rel="stylesheet" href="includes/css/rankingStars.css"/>
    <link rel="stylesheet" href="includes/css/mySpotGoogleMapStyle.css"/>
    <link rel="stylesheet prefetch" href="http://fonts.googleapis.com/css?family=Noto+Sans:700"/>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <script src="includes/js/jquery-2.1.4.min.js"></script>
    <script src="includes/js/mySpotGoogleMapScripts.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <meta charset="UTF-8">
</head>
<body>
<div id="wrapper">
    <header id="glbHeader">
        <section id="logos-container">
            <a href="#" id="userPic"></a>
            <a href="#" id="logo"></a>
        </section>
        <a href="#" id="hamburgerButton"></a>
    </header>
    <nav id="navMenu" class="navMenuState">
        <ul id="menu">
            <li><a href="index.html" class="firstNavLink">דף הבית</a></li>
            <li><a href="spots.html">ספוטים</a></li>
            <li><a href="newspot.html" class="selected">הוסף ספוט</a></li>
            <li><a href="#">עדכון תנאי חוף</a></li>
            <li><a href="#">התראות</a></li>
        </ul>
    </nav>

    <section id="spotDetails">
        <h2>פרטי הספוט</h2>
    </section>
    <form action="" method="get">
        <div class="col-2">
            <label>
                שם החוף
                <input  type="text" placeholder="אנא הקש שם חוף" id="sptName" name="bitchName" value="" tabindex="1" required>
            </label>
        </div>

        <div class="col-2">
            <label>
                עיר
                <input  type="text" placeholder="אנא הקש שם עיר" id="sptCity" name="cityName" value="" tabindex="1" required>
            </label>
        </div>

        <div class="col-2">
            <label>
                אזור
                <input  type="text" placeholder="אנא הקש את אזור החוף" id="sptRegion" name="cityName" value="" tabindex="1" required>
            </label>
        </div>

        <div class="col-2" id="imgUpload">
            <label>
                תמונה
                <input  type="file"  id="sptImg" name="pass" value="" tabindex="2">
            </label>
        </div>
        <div class="col-2" id="dirug">
            <label>
                דירוג
                <div class="cont">
                    <div class="stars">
                        <label class="star st1"></label>
                        <label class="star st1"></label>
                        <label class="star st1"></label>
                        <label class="star st1"></label>
                        <label class="star st1"></label>
                    </div>
                </div>
            </label>
        </div>
        <div class="col-2" id="age">
            <label>
                רמה מומלצת
                <select name="surfingLevel" id="surfingLevel" tabindex="10">
                    <option value="מתחילים" selected>מתחילים</option>
                    <option value="מתקדמים" >מתקדמים</option>
                    <option value="מקצוענים">מקצוענים</option>
                </select>
            </label>
        </div>

        <div class="col-2">
            <label>
                כיוון שבירה
                <select name="waveDirection" id="waveDirection" tabindex="11">
                    <option value="" selected></option>
                    <option value="ימין">ימין</option>
                    <option value="שמאל" >שמאל</option>
                </select>
            </label>
        </div>

        <div class="col-2">
            <label>
                סוג שבירה
                <select name="waveBrakeType" id="waveBrakeType" tabindex="11">
                    <option value="שבירה" selected>שבירת ריף</option>
                    <option value="ריף">ריף</option>
                    <option value="פוינט" >פוינט</option>
                </select>
            </label>
        </div>
        <div class="col-2">
            <label>
                סוג תחתית
                <select name="bottomType" id="bottomType" tabindex="11">
                    <option value="חול" selected>חול</option>
                    <option value="סלעית">סלעית</option>
                    <option value="שונית" >שונית</option>
                </select>
            </label>
        </div>

        <div class="col-2" id="optimalWind">
            <label>
                רוח מיטבית
                <input  type="text" placeholder="רוח מיטבית" id="sptOptimalWind" name="optimalWind" value="" tabindex="4" required>
            </label>
        </div>

        <div class="col-2" id="waterWind">
            <label>
                טמפרטורת מים
                <input  type="number" id="waterTemp" name="waterTemp" value="" tabindex="4" required>
            </label>
        </div>

        <div class="col-2" id="temp">
            <label>
                גובה גל ממוצע
                <input type="number"  type="range" id="wavesHeight" name="waveHeight" value="" tabindex="7">
            </label>
        </div>
        <div class="col-2">
            <label>
                כמות גולשים
                <select name="amntOfSurfers" id="amntOfSurfers" tabindex="10">
                    <option value="ריק">ריק</option>
                    <option value="בודדים" >בודדים</option>
                    <option value="המונים" >המוני</option>
                </select>
            </label>
        </div>

        <div class="col-2">
            <label>
                עונה מומלצת
                <select name="season" id="season" tabindex="11">
                    <option value="כל השנה" selected>כל השנה</option>
                    <option value="קיץ" >קיץ</option>
                    <option value="חורף">חורף</option>
                    <option value="סתיו" >סתיו</option>
                    <option value="אביב" >אביב</option>
                </select>
            </label>
        </div>

    </form>
    <div id="btnDiv">
        <button id="submitBtn">הוסף</button>
    </div>

</div>
</body>
</html>