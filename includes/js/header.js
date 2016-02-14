var user = "";
getSessionVar("picName").success(function(data){
    $('#userPic').css({'background-image':'url(includes/img/' + data + '.jpg)'});
    $('#logoutButton').click(closeSession);
});