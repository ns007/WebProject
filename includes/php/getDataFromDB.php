<?php
    $dbhost = "166.62.8.11";
    $dbuser = "auxstudDB5";
    $dbpass = "auxstud5DB1!";
    $dbname = "auxstudDB5";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
    mysqli_set_charset($connection,"utf8");

    $sql = $_GET['sql'];
    $res = mysqli_query($connection, $sql);
    $row2 = array();
    while ($row = mysqli_fetch_assoc($res)) {
        array_push($row2,$row);
    }
    $connection->close();
    echo json_encode($row2);
?>