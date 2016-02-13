<?php

session_start();
if($_SESSION["isLogin"] == true) {
    readfile("includes/staticPages/index.html");
}
else{
    readfile("includes/staticPages/403.html");
}
?>