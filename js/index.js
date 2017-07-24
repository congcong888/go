/**
 * Created by CongCong on 2017/7/24.
 */

function init(){
    $('.login').click(function () {
        new Login(function (user) {
            $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
        });
    });
}
init();