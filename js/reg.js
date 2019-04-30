$(function(){
    //切换注册方式
    ;(function(){
        $('.reg').eq(1).hide();
        $('.fast-reg').click(function(){
            $('.fast-reg').addClass('act').next().removeClass('act');
            $('.reg').eq(1).show().prev().hide();
        })
        $('.account-reg').click(function(){
            $(this).addClass('act').prev().removeClass('act');
            $('.reg').eq(0).show().next().hide();
        })
    })();
    //失去焦点 工具提示
    ; var verify = (function () {
        //正则
        var patt = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{6,16}$/;
        var code = 1;//验证两次密码  状态
        function tit(ele,cont){
            ele.parent().css({position:'relative'});
            ele.next().html(cont).show();
            // setTimeout(function(){
            //     ele.next().hide()
            // },2000)
        }
        function regular(ele){
            return patt.test(ele.val());
        }
        //验证信息不为空
        function isNull(ele,ele2) {
            ele.on('blur',function () {
                ele2.hide();
                if ($(this).val()) {
                    //验证长度
                    if ($(this).val().length >= 6 && $(this).val().length <= 16) {
                        //验证正则
                        if(!regular($(this))){
                            tit(ele,'必须为数字和字母组合');
                        }
                    } else {
                        tit(ele,'长度为6-16位');
                    }
                } else {                  
                    tit(ele,'不能为空!');
                }
            })
        }
        //验证二次密码
        function isRpwd(ele,ele2){
            //判断两次密码是否一致
            ele.keyup(function () {
                if(ele.val() != ele2.val()){
                    tit(ele,'两次密码不一致');
                    code =1;
                }else{
                    code = 0;
                }    
            })  
        }
        //ajax
        function aja(){
            $.ajax({
                type:'get',
                url:'api/reg.php',
                data:$("form").serialize(),
                dataType:'json',
                beforeSend:function(){
                    $('.btn2').html('注册中...');
                },
                success:function(data){
                    if(data){
                        setCookie('user',$('.user').val());
                        $('.btn2').html('注册成功');
                        $('.content').css({
                            transform: 'translateZ(-5000px)'
                        })
                        setTimeout(function(){
                            $('.content').hide();
                            location.href = 'login.html';
                        },3000)  
                    }else{
                        tit($('.user'),'用户名已存在!');
                        $('.btn2').html('提交注册');   
                    }
                }
            })
        }
        //点击发送
        function eac(ele,ele2,ele3){
            ele.click(function(e){
                e.preventDefault();
                if(regular(ele2) && regular(ele3) && code ==0){
                    aja();
                }else{
                    console.log('不合格')
                }
            }) 
        }
        return {
            isNull: isNull,
            isRpwd : isRpwd,
            eac : eac
        }
    })();
    verify.isNull($('.user'),$('.tip'));
    verify.isNull($('.pwd'),$('.tip'));
    verify.isNull($('.rpwd'),$('.tip'));
    verify.isRpwd($('.rpwd'),$('.pwd'));
    verify.eac($('.btn2'),$('.user'),$('.pwd'));

    //验证码打开
    ;(function(){
        $('.slide').hide();
        $('.mask').click(function(){
            $('.slide').hide();
        })
        $('.phone-btn').click(function(){
            $('.slide').show();
        })
    })();

    //滑动
    ;(function(){
        // // var n = 0;
        // // var flag=true;
        // // var timer = null;
        // $('.slide-btn').mousedown(function(e){
        //     console.log(1)
        //     var x = e.pageX; 
        //     var a = $('.slide-btn').offset().left;
        //     var c = x - a - $('.slide-btn').width()/2;
        //     console.log(x,a,c)
        //     // clearInterval(timer);
        //     $(document).mousemove(function(){
        //         $('.slideway p').html('');
        //         if(c <= 0){
        //             c = 0;
        //         }
        //         // console.log(c)
        //             // clearInterval(timer);
        //         //     // n=258;   
        //         // $('.slide-btn').css({left:c+10});
        //         // $('.img-box img').css({left:c+10});
        //     })
        //     // $(document).mouseup(function(){
        //     //     $(document).off();
        //     // })
        //     // return false;
        // })
        //     // if(n !=258){
        //     //     timer = setInterval(function(){
        //     //         n -= 40;
        //     //         if(n <= 30){
        //     //             n=0;
        //     //             clearInterval(timer);
        //     //             flag=false;
        //     //         }
        //     //         swit.style.left = n+'px';
        //     //         mask.style.width = n+'px';
        //     //     },1000)
        //     // }       
    })(); 
});
