/**
 * Created by CongCong on 2017/7/24.
 */

function init(){
    $('#header').load('html/header.html',function () {
        $('.login').click(function () {
            new Login(function (user) {
                $(".header-top-menu ul li:first-child").html("<a href='#'>"+user.username+"</a>");
            });
        });

        new Navigator().createView(PRODUCT_HOST+PRODUCT_TYPE,$(".main-nav-container"),function (event) {
            console.log(event);
        });
        // new Navigator().createView(PRODUCT_HOST+PRODUCT_TYPE,$('.main-nav-container'));
        new Good().showGoodsView(PRODUCT_HOST+PRODUCT_GOODS,null,$('.goods-container'));
    });

}
init();