;(function(){
    var flag = true;
    $('.slide-btn').click(function(e){
        e.preventDefault();
        if(flag){
            $(this).css({left:2});
            $(this).parent().css({background:'#dedede'});
            flag = false;
        }else{
            $(this).css({left:22});
            $(this).parent().css({background:'#c80f1e'});
            flag = true;
        }
        
    })
    $('.login-btn').click(function(e){
        e.preventDefault();
        $.ajax({
            type:'get',
            url:'api/login.php',
            data:$("form").serialize(),
            dataType:'json',
            beforeSend:function(){
                $('.login-btn').html('登录中...');
            },
            success:function(data){
                if(data == 0){
                    if(flag){
                       setCookie('user',$('.user').val(),90); 
                    }else{
                        setCookie('user',$('.user').val(),1);
                    }
                    // alert('登录成功');
                    $('.login-btn').html('登录成功');
                    setTimeout(function(){
                        $('.login-gog').fadeOut(2000,function(){
                            location.href="index.html";
                        })
                    },500)
                }else if(data == 2){
                    alert('密码错误');
                    $('.login-btn').html('登录');    
                }else{
                    alert('用户名不存在');
                    $('.login-btn').html('登录');
                }
                
            }
        })
    })
    function setCookie(name,value,day){
        var date = new Date();
        var expireDays = day;
        date.setDate(date.getDate() + expireDays);  
        // date.toGMTString();//计算机标准时间格式
        document.cookie = name + "=" + escape(value) + ";expires="+ date.toGMTString();
    }
})();