  // 商品列表弹出选项
  $(function () {
    $('.inteshow').click(function () {
        $(".alllist").slideToggle(); 
    })   
   })

   $(function () {
       $('.littlepic a').mouseover(function () {
        $(this).css('border','1px solid #ec0000' ).siblings().css('border','1px solid #dfdfdf');
        // console.log($(this).children().attr('src'));
    //    console.log( $(this).parent().parent().children('.bigpic').children())
        $(this).parent().parent().children('.bigpic').children().attr("src",$(this).children().attr('src'));
    })
   })


// 点击更多弹出效果
   $(function () {
    $('.more1').click(function () {
        var h=$('.brands').height();
        var hy=$('.brands-lt').height();
        // console.log(hy);
        
        if (h==91) {
            $('.brands').css('height',$('.brands-lt').height());
        } else {
            $('.brands').css('height',91);
        }
       
    })
   })
   $(function () {
    $('.more').click(function () {
        var h=$('.search-condition').height();
        var hy=$('.sea-con-lt').height();
        // console.log(hy);
        
        if (h==120) {
            $('.search-condition').css('height',hy);
        } else {
            $('.search-condition').css('height',120);
        }
       
    })
   })


   $(function () {
       $('.sea-con-lt dl dd').on('click','a',function () {
           console.log($(this).index());
           
        $(this).css({background:"#ec0000",color:"#ffffff"}).siblings().css({background:'none',color:"#333333"});
       })
   })
