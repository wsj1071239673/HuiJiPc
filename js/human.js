$(document).ready(function () {
    document.cookie = "user=wsj123";
    var humanFun = (function () {
        //点击标题
        function color() {
            $('.prime .one a').mouseover(function () {
                $(this).css({
                    color: '#f60',
                    textDecoration: 'none'
                });
            });
            $('.prime .one a').mouseout(function () {
                $(this).css({
                    color: '#333',
                    textDecoration: 'none'
                });
            });
        };
        //手风琴效果,事件委托
        function piano() {
            $('.main').on('click', '.title', function () {
                console.log(1)
                $(this).prev().css({
                    visibility: 'visible'
                }).stop(true, true).animate({
                    height: 360,
                    paddingTop: '15'
                }, 500).parent().siblings().children('.prime').css({
                    visibility: 'hidden'
                }).stop(true, true).animate({
                    height: 0,
                    paddingTop: '0'
                }, 500);
                // $(this).prev().stop(true,true).animate({height:360,paddingTop:'15'},1000).parent().siblings().children('.prime').stop(true,true).hide()
                $(this).hide().parent().siblings().children('.title').show();
            })
        }
        //滚动加载数据
        function ajaxPop() {
            var flag2 = true;
            var flag3 = true;
            var flag4 = true;

            function scrollt() {
                return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;
            };
            var phoneObj = document.querySelector('.phone');
            var computerObj = document.querySelector('.computer-all');
            var videoObj = document.querySelector('.video-all');
            var deviceObj = document.querySelector('.device-all');
            window.onscroll = function () {
                var wh = window.innerHeight;
                var phoneTop = phoneObj.offsetTop;
                var computerTop = computerObj.offsetTop;
                var videoTop = videoObj.offsetTop;
                var deviceTop = deviceObj.offsetTop;
                var scrollp = scrollt();
                var allScroll = (function () {
                    // 触底加载，当可是窗口高度加卷起高度大于computer模块的的offsetTop时，发送ajax
                    function com() {
                        if (wh + scrollp - computerTop > -300) {
                            if (flag2) {
                                flag2 = false;
                                var xhr = new XMLHttpRequest();
                                xhr.open('get', 'api/pop/pop-computer.php?computer=computer', true);
                                xhr.send();
                                xhr.onreadystatechange = function () {
                                    if (xhr.readyState == 4 && xhr.status == 200) {
                                        var result2 = JSON.parse(xhr.responseText);
                                        for (var i = 0; i < 4; i++) {
                                            var t = 0;
                                            var str5 = '';
                                            str5 += '<li class="model">';
                                            str5 += '<div class="hot"><a href="" class="hot-cn">本周热销</a><a href="" class="hot-en">HOT SALE</a></div>'
                                            str5 += '<div class="show">';
                                            for (var j = 5 * i; j < (5 * i + 5); j++) {
                                                t++
                                                str5 += '<div>';
                                                if (j % 5 == 0) {
                                                    str5 += '<div class="prime prime-spe2">';
                                                } else {
                                                    str5 += '<div class="prime prime-spe prime-spe2">';
                                                }
                                                str5 += '<div class="one">';
                                                str5 += '<div class="pic"><a href="mate20.html"><img src="images/pop/sec33.gif"  data-original="' + result2[j].popusrc + '" alt=""></a></div>';
                                                str5 += '<a href="" class="ist">' + result2[j].name + '</a>';
                                                str5 += '<span class="price">' + result2[j].price + '</span>';
                                                str5 += '</div>';
                                                str5 += '<div class="triangle"></div>'
                                                str5 += '<p class="instro"><a href="">' + result2[j].intro1 + '</a><br><a href=""></a></p>';
                                                str5 += '<div class="reception clearfix"><div class="pattern"></div><div class="result"><span class="good">好评</span><span class="percent">' + result2[j].reception + '</span></div></div>';
                                                str5 += '<div class="detail clearfix"><div class="left"><a href="">' + result2[j].number1 + '</a><span>使用心得</span></div><div class="right"><a href="">' + result2[j].number2 + '</a><span>咨询</span></div></div>';
                                                str5 += '<div class="red-tri"></div><span class="ding">' + t + '</span>';
                                                str5 += '</div>';
                                                if (j % 5 == 0) {
                                                    str5 += '<div class="title specious"><div>' + t + '</div><p>' + result2[j].name + '</p><span>' + result2[j].price + '</span></div>'
                                                } else {
                                                    str5 += '<div class="title"><div>' + t + '</div><p>' + result2[j].name + '</p><span>' + result2[j].price + '</span></div>'
                                                }
                                                str5 += '</div>'
                                            }
                                            str5 += '</div>';
                                            str5 += '</li>';
                                            computerObj.innerHTML += str5;
                                            $("img").lazyload({
                                                // effect:fadein,为什么不行
                                                threshold: 200
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    };
                    // 触底加载，当可是窗口高度加卷起高度大于音响模块的的offsetTop时，发送ajax
                    function vid() {
                        if (wh + scrollp - videoTop > -300) {
                            if (flag3) {
                                flag3 = false;
                                var xhr = new XMLHttpRequest();
                                xhr.open('get', 'api/pop/pop-video.php?video=video', true);
                                xhr.send();
                                xhr.onreadystatechange = function () {
                                    if (xhr.readyState == 4 && xhr.status == 200) {
                                        var result3 = JSON.parse(xhr.responseText);
                                        for (var i = 0; i < 3; i++) {
                                            var u = 0;
                                            var str6 = '';
                                            str6 += '<li class="model">';
                                            str6 += '<div class="hot"><a href="" class="hot-cn">本周热销</a><a href="" class="hot-en">HOT SALE</a></div>'
                                            str6 += '<div class="show">';
                                            for (var j = 5 * i; j < (5 * i + 5); j++) {
                                                if (j == 12) {
                                                    break;
                                                }
                                                console.log(j)
                                                u++
                                                str6 += '<div>';
                                                if (j % 5 == 0) {
                                                    str6 += '<div class="prime prime-spe2">';
                                                } else {
                                                    str6 += '<div class="prime prime-spe prime-spe2">';
                                                }
                                                str6 += '<div class="one">';
                                                str6 += '<div class="pic"><a href="mate20.html"><img src="images/pop/sec33.gif"  data-original="' + result3[j].popusrc + '" alt=""></a></div>';
                                                str6 += '<a href="" class="ist">' + result3[j].name + '</a>';
                                                str6 += '<span class="price">' + result3[j].price + '</span>';
                                                str6 += '</div>';
                                                str6 += '<div class="triangle"></div>'
                                                str6 += '<p class="instro"><a href="">' + result3[j].intro1 + '</a><br><a href=""></a></p>';
                                                str6 += '<div class="reception clearfix"><div class="pattern"></div><div class="result"><span class="good">好评</span><span class="percent">' + result3[j].reception + '</span></div></div>';
                                                str6 += '<div class="detail clearfix"><div class="left"><a href="">' + result3[j].number1 + '</a><span>使用心得</span></div><div class="right"><a href="">' + result3[j].number2 + '</a><span>咨询</span></div></div>';
                                                str6 += '<div class="red-tri"></div><span class="ding">' + u + '</span>';
                                                str6 += '</div>';
                                                if (j % 5 == 0) {
                                                    str6 += '<div class="title specious"><div>' + u + '</div><p>' + result3[j].name + '</p><span>' + result3[j].price + '</span></div>';
                                                } else {
                                                    str6 += '<div class="title"><div>' + u + '</div><p>' + result3[j].name + '</p><span>' + result3[j].price + '</span></div>';
                                                }
                                                str6 += '</div>';
                                            }
                                            str6 += '</div>';
                                            str6 += '</li>';
                                            videoObj.innerHTML += str6;
                                            $("img").lazyload({
                                                threshold: 200
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    };
                    // 触底加载，当可是窗口高度加卷起高度大于设备模块的的offsetTop时，发送ajax
                    function dev() {
                        if (wh + scrollp - deviceTop > -300) {
                            if (flag4) {
                                flag4 = false;
                                var xhr = new XMLHttpRequest();
                                xhr.open('get', 'api/pop/pop-device.php?device=device', true);
                                xhr.send();
                                xhr.onreadystatechange = function () {
                                    if (xhr.readyState == 4 && xhr.status == 200) {
                                        var result4 = JSON.parse(xhr.responseText);
                                        for (var i = 0; i < 3; i++) {
                                            var v = 0;
                                            var str7 = '';
                                            str7 += '<li class="model">';
                                            str7 += '<div class="hot"><a href="mate20.html" class="hot-cn">本周热销</a><a href="" class="hot-en">HOT SALE</a></div>'
                                            str7 += '<div class="show">';
                                            for (var j = 5 * i; j < (5 * i + 5); j++) {
                                                if (j == 15) {
                                                    break;
                                                }
                                                v++
                                                str7 += '<div>';
                                                if (j % 5 == 0) {
                                                    str7 += '<div class="prime prime-spe2">';
                                                } else {
                                                    str7 += '<div class="prime prime-spe prime-spe2">';
                                                }
                                                str7 += '<div class="one">';
                                                str7 += '<div class="pic"><a href="mate20.html"><img src="images/pop/sec33.gif"  data-original="' + result4[j].popusrc + '" alt=""></a></div>';
                                                str7 += '<a href="" class="ist">' + result4[j].name + '</a><br>';
                                                str7 += '<span class="price">' + result4[j].price + '</span>';
                                                str7 += '</div>';
                                                str7 += '<div class="triangle"></div>'
                                                str7 += '<p class="instro"><a href="">' + result4[j].intro1 + '</a><br><a href="">' + result4[j].intro2 + '</a></p>';
                                                str7 += '<div class="reception clearfix"><div class="pattern"></div><div class="result"><span class="good">好评</span><span class="percent">' + result4[j].reception + '</span></div></div>';
                                                str7 += '<div class="detail clearfix"><div class="left"><a href="">' + result4[j].number1 + '</a><span>使用心得</span></div><div class="right"><a href="">' + result4[j].number1 + '</a><span>咨询</span></div></div>';
                                                str7 += '<div class="red-tri"></div><span class="ding">' + v + '</span>';
                                                str7 += '</div>';
                                                if (j % 5 == 0) {
                                                    str7 += '<div class="title specious"><div>' + v + '</div><p>' + result4[j].name + '</p><span>' + result4[j].price + '</span></div>'
                                                } else {
                                                    str7 += '<div class="title"><div>' + v + '</div><p>' + result4[j].name + '</p><span>' + result4[j].price + '</span></div>'
                                                }
                                                str7 += '</div>'
                                            }
                                            str7 += '</div>';
                                            str7 += '</li>';
                                            deviceObj.innerHTML += str7;
                                            $("img").lazyload({
                                                threshold: 200
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    };
                    return {
                        com: com,
                        vid: vid,
                        dev: dev
                    }
                })()
                allScroll.com();
                allScroll.vid();
                allScroll.dev();


            }
        }
        return {
            color: color,
            piano: piano,
            ajaxPop: ajaxPop
        }
    })();
    humanFun.color();
    humanFun.piano();
    humanFun.ajaxPop();




})