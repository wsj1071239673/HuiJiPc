
$(function () {
   // 头部下拉框
   function dropdown() {
      $(".hide-a").mouseover(function () {
         $(".hide-a").css({ backgroundColor: "#fff" });
         $(this).css({ borderLeft: "1px solid #e1e1e1", borderRight: "1px solid #e1e1e1" });
         $(".hide-txt").css({ borderLeft: "1px solid #e1e1e1", borderRight: "1px solid #e1e1e1", borderBottom: "1px solid #e1e1e1" });
         // $(".hide-d").children().eq(1).removeClass('ding').addClass('ding1');
         $(".hide-a .ding").hide();
         $(" .hide-a .ding1").show();
         $(".hide-txt").show();
      }).mouseout(function () {
         $(".hide-a").eq(0).css({ backgroundColor: "#f3f3f3" });
         $(".hide-txt").hide();
         // $(".hide-d").children().eq(1).removeClass('ding1').addClass('ding');
         $(".hide-a .ding1").hide();
         $(".hide-a .ding").show();
         $(this).css({ borderLeft: "1px solid #f3f3f3", borderRight: "1px solid #f3f3f3" });
      })
   }
   dropdown();
   //结束

   //标题移入变色
   function titleBar() {
      $(".navl-a a").mouseover(function () {
         $(this).css({ background: "#c80f1e" }).siblings().css({ background: "#fff" });
         $(this).css({ color: "#fff" }).siblings().css({ color: "#000" });
      }).mouseout(function () {
         $(this).css({ background: "#fff" }).siblings().css({ background: "#c8fle" });
         $(this).css({ color: "#000" }).siblings().css({ background: "#fff" });
      })
   }
   titleBar();
   //结束

   //轮播图
   function banner() {
      index = 0;
      function auto() {
         $(".hs_banner_hd li").eq(index).fadeIn(600).siblings().fadeOut(600);
         $(".b_nav p").eq(index).css({ background: "#c80f1e" }).siblings().css({ background: "#aaa" });
         index++;
         if (index > 2) {
            index = 0;
         }
      }
      var time = setInterval(auto, 2000);
      $(".hs_banner_hd").hover(function () {
         clearInterval(time);
      }, function () {
         time = setInterval(auto, 2000);
      });
      $(".b_nav p").mouseover(function () {
         $(".hs_banner_hd li").eq($(this).index()).fadeIn(600).siblings().fadeOut(600);
         $(this).css({ background: "#c80f1e" }).siblings().css({ background: "#aaa" });
      })
   }
   banner();
   //结束


   //服务列表
   function serviceList() {
      $(".server-list dl").mouseover(function () {
         $(this).css({ color: 'green' });
      })
      $(".server-list dl").mouseout(function () {
         $(this).css({ color: '#000' });
      })
   }
   serviceList();
   //结束

   //服务列表轮播图
   function serviceBanner() {
      //计时器
      var time;
      time = setInterval(auto_1, 2000);
      $(".temp").hover(function () {
         clearInterval(time);
      }, function () {
         time = setInterval(auto_1, 2000);
      });
      //改变第一个圆点的颜色
      $(".temp ul li:first").clone(true).appendTo($('.temp ul'));
      $(".server-bd i:first").css({ backgroundColor: "#fff" });
      // console.log($('.temp li').length)
      //箭头出现消失
      $('.temp').mouseover(function () {
         $(".server-lt").css({ display: "block" });
         $(".server-rt").css({ display: "block" });
      }).mouseout(function () {
         $(".server-lt").css({ display: "none" });
         $(".server-rt").css({ display: "none" });
      })

      $('.temp ul').width($('.temp li').length * 830);
      var n = 0; //图片记数
      //右点击
      $('.server-rt').click(function () {
         auto_1();
      })
      function auto_1() {
         n++;
         if (n > 6) {
            n = 1;
            $('.temp ul').css({ marginLeft: 0 })
         }
         changeBtn(n == 6 ? 0 : n);
         $('.temp ul').stop(true, true).animate({ marginLeft: -830 * n }, 1000);
      }

      //左点击
      $('.server-lt').click(function () {
         auto_2();
      })
      function auto_2() {
         // console.log(n)
         n--;
         if (n < 0) {
            n = 5;
            $('.temp ul').css({ marginLeft: -830 * 6 }, 1000);
         }
         changeBtn(n == 6 ? 0 : n);
         $('.temp ul').stop(true, true).animate({ marginLeft: -830 * n }, 1000);
      };
      //点
      function changeBtn(index) {
         $(".server-bd i").eq(index).css({ background: '#fff' }).siblings().css({ background: "none" });
      }
      $('.server-bd i').mouseover(function () {
         n = $(this).index();
         changeBtn($(this).index());
         $('.temp ul').animate({ marginLeft: -830 * $(this).index() });
      })
   }
   serviceBanner();
   //结束

   //用户评论轮播图
   function usercommentBanner() {
      var index = 0;
      function auto() {
         index++;
         // console.log(index)
         if (index > 11) {
            index = 1;
            $(".tempwp ul").animate({ marginTop: "0" }, 0);
         }
         $(".tempwp ul").animate({ marginTop: -86 * index }, 500);
         // console.log($(".tempwp ul").length);
      }
      var time = setInterval(auto, 3000);
      $('.tempwp').hover(function () {
         clearInterval(time);
      }, function () {
         time = setInterval(auto, 3000);
      });

   }
   usercommentBanner()
   // 结束

   // tab切换
   function tab() {
      // $(".Recycling").children().eq(1).show();
      $(".productitem li").click(function () {
         if ($(this).index() == 1) {   
            //手机
            $('.type-phone p').eq(0).data('typea', 'Apple iphone');
            $('.type-phone p').eq(1).data('typea', '三星 Galaxy S9');
            $('.type-phone p').eq(2).data('typea', '小米5X');
            $('.type-phone p').eq(3).data('typea', '华为 Mate10 Pro');
            $('.type-phone p').eq(4).data('typea', '魅族 魅蓝note5');
            $('.type-phone p').eq(5).data('typea', '锤子坚果Pro 2');
            $('.type-phone p').eq(6).data('typea', 'OPPO R9 Plus 全网通');
            $('.type-phone p').eq(7).data('typea', 'vivo X9');
         }
         //平板
         if ($(this).index() == 2) {
            $('.type-phone p').eq(0).data('typea', 'Apple iPad');
            $('.type-phone p').eq(1).data('typea', '三星 GALAXY TabS T705C');
            $('.type-phone p').eq(2).data('typea', '小米平板');
            $('.type-phone p').eq(3).data('typea', '华为平板');
            $('.type-phone p').eq(4).data('typea', '魅族 N1');
            $('.type-phone p').eq(5).data('typea', '锤子Yoga Tab3 Plus');
            $('.type-phone p').eq(6).data('typea', 'oppo');
            $('.type-phone p').eq(7).data('typea', '抱歉');
         }
         //电脑
         if ($(this).index() == 3) {
            $('.type-phone p').eq(0).data('typea', '苹果 18年15寸 MacBook Pro');
            $('.type-phone p').eq(1).data('typea', '三星 ThinkPad E450');
            $('.type-phone p').eq(2).data('typea', '抱歉');
            $('.type-phone p').eq(3).data('typea', '华为 飞行堡垒FX50J 系列');
            $('.type-phone p').eq(4).data('typea', '抱歉');
            $('.type-phone p').eq(5).data('typea', '抱歉');
            $('.type-phone p').eq(6).data('typea', '抱歉');
            $('.type-phone p').eq(7).data('typea', '抱歉');
         }
         // 智能数码
         if ($(this).index() == 4) {
            $('.type-phone p').eq(0).data('typea', '苹果 Magic Mouse 2 苹果二代蓝牙鼠标');
            $('.type-phone p').eq(1).data('typea', '抱歉');
            $('.type-phone p').eq(2).data('typea', '小米Kindle K3');
            $('.type-phone p').eq(3).data('typea', '华为 Watch 2 Pro');
            $('.type-phone p').eq(4).data('typea', '抱歉');
            $('.type-phone p').eq(5).data('typea', '抱歉');
            $('.type-phone p').eq(6).data('typea', '抱歉');
            $('.type-phone p').eq(7).data('typea', '抱歉');
         }
         //摄影摄像
         if ($(this).index() == 5) {
            $('.type-phone p').eq(0).data('typea', '抱歉');
            $('.type-phone p').eq(1).data('typea', '抱歉');
            $('.type-phone p').eq(2).data('typea', '抱歉');
            $('.type-phone p').eq(3).data('typea', '抱歉');
            $('.type-phone p').eq(4).data('typea', '抱歉');
            $('.type-phone p').eq(5).data('typea', '抱歉');
            $('.type-phone p').eq(6).data('typea', '抱歉');
            $('.type-phone p').eq(7).data('typea', '抱歉');
         }

         //点击让下面的选项出现
         $(".hs-brand").css({ display: "block" });
         $(this).css({ backgroundColor: "#c80f1e", color: 'white', borderRight: 'none' }).siblings().css({ background: 'none', color: 'black', borderRight: '1px dashed #eee' });
         // $('.hs-brand').eq();

         var str = "";
         var time = $(this).data('type');
         //   console.log(time);
         $.ajax({
            type: "get",
            url: "./api/tomtr/tomtr.php",
            data: "time=" + time,
            dataType: 'json',
            success: function (data) {
              console.log(data);
               $.each(data, function (i, val) {
                  console.log(val);
                  str += '<li class="anmi-left">';
                  str += '<img src=' + val.images + ' alt="" width=160>';
                  str += '<div class="shop-box">';
                  str += '<p class="ellipsis">' + val.model + '</p>';
                  str += '<p class="grey">' + val.topPrice + '<span class="price">' + val.price + '</span></p>';
                  // str+='<p class="grey">'+val.topPrice+'</p>';
                  // str+='<span class="price">'+val.price+'</span>'
                  str += '</div>';
                  str += '</li>';
               });
               $('.shopbox .overflow').empty().append(str);
            },
         });
      });

      //事件委托方式让图片向左移
      $(".Recycling .overflow").on('mouseenter', 'img', function () {
         $(this).stop(true, true).animate({ marginLeft: "-25px" }, 250);
      });
      $(".Recycling .overflow").on('mouseleave', 'img', function () {
         $(this).stop(true, true).animate({ marginLeft: "0" }, 250);

      });
      //事件委托方式让字体经过变颜色
      $(".Recycling .overflow").on('mouseenter', 'li', function () {
         $(this).css({ color: "#c80f1e" })
      });
      $(".Recycling .overflow").on('mouseleave', 'li', function () {
         $(this).css({ color: "#000" })
         //点击热门让下面的选项消息
         $('.productitem li').eq(0).click(function () {
            $(".hs-brand").css({ display: "none" });
         })
      });
      //第2个TAB切换

        console.log(22222)
      $('.type-phone p').click(function () {
         // console.log('下标' + $(this).index());
         $(this).css({ backgroundColor: "#fff" }).siblings().css({ backgroundColor: "#f3f4f5" });
         var str = "";
         var king = $(this).data('type');
         //   console.log(king);
         var typea = $(this).data('typea');
         console.log(typea);
         $.ajax({
            type: "get",
            url: "./api/tomtr/tomtr1.php",
            data: {
               // king:king,
               typea: typea
            },
            dataType: 'json',
            success: function (data) {
               // console.log(data);
               $.each(data, function (i, val) {
                   console.log(val);

                  str += '<li class="anmi-left">';
                  str += '<img src=' + val.images + ' alt="" width=160px>';
                  str += '<div class="shop-box">';
                  str += '<p class="ellipsis">' + val.model + '</p>';
                  str += '<p class="grey">' + val.topPrice + '<span class="price">' + val.price + '</span></p>';
                  // str+='<p class="grey">'+val.topPrice+'</p>';
                  // str+='<span class="price">'+val.price+'</span>'
                  str += '</div>';
                  str += '</li>';
               });
               $('.shopbox .overflow').empty().append(str);
            }
         });

      })
   }
   tab()
   // 结束


   // 搜索框
   function sear() {
      $('.hs_input .input').keyup(function () {
         $('.serach_from .hs-list').empty();
         var userVal = $(this).val();
         // console.log(userVal);
         $.ajax({
            type: "get",
            url: "https://sug.so.360.cn/suggest",
            data: "word=" + userVal + "&encodein=utf-8&encodeout=utf-8&pq=&callback=__jsonp1__&t=2577662",
            dataType: "jsonp",
            success: function (data) {
               $('.serach_from .hs-list').css({ display: "block" });
               $.each(data.s, function (index, val) {
                  $('.serach_from .hs-list').append("<p class='hs-conta'>" + val + "</p>");
                  $(".hs-conta").css({ fontSize: "16px", marginLeft: '8px' });
                  $('.hs-list').css({ backgroundColor: "" })

               });
            },
         });
      });
      $(".hs_input .input").blur(function () {
         $(".hs_input .hs-list").css({ background: "none" })
      })
   };
   sear();
   //搜索框结束

   // 右侧弹出导航开始
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
   // 右侧弹出导航结束

});




