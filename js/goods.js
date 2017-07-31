/**
 * Created by CongCong on 2017/7/25.
 */
(function () {
    function Good() {

    }
    Good.prototype.showGoodsView = function (url,param,superView) {
        $.get(url,param,function (result) {
            // console.log(result.data);
            var html = '';
            result.data.forEach(function (obj) {
                // console.log(obj);
                html += `
                    <div class="good-list" data-id="${obj.goods_id}">
                        <p class="goods-name">${obj.goods_name}</p>
                        <p><img src="${obj.goods_thumb}" alt=""></p>
                        <p class="price">${obj.price}</p>
                        <p class="desc">${obj.goods_desc}</p>
                    </div>
                `;
                // console.log(obj);
            })
            superView.html(html);


            $('.good-list').click(function () {
                var gid = $(this).data('id'); //专门用于获取data-*扩展属性的值
                // console.log(gid);
                location.href = 'html/detail.html?goods_id='+gid;
                /*$.get(PRODUCT_HOST+PRODUCT_GOODS,{goods_id:gid},function (result) {
                    // console.log(result.data);
                    var obj = '';
                    if (result.data.length==2 ||result.data.length==1){
                        obj = result.data[0];
                    }
                    console.log(obj);
                    var detail = '';
                    detail=`
                        <div>
                            <h1>商品详情</h1>
                            <img src="${obj.goods_thumb}" alt="">  
                            <button>-</button>
                            <input type="text" value="1">
                            <button>+</button>
                            <a class="addCart" href="${obj.goods_id}">加入购物车</a>
                        </div>
                    `;
                    $('.goods-container').html(detail);
                });*/
            });
        });
        //搜索某个商品
        $('.kw').keyup(function () {
            if ($(this).val()==''){
                return;
            }
            $.get(url,{search_text:$(this).val()},function (result) {
                console.log(result);
            });
        });

    };

    window.Good = Good;
})();