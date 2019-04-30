$(function () {
    // 头部移入移除变色
    function Header() {
        $(".top-logo .top-prev").mouseover(function () {
            $(this).css({ backgroundColor: "#fff", color: "#c80f1e" });
            $(this).css({ cursor: "hand" });
        }).mouseout(function () {
            $(this).css({ backgroundColor: "#c80f1e", color: "#fff" });
        })
    }
    Header();
    // 结束

    // 移入下拉框出现
    function dropDown() {
        $(".top-nav .setup .aa").hover(function () {
            $(".top-nav .setup .pop-nav").show();
        }, function () {
            $(".top-nav .setup .pop-nav").hide();
        })
    }
    dropDown()
    // 结束

    // 右边服务列表移入移出变色
    function serviceList() {
        $(".navvip li a").mouseover(function () {
            $(this).css({ color: "#c80f1e" });
        }).mouseout(function () {
            $(this).css({ color: "#777" })
        })
    }
    serviceList()
    // 结束

    // 账户信息移入移出变色
    function information() {
        $(".MyInformation1 ul li a").mouseover(function () {
            $(this).css({ background: "#c80f1e", color: "#e1e1e1" });
        }).mouseout(function () {
            $(this).css({ background: "#fff", color: "#a2a2a2" })
        })
    }
    information();
    //结束

    //交易记录字体移入移出变色
    function transaction() {
        // e.preventDefault();
        $(".buyed .zuo .liebiao-img").children().eq(0).css({ color: "#c80f1e" });
        $(".buyed .zuo .liebiao-img a").click(function () {
            $(this).css({ color: "#c80f1e" }).siblings().css({ color: "#999" })
        })
        // $(".buyed .zuo .liebiao-img a").mouseover(function(){
        //     $(this).css({color:"#c80f1e"}).siblings().css({color:"#999"})
        // }).mouseout(function(){
        //     $(this).css({color:"#999"});
        // });
        $(".panes .pane div p a").mouseover(function () {
            $(this).css({ color: "#c80f1e" });
        }).mouseout(function () {
            $(this).css({ color: "#000" });
        })
    }
    transaction();
    // 结束

    // TAB却换
    function tab() {
        $('.youlike .like-title a').click(function () {
            var str = "";
            $.ajax({
                type: "get",
                url: "api/"
            })
        })
    }
    tab();
    // 结束
    
    // 向上轮播图
    function lun() {
        var index = 0;
        function auto() {
            index++;
            // console.log(index)
            if (index > 5) {
                index = 1;
                $(".tempWrap ul").animate({ marginTop: "0" }, 0);
            }
            $(".tempWrap ul").animate({ marginTop: -79 * index }, 500);
            // console.log($(".tempwp ul").length);
        }
        var time = setInterval(auto, 3000);
        $('.tempWrap').hover(function () {
            clearInterval(time);
        }, function () {
            time = setInterval(auto, 3000);
        });

    }
    lun()
    // 结束

    // 右侧导航
    $(function () {
        $('.righticon li').mouseover(function () {
            $(this).css({ background: 'rgba(255,0,0,0.5)' }).siblings().css({ background: 'none' })
            $('.rightpop li').eq($(this).index()).show().siblings().hide();
            // $('.rightpop li em').eq($(this).index()).show().siblings().hide();
        })
        $('.righticon li').mouseout(function () {
            $(this).css({ background: 'none' })
            $('.rightpop li').eq($(this).index()).hide();
            // $('.rightpop li em').eq($(this).index()).hide();
        })
        $('.rightpop li').mouseover(function () {

            $(this).show();
        })
        $('.rightpop li').mouseout(function () {

            $(this).hide();
            $('.righticon li').eq($(this).index()).css({ background: "none" })
        })
    })
    // 结束

    // tab切换轮播图
    function lunB() {
        $('.vipright2 .nav-2 .main-color').click(function (e) {
            e.preventDefault();
            $(this).css({ color: '#c80f1e' });
            $('.cparrow span').hide();
            $('.vipright2 .nav-2 .zzz').css({ color: '#000' });
            $('.img-list .TabCon1 .tejia').show();
            $('.img-list .TabCon2 .cplist .tempWrap-1').css({ display: "none" });
        });

        $('.vipright2 .nav-2 .zzz').click(function (e) {
            e.preventDefault();
            $(this).css({ color: '#c80f1e' });
            $('.cparrow span').show();
            $('.vipright2 .nav-2 .main-color').css({ color: '#000' });
            $('.img-list .TabCon1 .tejia').hide();
            $('.img-list .TabCon2 .cplist .tempWrap-1').css({ display: "block" });

        })

        var n = 0;
        function btnR() {
            n++;
            $('.cplist .tejia-tj').stop(true,true).animate({ marginLeft: -185 * n }, 200);
            if (n >= 7) {
                n = 0;
                $('.cplist .tejia-tj').stop(true,true).animate({ marginLeft: 0 }, 0);
            }
        }
        $('.cparrow .icobj-1').click(btnR);//点击左箭头

        $('.cparrow .icobj-2').click(function () {//点击右箭头
           n--;
            if (n < 0) {
                n = 5;
                $('.cplist .tejia-tj').stop(true,true).animate({ marginLeft: -185 * 6 }, 0);
            }
            $('.cplist .tejia-tj').stop(true,true).animate({ marginLeft: -185* n }, 200);
        })
      }   
    lunB()   
})
