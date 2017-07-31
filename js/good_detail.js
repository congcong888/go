/**
 * Created by CongCong on 2017/7/26.
 */
function GoodDetail(url) {
    this.detail(url);
}
GoodDetail.prototype.detail = function (url) {

    var search = location.search;
    var i = search.lastIndexOf('=');
    var gid = search.slice(i+1);

    $.get(PRODUCT_HOST+PRODUCT_GOODS,{goods_id:gid},function (result) {
        // console.log(result.data);
        var obj = '';
        if (result.data.length==2 ||result.data.length==1){
            obj = result.data[0];
        }
        console.log(obj);
        var html = '';
        html=`
            <div>
                <img src="${obj.goods_thumb}" alt="">            
            </div>
        `;
        $('.detail-container').html(html);
    });
}

