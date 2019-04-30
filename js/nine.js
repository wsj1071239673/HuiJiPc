$(function () {
    function nine() {
        var t = 0;
        var time;
        //banner图轮播
        $('.img-banner-big-img').first().show().siblings().hide();
        $('.img-banner-right').click(autoPlay);
        function autoPlay() {
            t++;
            if (t > $('.img-banner-big-img').length - 1) {
                t = 0;
            }
            $('.img-banner-big-img').eq(t).fadeIn().siblings().fadeOut();
            $('.img-banner-sp').eq(t).fadeOut().parent().siblings().children('.img-banner-sp').fadeIn();
        }
        $('.img-banner-left').click(function () {
            t--;
            if (t < 0) {
                t = $('.img-banner-big-img').length - 1;
            }
            $('.img-banner-big-img').eq(t).stop(true,true).fadeIn().siblings().fadeOut();
            $('.img-banner-sp').eq(t).stop(true,true).fadeOut().parent().siblings().children('.img-banner-sp').fadeIn();
        })
        $('.img-banner-sp').first().stop(true,true).fadeOut().parent().siblings().children('span').fadeIn()
        //banner小图。鼠标经过事件及鼠标离开事件
        $('.img-banner-small-box li').hover(
            function () {
                clearInterval(time)
                t = $(this).index();
                $('.img-banner-big-img').eq($(this).index()).stop(true,true).fadeIn().siblings().fadeOut();
                $('.img-banner-sp').eq($(this).index()).stop(true,true).fadeOut().parent().siblings().children('.img-banner-sp').fadeIn();
                // clearInterval(time)
            },
            function () {
                clearInterval(time);
                t = $(this).index();
                $('.img-banner-sp').eq($(this).index()).fadeOut();
                // setInterval(autoPlay, 3000)
            }
        )
        //banner大图。鼠标经过事件及鼠标离开事件
        $('.img-banner-big-img').hover(
            function () {
                clearInterval(time)
            },
            function () {
                clearInterval(time)
                time = setInterval(autoPlay, 1000)
            }
        )
        $('.img-banner-small-box li').hover(
            function () {
                clearInterval(time)
            },
            function () {
                clearInterval(time)
                time = setInterval(autoPlay, 1000)
            }
        )
        //banner图。自动运行
        time = setInterval(autoPlay, 1000);
    }
    nine();
    // 右侧小九精选开始
    $('.hot-img').hover(
        function () {
            $(this).children(1).fadeIn()
        },
        function () {
            $(this).children('.ceng').fadeOut()
        }
    )
    // 右侧小九精选结束
})
// 滚动加载开始
function getScrollY() {
    return document.documentElement.scrollTop || document.body.scrolltop || window.pageYOffset;
}

var page = 1;
var flag = true;
window.onscroll = function () {
    var winH = window.innerHeight;
    var list = document.querySelector(".list");
    var ulObj = document.querySelector(".list-left");

    var listTop = list.offsetTop + list.clientHeight
    console.log(listTop)
    var scrollT = getScrollY();
    if (winH + scrollT >= listTop) {
        if (flag) {
            flag = false;
            var xhr = new XMLHttpRequest();
            xhr.open("get", "api/nine.php?page=" + page, true)
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(JSON.parse(xhr.responseText));
                    var data = JSON.parse(xhr.responseText);
                    var htmlStr = "";
                    for (var i = 0; i < data.length; i++) {
                        htmlStr += "<li class=\"item\">";
                        htmlStr += "<div class=\"item-dt\">";
                        htmlStr += '<img src=' + data[i].imag + ">";
                        htmlStr += "<p>";
                        htmlStr += "<span>" + data[i].user + "</span>";
                        htmlStr += "<span class=\"sp\">" + data[i].time + "</span>";
                        htmlStr += "</p>";
                        htmlStr += "</div>";
                        htmlStr += "<div class=\"item-img\">";
                        htmlStr += "<img src=" + data[i].img + ">";
                        htmlStr += "</div>";
                        htmlStr += "<div class=\"item-dl\">";
                        htmlStr += "<h3>" + data[i].title + "</h3>";
                        htmlStr += "<p>" + data[i].brife + "</p>";
                        htmlStr += "</div>";
                        htmlStr += "<div class=\"btn\">";
                        htmlStr += "<a class=\"left\">" + "<i class=\"pce\"></i>" + data[i].pce + "</a>";
                        htmlStr += "<span>" + "<i class=\"views\"></i>" + data[i].views + "</span>";
                        htmlStr += "<a >";
                        htmlStr += "<i class=\"zan\"></i>";
                        htmlStr += "<span>" + data[i].zan + "</span>";
                        htmlStr += "</a>";
                        htmlStr += "<a >";
                        htmlStr += "<i class=\"com\"></i>";
                        htmlStr += "<span>" + data[i].con + "</span>";
                        htmlStr += "</a>";
                        htmlStr += "</div>";

                        htmlStr += "</li>";
                    }
                    ulObj.innerHTML += htmlStr;
                    flag = true;
                    page++;
                }
            }
        }

    }
}