<?php

session_start();
if($_SESSION["isLogin"] == true) {
    readfile("includes/staticPages/newspotform.html");
}
else{
    readfile("includes/staticPages/403.html");
}
?>
