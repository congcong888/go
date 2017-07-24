/**
 * Created by CongCong on 2017/7/24.
 */
var $ = jQuery.noConflict();

(function () {
    function Login(success) {
        this.showLogin(success);
    }

    //显示界面的方法
    Login.prototype.showLogin = function (success) {
        var loginContainer = $('<div class="loginContainer"></div>');
        var closeButton = $('<span class="close">&times;</span>');
        var usernameInput = $('<p><input type="text" placeholder="用户名"></p>');
        var passwordInput = $('<p><input type="password" placeholder="密码"></p>');
        var loginButton = $('<button>登录</button>');

        loginContainer.append(closeButton);
        loginContainer.append(usernameInput);
        loginContainer.append(passwordInput);
        loginContainer.append(loginButton);
        $(document.body).append(loginContainer);
        console.log(closeButton);
        closeButton.click(function () {
            $(this).parent().remove();
        });

        loginButton.click(function () {
            $.post(PRODUCT_HOST+LOGIN,{status:'login',username:usernameInput.children().val(),password:passwordInput.children().val()},function (data) {
                console.log(data);
                if (data.code==0){
                    loginContainer.slideUp(1000,function () {
                        loginContainer.remove();
                    });
                    success(data.data);
                }else {
                    console.log(data.message);
                }
            });
        });
    }

    window.Login = Login;
})();