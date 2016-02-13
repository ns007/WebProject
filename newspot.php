<?php

session_start();
if($_SESSION["isLogin"] == true) {
    readfile("includes/staticPages/newspot.html");
}
else{
    readfile("includes/staticPages/403.html");
}
?>
