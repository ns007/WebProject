<?php

session_start();
session_unset();
$_SESSION["isLogin"] = false;
echo "OK";
?>