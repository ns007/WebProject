/**
 * Created by ysapir on 2/13/2016.
 */
var password = document.getElementById("regPassword");
var confirmPassword = document.getElementById("confirmPassword");
var login = function () {
    var username = $('#username').val();
    var password = $('#password').val();
    var picName = "";
    getDataFromDB("SELECT userPicName AS 'answer' FROM 74_users WHERE username = '" + username + "' AND `password` = '" + password + "'").done(function (data) {
        if (data.length > 2) {
            picName = JSON.parse(data)[0].answer;
            openSession(username,picName).done(function () {
                window.open('index.php', '_self', false);
            });
        }
        else {
            $('#modalTitle').text("תהליך ההזדהות נכשל");
            $('#modalMsg').text("הייתה בעיה ביוזר ו/או בסיסמא שהוכנסו, אנא נסה שנית");
            $('#notificationModal').modal('show');
        }
    })
};

var register = function () {
    password = document.getElementById("regPassword");
    confirmPassword = document.getElementById("confirmPassword");
    var username = $('#regUsername').val();
    var email = $('#email').val();
    var date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' +
        ('00' + date.getUTCHours()).slice(-2) + ':' +
        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
        ('00' + date.getUTCSeconds()).slice(-2);

    if (password.value == confirmPassword.value) {
        var sql = "insert into 74_users (username,password,email,join_date) values ('" + username + "', '" + password.value + "', '" + email + "', '" + date + "');";
        postQueryToDB(sql).success(function (data) {
            $('#modalTitle').text("תהליך ההרשמה בוצע בהצלחה");
            $('#modalMsg').text("כעת תוכל להיכנס דרך חלונית 'היכנס'");
            $('#notificationModal').modal('show');
        });
    }
};

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("סיסמאות אינן תואמות זו את זו, נסה שנית");
    } else {
        confirmPassword.setCustomValidity('');
    }
}

var openSession = function (username,picName) {
    return $.ajax({
        url: 'includes/handlers/sessionStarter.php',
        type: 'GET',
        cache: false,
        data: {username: username, picName: picName}
    });
};

$(function () {

    $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    password.onchange = validatePassword;
    confirmPassword.onkeyup = validatePassword;
});
