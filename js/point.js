$(document).ready(function(){

    // function tanchu() {
    //     var popup = document.querySelector(".popup");
    //     var perCenter = document.querySelector('.perCenter');
    
    //     popup.onmouseover = function () {
    //         perCenter.style.display = "block";
    //     }
    //     popup.onmouseout = function () {
    //         perCenter.style.display = "none";
    //     }
    //     perCenter.onmouseover = function () {
    //         perCenter.style.display = "block";
    //     }   
    //     perCenter.onmouseout = function () {
    //         perCenter.style.display = "none";
    //     }
    // }
    // tanchu();

    // 头部标题悬停事件开始
    function titlepo(){
        $('.wrapper-po .specious').hover(function(){
            $(this).children('.hover').show();
        },
        function(){
            $(this).children('.hover').hide();
        })
    }
    titlepo();
    //头部标题悬停事件结束
    //banner轮播图开始
    function slideshow(){
        $('.banner-po .circle li').click(function(){
            $('.banner-po .parent').children().eq($(this).index()).stop(true,true).fadeOut(100).siblings().fadeIn(100);
            $(this).css({background:'red'}).siblings().css({background:'none'});
            if($(this).index()==0){
                $('.banner-po').css({background:'#a35dec'});
            }else{
                $('.banner-po').css({background:'#6b03d6'});
            }
        })
    }
    slideshow();
    function icon(){
        $('.column-po .icon img').hover(function(){
            $(this).stop(true,true).animate({marginTop:4});
        },
        function(){
            $(this).stop(true,true).animate({marginTop:0});
        })
    }
    icon()

    function turn(){
        var n=0;
        var time1
        function turn2(){
            console.log(1)
            n++;
            $('.turn img').animate({transform:'rotate'+'('+n*10+'deg)'},100);
        }
        $('.turn').hover(function(){
            time1=setInterval(turn2,100);
        },function(){
            clearInterval(time1);
        })
    }
    turn();
})

