<?php
$dbhost = "166.62.8.11";
$dbuser = "auxstudDB5";
$dbpass = "auxstud5DB1!";
$dbname = "auxstudDB5";
$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
mysqli_set_charset($connection, "utf8");

$sql = $_POST['sql'];
if ($connection->query(stripslashes($sql)) === TRUE) {
    echo "OK";
} else {
    echo $connection->error;
}

$connection->commit();
$connection->close();
?>