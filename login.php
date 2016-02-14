<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="includes/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="includes/css/login.css"/>
    <script src="includes/js/jquery-2.1.4.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="includes/js/mySpotGoogleMapScripts.js"></script>
</head>
<body>
<a href="#" id="logoLogin"></a>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="panel panel-login">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-xs-6">
                            <a href="#" class="active" id="login-form-link">היכנס</a>
                        </div>
                        <div class="col-xs-6">
                            <a href="#" id="register-form-link">הירשם</a>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="panel-body">
                    <div class="row" id="logRegForms">
                        <div class="col-lg-12">
                            <form id="login-form" action="javascript:login();" method="get" role="form"
                                  style="display: block;">
                                <div class="form-group">
                                    <input type="text" name="username" id="username" tabindex="1" class="form-control"
                                           placeholder="שם משתמש" value="">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" id="password" tabindex="2"
                                           class="form-control" placeholder="סיסמא">
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-sm-offset-3">
                                            <input type="submit" name="login-submit" id="login-submit" tabindex="4"
                                                   class="form-control btn btn-login" value="היכנס">
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <form id="register-form" action="javascript:register();" method="post"
                                  role="form" style="display: none;">
                                <div class="form-group">
                                    <input type="text" name="username" id="regUsername" tabindex="1" class="form-control"
                                           placeholder="שם משתמש" value="">
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" id="email" tabindex="1" class="form-control"
                                           placeholder="אימייל" value="">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" id="regPassword" tabindex="2"
                                           class="form-control" placeholder="סיסמא">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="confirm-password" id="confirmPassword" tabindex="2"
                                           class="form-control" placeholder="אימות סיסמא">
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-sm-6 col-sm-offset-3">
                                            <input type="submit" name="register-submit" id="register-submit"
                                                   tabindex="4" class="form-control btn btn-register"
                                                   value="הירשם כעת">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="notificationModal" role="dialog" dir="rtl">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="modalTitle"></h4>
                </div>
                <div class="modal-body modal-lg">
                    <p id="modalMsg"></p>
                </div>
                <div class="clear"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="includes/js/login.js"></script>
</body>
</html>