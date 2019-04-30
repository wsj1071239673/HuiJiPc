$(function(){
    $('.bgimg ul li:first').clone(true).appendTo($('.bgimg ul'));
    $('.btn li:first').css({backgroundColor:'green'});
    console.log($('.bgimg li').length)
    $('.bgimg').width($('.bgimg li').length*1200);
    var n=0;//用来做图片的计数
    $('.right').click(function()  {
        n++;
        //第一种方式:控制图片计数n
        if(n>5){
            n=1;
            $('.bgimg').css({marginLeft:0})
        }
        //第二种方式:控制.bgimg的marginLeft;

        changeBtn(n==5?0:n);
        $('.bgimg').stop(true,true).animate({marginLeft:-1200*n},1000);

    })
    $('.left').click(function(){
        n--;
        if(n<0){
            n=4;
            $('.bgimg').css({marginLeft:-1200*5})
        }

        changeBtn(n);
        //控制连续点击,js控制连续点击用flag控制;在jq里边,我们使用stop(true,true)
        $('.bgimg').stop(true,true).animate({marginLeft:-1200*n},1000)
    })

    function changeBtn(index){0
        $('.btn li').eq(index).css({backgroundColor:'green'}).siblings().css({backgroundColor:'red'})
    }

    $('.btn li').click(function(){
        n=$(this).index();
        changeBtn($(this).index());
        $('.bgimg').animate({marginLeft:-1200*$(this).index()});
    })
})