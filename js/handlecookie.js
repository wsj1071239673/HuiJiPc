    function setCookie(name,value){
        var date = new Date();
        var expireDays = 7;
        date.setDate(date.getDate() + expireDays);  
        // date.toGMTString();//计算机标准时间格式
        document.cookie = name + "=" + escape(value) + ";expires="+ date.toGMTString();
    }

    function delCookie(name,value){
        var date = new Date();
        date.setDate(date.getDate() -7);
        var cval = getCookie(name);  
        document.cookie = name + "=" + escape(value) + ";expires="+ date.toGMTString();
    }
    
    function getCookie(name,obj){
        // console.log(1);
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
            obj.innerHTML = unescape(arr[2]);
            // break; 
        }
    }
    // function getCookie(name,obj){
    //     var coo = document.cookie;
    //     var arrStr = coo.split('; ');
    //     var u;
    //     for(var i=0;i < arrStr.length;i++){
    //         var arr = arrStr[i].split('=');
    //         if(name == arr[0]){ 
    //             u = arr[1];
    //             break;
    //         }     
    //     }    
    //     obj.innerHTML = u;
    // }