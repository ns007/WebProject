<?php
    $dbhost = "166.62.8.11";
    $dbuser = "auxstudDB5";
    $dbpass = "auxstud5DB1!";
    $dbname = "auxstudDB5";
    $connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

    $sql = $_POST['sql'];

    if ($connection->query($sql) === TRUE) {
        echo "OK";
    } else {
        echo "Error";
    }

    $connection->close();
?>