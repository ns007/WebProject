/**
 * Created by ysapir on 2/13/2016.
 */


var user = "";
getSessionVar("picName").success(function(data){
    $('#userPic').css({'background-image':'url(includes/img/' + data + '.jpg)'});
    $('#logoutButton').click(closeSession);
});