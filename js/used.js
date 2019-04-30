document.cookie = "user=wsj123"
$(document).ready(function () {
    var allFunction = (function () {
        // 我的订单鼠标出现和离开事件
        function hover() {
            $('.view .specious').hover(function () {
                $(this).removeClass('specious').addClass('specious2'); //通过添加和删除类名来控制样式
                $(this).children().eq(1).removeClass('triangle').addClass('triangle2');
                $(this).children().eq(2).removeClass('hover').addClass('hover2');
            }, function () {
                $(this).removeClass('specious2').addClass('specious');
                $(this).children().eq(1).removeClass('triangle2').addClass('triangle');
                $(this).children().eq(2).removeClass('hover2').addClass('hover');
            })
        }
        //标题点击事件
        function btn() {
            $('.header-list li').click(function () {
                $(this).children().css({
                    color: '#ffffff'
                });
                $(this).siblings().children().css({
                    color: 'black'
                }); //会有时间误差
                $(this).css({
                    background: '#c80f1e'
                }).siblings().css({
                    background: 'none'
                });
            })
        }
        //懒加载事件
        function lazy() {
            $("img").lazyload({
                effect: "fadeIn"
            });
        }
        //头部轮播图事件
        function bannerw() {
            var index = 0 //控制图片和点的下标
            function flash() { //自动播放.点先出现(问题)
                // console.log($(window).scrollTop());
                $('.cont .item li').eq(index).fadeIn(2000).siblings().fadeOut(2000);
                $('.cont .btn li').eq(index).css({
                    background: '#c80f1e'
                }).siblings().css({
                    background: 'none'
                });
                index++;
                if (index > 2) {
                    index = 0;
                }
            }
            var time = setInterval(flash, 2000);
            $('.cont').hover(function () {
                clearInterval(time); //鼠标放上清除计时器
            }, function () {
                time = setInterval(flash, 2000) //鼠标离开,启动计时器
            });
            $('.cont .btn li').click(function () { //点击点时的动画
                $('.cont .item li').eq($(this).index()).fadeIn(2000).siblings().fadeOut(2000);
                $(this).css({
                    background: '#c80f1e'
                }).siblings().css({
                    background: 'none'
                });
            });
        }
        // 搜索事件
        function sear() {
            $('.search-min input').keyup(function () {
                $('.search .search-list').empty();
                var userVal = $(this).val();
                $.ajax({
                    type: "get",
                    url: "https://sug.so.360.cn/suggest",
                    data: "word=" + userVal + "&encodein=utf-8&encodeout=utf-8&pq=&callback=__jsonp1__&t=2577662", //调用360接口
                    dataType: "jsonp",
                    success: function (data) {
                        $('.search .search-list').css({
                            display: "block"
                        });
                        $.each(data.s, function (index, val) {
                            $('.search .search-list').append("<p class='search-cont'>" + val + "</p>");
                        });
                    },
                });
            });
            $('body').click(function () {
                $('.search .search-list').empty();
            })
        };
        //点击图片跳转
        function lohref() {
            $('.rotation').on('click', '.bttn', function () {
                location.href = 'mate20.html';
            })
        }
        //点击时间段发送ajax
        function tabClick() {
            $('.limited-time').children().click(function () {
                var cyrrthis = $(this)
                dataTim(cyrrthis)
            });
        }
        //页面时间变化
        function dao() {
            aw = new Date();
            var cw = 1900 + aw.getYear();
            var dw = 1 + aw.getMonth();
            var jw = aw.getDate();
            var hh = aw.getHours();
            console.log(new Date())
            if (hh >= 10 && hh < 15) {
                var bw1 = new Date(cw + '-0' + dw + '-' + jw + ' 15:00:00');
                fillTime(bw1);
            } else if (hh >= 15 && hh < 20) {
                var bw2 = new Date(cw + '-0' + dw + '-' + jw + ' 20:00:00');
                fillTime(bw2);
            } else if (hh >= 20 && hh < 24) {
                var bw3 = new Date(cw + '-0' + dw + '-' + jw + ' 24:00:00');
                fillTime(bw3);
            }

            function fillTime(bw) {
                var cha = bw - aw;
                var hours = parseInt(cha / 1000 / 60 / 60 % 24);
                var min = parseInt(cha / 1000 / 60 % 60)
                var sec = parseInt(cha / 1000 % 60)
                $('.hour').html(hours);
                $('.min').html(min);
                $('.miao').html(sec)
            };
        }
        //不同时间段您的倒计时并且发送ajax
        function hour() {
            var data1 = new Date();
            var data2 = data1.getHours();
            console.log(data2)
            console.log(data2)
            if (data2 >= 20 && data2 < 24) {
                dataTim($('.limited-time').children().eq(2));
                setInterval(dao, 1000)
            } else if (data2 >= 15 && data2 < 20) {
                dataTim($('.limited-time').children().eq(1));
                setInterval(dao, 1000)
            } else if (data2 >= 0 && data2 < 15) {
                dataTim($('.limited-time').children().eq(0));
                setInterval(dao, 1000)
            }
        }
        // 发送ajax公共代码
        function dataTim(obj) {
            var str = "";
            var kind = obj.data('type'); //后台接收数据用来判断传回哪些数据;
            $.ajax({ //tab切换点击发送ajax请求
                type: "get",
                url: "api/use/use-time.php",
                data: "kind=" + kind,
                dataType: "json",
                beforeSend: function () {
                    var st = '';
                    for (var i = 0; i < 10; i++) {
                        st += '<li><div><a href="mate20.html"><img src="images/use/sec33.gif" alt=""></a></div><div><p class="app"></p><p class="gold"></p></div></li>'
                    }
                    $('.rotation .pict').html(st);
                },
                success: function (data) {
                    $.each(data, function (i, val) {
                        str += '<li>';
                        str += '<div><a href="mate20.html"><img src=' + val.src + ' alt=""></a></div>';
                        str += '<div>';
                        str += '<p class="app">' + val.name + '</p>';
                        str += '<p class="gold">' + val.goods + '</p>';
                        str += '<p class="price">' + val.current + '</p>';
                        str += '<p class="prime">' + val.original + '</p>';
                        str += '<p class="bttn">立即购买</p>';
                        str += '</div>';
                        str += '</li>';
                    });
                    $('.rotation .pict').html(str);
                },
            });
            $(obj).addClass('specious').siblings().removeClass('specious');
        }
        //倒计时事件
        function daoji() {
            lohref();
            tabClick();
            dao();
            hour()
        }
        //左右移动的轮播图完成
        function bannerw2() {
            var cliNum = 0;

            function btnR() { //点击右箭头和计时器的公用函数
                cliNum++;
                $('.rotation .pict').animate({
                    marginLeft: -333 * cliNum
                }, 1000);
                if (cliNum >= 6) {
                    cliNum = 0;
                    $('.rotation .pict').animate({
                        marginLeft: 0
                    }, 0);
                }
            }

            function flash2() {
                btnR() //计时器调用函数
            };
            var time1 = setInterval(flash2, 2000); //启动计时器,自动播放
            $('.rotation').hover(function () { //鼠标移入清除计时器,显示箭头
                clearInterval(time1);
                $('.rotation .next').css({
                    display: 'block'
                });
                $('.rotation .prev').css({
                    display: 'block'
                });
            }, function () { //鼠标移出启动计时器,隐藏箭头
                time1 = setInterval(flash2, 2000);
                $('.rotation .prev').css({
                    display: 'none'
                });
                $('.rotation .next').css({
                    display: 'none'
                });
            });
            $('.rotation .next').click(function () {
                btnR();
            }); //点击左箭头
            $('.rotation .prev').click(function () { //点击右箭头
                cliNum--;
                if (cliNum < 0) {
                    cliNum = 5;
                    $('.rotation .pict').animate({
                        marginLeft: -333 * 6
                    }, 0);
                }
                $('.rotation .pict').animate({
                    marginLeft: -333 * cliNum
                }, 1000);
            })
        }
        //下面tab事件
        function tabT() {
            function tab2(ele1, ele2, selector1, selector2) {
                $(ele1).children().click(function () {
                    var str2 = "";
                    var kind2 = $(this).data('type'); //后台接收数据用来判断传回哪些数据;
                    $.ajax({ //tab切换点击发送ajax请求
                        type: "get",
                        url: "api/use/use-time2.php",
                        data: "kind2=" + kind2,
                        dataType: "json",
                        //提高用户体验
                        beforeSend: function () {
                            var s = '';
                            for (var i = 0; i < 10; i++) {
                                s += '<div class="show-fir"><div class="pic-box"><a href="mate20.html"><img src="images/use/sec33.gif" alt=""></a></div><div><p class="app"><a href=""></a></p><p class="gold"><a href=""></a></p><p><a href="" class="price1"></a><a href="" class="price2"></a></p></div></div>'
                            }
                            $('.tab .show').html(s);
                        },
                        success: function (data2) {
                            $.each(data2, function (i, val) {
                                str2 += '<div class="show-fir">';
                                str2 += '<div class="pic-box"><a href="mate20.html"><img src=' + val.src + ' alt=""></div>';
                                str2 += '<div>';
                                str2 += '<p class="app"><a>' + val.name + '</a></p>';
                                str2 += '<p class="gold"><a>' + val.goods + '</a></p>';
                                str2 += '<p><a class="price1">' + val.current + '</a>';
                                str2 += '<a class="price2">' + val.original + '</a></p>';
                                str2 += '</div>';
                                str2 += '</div>';
                            });
                            $('.tab .show').html(str2);
                        },
                    });
                    $(this).addClass(selector1).siblings().removeClass(selector2);
                });
            }
            tab2('.tab .active', '.tab .tab-show', 'specious specious3', 'specious');
            // 事件委托,因为请求过来的数据无法直接绑定事件,
            $('.tab .show').on('mouseenter', '.show-fir', function () { //第二个tab手机悬停在图片上时的特效
                $(this).addClass('show-fir-border').siblings().removeClass('show-fir-border');
            });
        }
        //上下移动的轮播图结束
        function bannerw3() {
            var index = 0;

            function flash3() {
                index++;
                if (index >= 11) { //每次移动一个
                    index = 1;
                    $('.menu-use .hot').animate({
                        top: 0
                    }, 0);
                }
                $('.menu-use .hot').animate({
                    top: -89 * index
                }, 500);

            }
            var time2 = setInterval(flash3, 2000);
            $('.menu-use').hover(function () {
                    clearInterval(time2);
                },
                function () {
                    time2 = setInterval(flash3, 2000);
                });
        }
        //获取日期
        function daTime(result) {
            aa = new Date();
            cc = 1900 + aa.getYear();
            dd = 1 + aa.getMonth();
            jj = aa.getDate();
        };
        //随机抽取
        function fun(a, b, c, obj) {
            for (var i = 0; i < c; i++) {
                var ran = Math.floor(Math.random() * (b - a + 1) + a);
                obj.push(ran);
            };
        };
        //头像随机
        function imgHead(result, imgBox) {
            var arrMess = []
            fun(0, 10, 5, arrMess);
            for (var i = 0; i < arrMess.length; i++) {
                var str3 = "";
                str3 += '<img src=' + result[arrMess[i]].headsrc + ' alt="">'
                imgBox.innerHTML += str3;
            }
        };
        //轮播图随机
        function roteList(result, hot) {
            var arrMess2 = [],
                arrMess3 = []
            fun(0, 17, 10, arrMess2);
            for (var k = 0; k < arrMess2.length; k++) {
                arrMess3.push(result[arrMess2[k]])
            }
            for (var d = 0; d < 5; d++) {
                arrMess3.push(arrMess3[d])
            }
            for (var j = 0; j < arrMess3.length; j++) {
                var str4 = "";
                str4 += '<div class="model clearfix">';
                str4 += '<div class="head"><img src=' + arrMess3[j].headsrc + ' alt=""></div>';
                str4 += '<div class="shop"><p class="phone">' + arrMess3[j].phone + '</p>';
                str4 += '<p class="content">' + arrMess3[j].message + '</p></div>';
                str4 += '<div class="pray">';
                str4 += '<p>' + cc + '年' + dd + '月' + jj + '日</p>';
                str4 += '<div><img src=' + arrMess3[j].bleshsrc + ' alt="">';
                str4 += '</div>'
                hot.innerHTML += str4;
            }
            var cloneObj = hot.children[0].cloneNode(true);
            hot.appendChild(cloneObj);
        };
        //评论随机
        function com(result, middle) {
            var arrMess4 = [],
                arrMess5 = []
            fun(0, 17, 4, arrMess4);
            for (var t = 0; t < arrMess4.length; t++) {
                arrMess5.push(result[arrMess4[t]])
            }
            for (var d = 0; d < arrMess5.length; d++) {
                var str5 = "";
                if (d == 3) {
                    str5 += '<div class="middle-one spe">';
                } else {
                    str5 += '<div class="middle-one">';
                }
                str5 += '<div class="person clearfix"><div class="head2"><img src=' + arrMess5[d].headsrc + ' alt=""></div><div class="name"><p>' + arrMess5[d].phone + '</p><div class="star"></div></div></div>';
                str5 += '<div class="letter"><p class="letter-wen">' + arrMess5[d].comment + '</p></div>';
                str5 += '<div class="detail"><span class="detail1">' + cc + '-' + dd + '-' + jj + '</span><span class="detail2">苹果 15年 13寸 MacBoo</span></div>';
                str5 += '</div>';
                middle.innerHTML += str5;
            }
        };

        function diao(result, imgBox, hot, middle) {
            daTime(result);
            imgHead(result, imgBox);
            roteList(result, hot);
            com(result, middle);
        }

        function ajaxMessage() {
            var flag = true;

            function scrollt() {
                return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
            };
            var menuUse = document.querySelector('.menu-use');
            var imgBox = document.querySelector('.img-box');
            var hot = document.querySelector('.hot');
            var middle = document.querySelector('.middle');
            window.onscroll = function () {
                var wh = window.innerHeight;
                var menuTop = menuUse.offsetTop;
                var scrollp = scrollt();
                if (wh + scrollp >= menuTop) {
                    if (flag) {
                        flag = false;
                        var xhr = new XMLHttpRequest();
                        xhr.open('get', 'api/use/use-mess.php?mess=mess', true);
                        xhr.send();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4 && xhr.status == 200) {
                                var result = JSON.parse(xhr.responseText);
                                diao(result, imgBox, hot, middle);
                            }
                        }
                    }
                }
            }
        }
        return {
            hover: hover,
            btn: btn,
            lazy: lazy,
            bannerw: bannerw,
            sear: sear,
            daoji: daoji,
            bannerw2: bannerw2,
            tabT: tabT,
            bannerw3: bannerw3,
            ajaxMessage: ajaxMessage
        }
    })()
    allFunction.hover();
    allFunction.btn();
    allFunction.lazy();
    allFunction.bannerw();
    allFunction.sear();
    allFunction.daoji();
    allFunction.bannerw2();
    allFunction.tabT();
    allFunction.bannerw3();
    allFunction.ajaxMessage()
})