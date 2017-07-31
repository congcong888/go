/**
 * Created by Administrator on 2017/7/25.
 */

var $ = jQuery.noConflict();
(function () {

    //现在导航上面的每一个按钮
    function NavigatorItem(obj) {
        var obj = obj||{};
        this.name = obj.cat_name;
        this.id = obj.cat_id;
        this.item = $("<li>"+this.name+"</li>");
    }
    //itemClick -> 是NavigatorItem 上面的itemClick
    //callback 函数中的形参
    NavigatorItem.prototype.itemClick = function (callback) {
        //click -> 是this.item调用的  是jquery对象里面的click
        this.item.on("click",this,callback);
        return this;
    };

    // function JQuery(selector) {
    //     this.dom = document.querySelector(selector);
    // }
    // JQuery.prototype.on = function (type,parm,fun) {
    //     this.dom.addEventListener(type,function (event) {
    //         event.data  = parm;
    //         fun(event);
    //     });
    // };

    window.NavigatorItem = NavigatorItem;

    // function JQuery() {
    //
    // }
    // JQuery.prototype.click = function (callback) {
    //     // this.xx.addEventListener("click",callback);
    //     this.xx.onclick = callback;
    // };






    // new NavigatorItem().click(function () {
    //     $("<div>weeewew</div>")
    // });

    function Navigator() {

    }
    //点击导航按钮的时候 需要知道 点击按钮的商品类型id
    Navigator.prototype.createView = function (url,superView,callback) {
        $.get(url,function (result) {
            if (result.code == 0){
                result.data.forEach(function (obj) {
                    //    创建导航列表
                    superView.append(new NavigatorItem(obj).itemClick(callback).item);
                });
            }
        });
        return this;
    };

    window.Navigator = Navigator;

    /*function Navigator() {

    }
    Navigator.prototype.createView = function (url, superView) {
        $.get(url,function (result) {
            // console.log(result);
            var html = '';
            $.each(result.data,function (i, p) {
                // console.log(p);
                html += `
                    <li>${p.cat_name}</li>
                `;
            });
            superView.html(html);
            $('.main-nav-container>li').click(function (e) {
                console.log(e);
            });
        });
    }

    window.Navigator = Navigator;*/
})();