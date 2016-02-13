<?php

session_start();
$_SESSION["isLogin"] = true;
$_SESSION["username"] = $_GET['username'];
$_SESSION["picName"] = $_GET['picName'];
echo "OK";
//session_unset();
//session_destroy();
?>