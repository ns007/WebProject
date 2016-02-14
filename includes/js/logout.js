var closeSession = function () {
    $.ajax({
        url: 'includes/handlers/sessionFinisher.php',
        type: 'GET',
        cache: false
    }).success(function(){
        window.open('login.php', '_self', false);
    });
};
