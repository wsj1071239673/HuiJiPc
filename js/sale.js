$(function () {
    //banner图切换
    $('.sale-banner ul .left').hover(function () {
        $('.sale-banner .sale-banner-pic').stop(true, true).animate({ marginLeft: "-1200px" });
    })
    $('.sale-banner ul .right').hover(function () {
        $('.sale-banner .sale-banner-pic').stop(true, true).animate({ marginLeft: "" });
    })

    //预约维修tab切换
    $('.sale-service .sale-service-item').first().show();
    $('.sale-service-list span').click(function () {
        $(this).css({ textDecoration: 'underline' }).siblings().css({ textDecoration: 'none' });
        $('.sale-service .sale-service-item').eq($(this).index()).show().siblings().hide();
    })

    //实力展示轮播图
    // var t = 0;
    // $('.sale-rt').click(fun);
    // function fun() {
    //     t++;
    //     if (t >= $('.sale-abliity-list1 li').length-1) {
    //         t = 0;
    //     }
    //     $('.sale-abliity-list1 .sale-abliity-list2').animate({ marginLeft: -296 * t }, 500);
    // }
    // $('.sale-lt').click(function () {
    //     t--;
    //     if (t < 0) {
    //         t = $('.sale-abliity-list1 li').length-1;
    //     }
    //     $('.sale-abliity-list1 .sale-abliity-list2').animate({ marginLeft: -296 * t }, 500);
    // })

    // 自动轮播
    function lun(){
        var index = 0;
        function auto(){
            index++;
            if(index>5){
                index = 1;
                $('.sale-abliity-list1 .sale-abliity-list2').animate({ marginLeft: 0 },0);
            }
            $('.sale-abliity-list1 .sale-abliity-list2').animate({ marginLeft: -296 * index }, 500);
        }
        var time = setInterval(auto,3000);
        $('.sale-abliity-list1').hover(
            function(){
                clearInterval(time);
            },
            function(){
                time = setInterval(auto,3000);
            }
        )
    }
    lun()



    
    //联系我们的特效
    $('.sale-relation-box li').on({
        mouseover: function () {
            $(this).css({ boxShadow: "0 0 10px #666" ,marginTop:"-2px"}).show();
        },
        mouseleave: function () {
            $(this).css({ boxShadow: "none" ,marginTop:"0"}).show();
        }
    })

})
