var strCookie=document.cookie;
console.log(strCookie.length)
var arrCookie=strCookie.split("; ");
var getCookie2;
for(var i=0;i<arrCookie.length;i++){
    var arr=arrCookie[i].split("=");
    //找到名称为userId的cookie，并返回它的值
    if("user"==arr[0]){
        getCookie2=arr[1];
        break;
    }
}
console.log(getCookie2)
// 鼠标经过主图放大镜出现
$('.big-pic').hover(
    function () {
        $('.show-galss').show();
        // $('.big-move').show();
    },
    function () {
        $('.show-galss').hide();
        // $('.big-move').hide();
    }
)
// 主图放大镜效果
var bigImg = document.getElementsByClassName('big-pic')[0];
var smallImg = document.getElementsByClassName('big-move')[0];
var showImg = document.getElementsByClassName('show-galss')[0];
var show = document.querySelector('.show-galss img');
// console.log(show,'wf');
var maxWidth = bigImg.offsetWidth - smallImg.offsetWidth;
var maxHeight = bigImg.offsetHeight - smallImg.offsetHeight;
// console.log(maxWidth+"=="+maxHeight)
bigImg.onmousemove = function (e) {
    var nn = bigImg.getBoundingClientRect().x;
    var mm = bigImg.getBoundingClientRect().y;
    // console.log(nn+"=="+mm)
    var x = e.pageX - nn - smallImg.offsetWidth / 2;
    var y = e.pageY - mm - smallImg.offsetHeight / 2;
    // console.log(x+"=="+y)
    if (x > maxWidth) {
        x = maxWidth
    }
    if (x < 0) {
        x = 0;
    }
    if (y > maxHeight) {
        y = maxHeight;
    }
    if (y < 0) {
        y = 0;
    }
    smallImg.style.left = x + 'px';
    smallImg.style.top = y + 'px';
    // console.log(-(showImg.offsetWidth / smallImg.offsetWidth * x)+460 )
    // console.log(show,'wf');
    show.style.left = -showImg.offsetWidth / smallImg.offsetWidth * x + 'px';
    show.style.top = -showImg.offsetHeight / smallImg.offsetHeight * y + 'px';
}

// 点击主图下的小图切换主图及小图遮罩层消失
var arrImg = ['images/jt/095.jpg', 'images/jt/096.jpg', 'images/jt/097.jpg', 'images/jt/098.jpg', 'images/jt/099.jpg'];
var arrImges = ['images/jt/0100.jpg', 'images/jt/0103.jpg', 'images/jt/0104.jpg', 'images/jt/0101.jpg', 'images/jt/0102.jpg'];
var small = document.querySelectorAll('.small-img-pic');
var big = document.querySelector('.big-pic img')
var galss = document.querySelector('.show-galss img')
for (var i = 0; i < small.length; i++) {
    small[i].index = i;
    small[i].onmouseover = function () {
        small[this.index].children[1].style.display = 'none';
        big.src = arrImg[this.index];
        galss.src = arrImges[this.index];
    }
    small[i].onmouseout = function () {
        small[this.index].children[1].style.display = 'block';
    }
}

// 超值套餐优惠配件开始  
$('.setmeal-top-right li').first().show(function () {
    $(this).css({ background: "#505050", color: "white" });
})
$('.setmeal-bot-tab li').first().show()
$('.setmeal-top-right li').click(function () {
    $(this).css({ background: "#505050", color: "white" }).siblings().css({ background: "", color: "" });
    $('.setmeal-bot-tab li').eq($(this).index()).show().siblings().hide();
})
// 商品详情左侧相关评测自动向上轮播  
function lun1(){
    var index = 0;
    function auto(){
        index++;
        if(index>2){
            index = 1;
            $('.content-list').animate({ marginTop: 0 },0);
        }
        $('.content-list').animate({ marginTop: -210 * index }, 1000);
    }
    var time = setInterval(auto,3000);
    $('.pingce-box-view').hover(
        function(){
            clearInterval(time);
        },
        function(){
            time = setInterval(auto,3000);
        }
    )
}
lun1()


// 商品详情左侧同类其他品牌开始自动向上轮播 
function lun2(){
    var index = 0;
    function auto(){
        index++;
        if(index>12){
            index=1;
            $('.temp-wrap ul').animate({marginTop: 0 },0);
        }
        $('.temp-wrap ul').animate({ marginTop: -52 * index }, 500)
    }
    var time = setInterval(auto,3000);
    $('.temp-wrap').hover(
        function(){
            clearInterval(time);
        },
        function(){
            time = setInterval(auto,3000);
        }
    )
}
lun2();


// 商品详情左侧同类排行榜开始tab切换
$('.detail-left-rank .lifttits li').first().css({ background: "red" }).show();
$('.detail-left-rank .brother div').first().show();
$('.detail-left-rank .lifttits li').click(function () {
    $(this).css({ background: "red" }).siblings().css({ background: "" });
    $('.detail-left-rank .brother div').eq($(this).index()).show().siblings().hide()
})

// 商品详情右侧描述切换开始
$('.detail-right-tab li').hover(
    function () {
        $(this).css({ color: 'red' })
    },
    function () {
        $(this).css({ color: '' })
    }
)
$('.detail-right-list li.l1').first().show();
$('.detail-right-tab li span').first().show()
$('.detail-right-tab li').click(function () {
    $('.detail-right-tab li span').eq($(this).index()).show().parent().siblings().children('span').hide();
    $('.detail-right-list li.l1').eq($(this).index()).show().siblings().hide();
})
// 商品实拍开始
$('.detail-right-tab li.live').click(function () {
    $('.detail-right-tab .live-mak').show();
})
$('.detail-right-tab .live-product .close').click(function () {
    console.log($('.detail-right-tab li.live').children('.live-mak'))
    $('.detail-right-tab li.live').children('.live-mak').hide();
})
$('.product-left img').first().show().siblings().hide();
// 商品详情右侧描述使用心得tab切换开始
$('.total-btn li').first().css({ color: 'red' })
$('.total-show li').first().show()
$('.total-btn li').click(function () {
    $(this).css({ color: 'red' }).siblings().css({ color: '' })
    $('.total-show li').eq($(this).index()).show().siblings().hide()
})
// 商品详情右侧描述商品咨询tab切换开始
$('.consult-all ul.tab1 li').first().css({ color: 'red' })
$('.consult-all ul.tab2 li').first().show()
$('.consult-all ul.tab1 li').click(function () {
    $(this).css({ color: 'red' }).siblings().css({ color: '' });
    $('.consult-all ul.tab2 li').eq($(this).index()).show().siblings().hide();
})
// 加入购物车
function car(){
    $('.shop-buy ul li.gwc').click(function(){
        $('.shop-buy .shou').show();
        var price=$('.wrapper .shop-price-box .pro-price big.price').html();
        var name=$('.wrapper .shop-title strong').html();
        var src=$('.wrapper .shop-color ul li a img').attr('src');
        console.log(price);
        console.log(src);
        console.log(name);
        console.log(getCookie2)
        $.ajax({
            type:"get",
            url:"api/shopCar/shopCar.php",
            data:{
                type:3,
                cookie:getCookie2,
                listid:11,
                price:price,
                src:src,
                name:name
            },
            dataType:"json",
            success:function(data){
            }
        })
    });
    $('.shop-buy ul li.gwc').mouseout(function(){
        $('.shop-buy .shou').hide();
    })
}
car()