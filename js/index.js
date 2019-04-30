$(function () {
    // nav
    ;var createNav = (function(){
         function create(){
            $.ajax({
                type:'get',
                url:'api/index.php',
                dataType:'json',
                success:function(data){
                    // 遍历大列
                    $.each(data.h1,function(i,n){
                        $('.ban-nav').append(`
                            <dl class="nav-list">
                                <dt class="ban-item-tit">
                                    <i class="m${i+1}"></i>
                                    <a href="commodity.html" title="手机通讯">${data.h1[i].name}</a>
                                </dt>
                                <dd class="ban-item">
                                    <a href="commodity.html"></a>
                                    <a href="commodity.html"></a>
                                    <a href="commodity.html"></a>
                                    <a href="commodity.html"></a>
                                    <a href="commodity.html"></a>
                                </dd>
                            </dl>
                        `);
                    })
                    //每类显示条数不一样,删减
                    $('.ban-item').eq(0).children().first().remove();
                    $('.ban-item').eq(3).append('<a href="commodity.html"></a>');
                    $('.ban-item').eq(5).append('<a href="commodity.html"></a>');
                    $('.ban-item a').each(function(i){
                        $(this).html(data.nav[i].name);
                    })                  
                }
            })
        }
        return{
            create:create
        }  
    })();
    createNav.create();

    //hover时加载 subnav
    ;var  createSubNav = (function(){
        //鼠标悬停显示   加载数据
        var flag =true;
        function addElement(){
            $('.ban-nav').on('mouseenter','.nav-list',function(){
                $(this).children('.ban-subnav').show();
                if(flag){
                    flag =false;
                    $.ajax({
                        type:'get',
                        url:'api/index-nav-list.php',
                        dataType:'json',
                        success:function(data){              
                            $.each(data.tit,function(i,n){
                                $('.nav-list').eq(i).append(`
                                    <dd class="ban-subnav clearfix">
                                        <ul class="ban-subnav-menu">
                                            <li class="mm1"></li>
                                            <li class="mm2"></li>
                                            <li class="mm3"></li>
                                            <li class="mm4"></li>
                                            <li class="mm5"></li>
                                            <li class="mm6"></li>
                                        </ul>
                                        <ul class="ban-subnav-img">
                                            <li>
                                                <a href="mate20.html">
                                                    <img />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mate20.html">
                                                    <img />
                                                </a>
                                            </li>
                                        </ul>
                                    </dd>
                                `);
                                $('.ban-subnav-menu li').eq(i).append(`
                                    <h5>${data.tit[i].tit}</h5>
                                `);
                            })
                            addEle(data.list,'name','.mm1');
                            addEle(data.list,'price','.mm2');
                            addEle(data.list,'de','.mm3');
                            addEle(data.list,'dir','.mm4');
                            addEle(data.list,'ag','.mm5');
                            addEle(data.list,'sh','.mm6');
                            addImg(data.list);
                        }
                    })
                }
            })
        }
        //鼠标离开  隐藏
        function hideEle(){
            $('.ban-nav').on('mouseleave','.nav-list',function(){
                $(this).children('.ban-subnav').hide();
            })
        }
        // 添加小项
        function addEle(d,n,i){
            $.each(d,function(q,m){
                if(d[q][n] != null){
                    $('.ban-subnav-menu').children(i).append(`
                        <a href="commodity.html">${d[q][n]}</a>
                    `);
                }
            })
        }
        // 添加子导航图片
        function addImg(data){
            $('.ban-subnav-img li img').each(function(i){
                if(data[i].img != null){
                    $('.ban-subnav-img li img').eq(i).attr('src',data[i].img);
                }
            })
        }
        return {
            addElement : addElement,
            hideEle : hideEle,
            addEle : addEle ,
            addImg : addImg
        }
    })();
    createSubNav.addElement();
    createSubNav.hideEle();

    //轮播图slideshow
    ; var slideshow = (function () {
        // 轮播背景大图arr
        var banImg = ['rgb(79, 27, 172)', 'rgb(126, 165, 227)',
            'rgb(246, 246, 246)', 'rgb(51, 32, 167)'];
        var n = 0;
        var timer = null;
        //下一张
        function nextShow() {
            $('.btn-next').click(function () {
                clearInterval(timer);
                n++;
                if (n > $('.slide-pic li').length - 1) {
                    n = 0;
                }
                tab();
            })
        }
        //上一张
        function prevShow() {
            $('.btn-prev').click(function () {
                clearInterval(timer);
                n--;
                if (n < 0) {
                    n = $('.slide-pic li').length - 1;
                }
                tab();
            })
        }
        // 圆点切换
        function dotShow() {
            $('.dot').on('mouseenter', 'li', function () {
                clearInterval(timer);
                n = $(this).index();
                tab();
            })
        }
        //自动播放
        function autoPlay() {
            timer = setInterval(function () {
                n++;
                if (n > $('.slide-pic li').length - 1) {
                    n = 0;
                }
                tab();
            }, 2000)
        }
        //hover清除timer
        function clearPlay() {
            $('.ban-slideshow').mouseenter(function () {
                clearInterval(timer);
            })
            $('.ban-slideshow').mouseleave(function () {
                setTimeout(function () {
                    autoPlay();
                }, 1000)
            })
        }
        //切换
        function tab() {
            $('.slide-pic li').eq(n).fadeIn(1000).siblings().fadeOut(1000);
            //背景大图切换
            $('.banner').css('background', banImg[n]);
            //圆点
            $('.dot li').eq(n).css({ background: '#fff' }).siblings().css({ background: 'rgba(0,0,0,.2)' });
        }
        return {
            nextShow: nextShow,
            prevShow: prevShow,
            dotShow: dotShow,
            autoPlay: autoPlay,
            clearPlay: clearPlay,
            tab: tab
        }
    })();
    slideshow.autoPlay();
    slideshow.clearPlay();
    slideshow.nextShow();
    slideshow.prevShow();
    slideshow.dotShow();
    slideshow.tab();

    //楼层导航
    ; (function () {
        function Scroll() { };
        Scroll.prototype = {
            //页面缩放,导航位置变化
            reSize: function (ele, ele2) {
                ele.resize(function () {
                    if (ele.width() < 1200) {
                        ele2.css({ marginLeft: 15 });
                    } else {
                        ele2.css({ marginLeft: -50 });
                    }
                })
            },
            //滚动切换楼层nav
            scrollTab: function () {
                var flag = true;
                $(window).scroll(function () {
                    var sc = $(window).scrollTop();
                    if (scroll > 700) {
                        $('.elevator').css({ display: 'block' });
                    } else {
                        $('.elevator').css({ display: 'none' });
                    }
                    $('.main .phone').each(function (i) {
                        var scroll = $(window).scrollTop();
                        var ofset = $(this).offset().top;
                        // console.log(scroll);
                        if (scroll >= 700) {
                            $('.elevator').css({ display: 'block' });
                            if (ofset - scroll <= 100 && ofset >= scroll) {
                                $('.elevator a').eq(i).css({ background: '#333' })
                                    .siblings().css({ background: '#bbb' });
                            }
                        } else {
                            $('.elevator').css({ display: 'none' });
                        }
                    })
                })
            },
            //点击切换楼层nav
            goNav: function (ele, ele2, ele3) {
                ele.click(function (e) {
                    e.preventDefault();
                    var ofset = ele2.eq($(this).index()).offset().top;
                    // console.log(ofset);
                    $(this).css({ background: '#333' }).siblings().css({ background: '#bbb' });
                    ele3.animate({ scrollTop: ofset }, 2000);
                })
            },
            //点击返回顶部
            goTop: function () {
                $('.go-top').click(function (e) {
                    e.preventDefault();
                    $('body,html').animate({ scrollTop: 0 }, 2000);
                })
            }

        }
        var scroll = new Scroll();
        scroll.reSize($(window), $('.elevator'));
        scroll.scrollTab();
        scroll.goNav($('.elevator a'), $('.main .phone'), $('body,html'));
        scroll.goTop();
    })();
})