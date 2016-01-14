<?php
    $dbhost = "166.62.8.11";
    $dbuser = "auxstudDB5";
    $dbpass = "auxstud5DB1!";
    $dbname = "auxstudDB5";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    $sql = "SELECT * FROM spot_74";
    $res = mysqli_query($connection, $sql);
    while ($row = mysqli_fetch_row($res)) {
        echo "<section><h2>";
        var_dump($row);
        echo "</section></h2>";
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>NetanelShiloWeb</title>
</head>
<body>
<div id="big_wraper">
</div>
</body>
</html>