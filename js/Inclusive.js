function tanchu() {
    var popup = document.querySelector(".popup");
    var perCenter = document.querySelector('.perCenter');

    popup.onmouseover = function () {
        perCenter.style.display = "block";
    }
    popup.onmouseout = function () {
        perCenter.style.display = "none";
    }
    perCenter.onmouseover = function () { 
        perCenter.style.display = "block";
    }   
    perCenter.onmouseout = function () {
        perCenter.style.display = "none";
    }
    

    var site = document.querySelector(".site");
    var siteChoose = document.querySelector('.site-choose');

    

}
tanchu();

// 地址弹出选择

function site() {
    var client = document.querySelector(".client");
    var clientDown = document.querySelector('.client-down');
    client.onmouseover = function () {
        clientDown.style.display = "block";
    }
    client.onmouseout = function () {
        clientDown.style.display = "none";
    }
    clientDown.onmouseover = function () {
        clientDown.style.display = "block";
    }   
    clientDown.onmouseout = function () {
        clientDown.style.display = "none";
    } 

    var gnav = document.querySelector(".gnav");
    var gnavList = document.querySelector('.gnav-list');
    gnav.onmouseover = function () {
        gnavList.style.display = "block";
    }
    gnav.onmouseout = function () {
        gnavList.style.display = "none";
    }
    gnavList.onmouseover = function () {
        gnavList.style.display = "block";
    }   
    gnavList.onmouseout = function () {
        gnavList.style.display = "none";
    } 

    var number = document.querySelector(".number");
    var gCall = document.querySelector('.gCall');
    number.onmouseover = function () {
        gCall.style.display = "block";
    }
    number.onmouseout = function () {
        gCall.style.display = "none";
    }
    gCall.onmouseover = function () {
        gCall.style.display = "block";
    }   
    gCall.onmouseout = function () {
        gCall.style.display = "none";
    } 

    var sh = document.querySelector(".sh");
    var levser = document.querySelector('.levser');
    sh.onmouseover = function () {
        levser.style.display = "block";
    }
    sh.onmouseout = function () {
        levser.style.display = "none";
    }
    levser.onmouseover = function () {
        levser.style.display = "block";
    }   
    levser.onmouseout = function () {
        levser.style.display = "none";
    } 
    
    
    var jjt = document.querySelector(".jjt");
    var levsertwo = document.querySelector('.levsertwo');
    jjt.onmouseover = function () {
        levsertwo.style.display = "block";
    }
    jjt.onmouseout = function () {
        levsertwo.style.display = "none";
    }
    levsertwo.onmouseover = function () {
        levsertwo.style.display = "block";
    }   
    levsertwo.onmouseout = function () {
        levsertwo.style.display = "none";
    } 
    
}
site();



// 搜索效果
var seach = document.querySelector(".gseach");
function cb(data) {
    
    console.log(data);
    var SearchRes = document.querySelector('.SearchRes');
    for (var i in data.s) {
        
        var node = document.createElement('li');
        node.innerHTML = "<span>" + data.s[i] + "</span>";
        SearchRes.style.display="block";
        SearchRes.appendChild(node);
    }
    seach.onblur=function () {
        SearchRes.style.display= "none";
    }
    // SearchRes.innerHTML="";
}

seach.onkeydown = function () {
    
    var scriptEl = document.createElement("script");
    
    scriptEl.src = "https://sug.so.360.cn/suggest?word=" + this.value + "&encodein=utf-8&encodeout=utf-8&pq=&callback=cb";
    document.body.appendChild(scriptEl);
}



// 右侧弹出导航开始
    $(function(){
        $('.righticon li').mouseover(function () {
            $(this).css({ background: 'rgba(255,0,0,0.5)' }).siblings().css({ background: 'none' })
            $('.rightpop li').eq($(this).index()).show().siblings().hide();
            // $('.rightpop li em').eq($(this).index()).show().siblings().hide();
        })
        $('.righticon li').mouseout(function () {
         $(this).css({background:'none'})
            $('.rightpop li').eq($(this).index()).hide();
            // $('.rightpop li em').eq($(this).index()).hide();
        })
        $('.rightpop li').mouseover(function () {  
           
            $(this).show();
        })
        $('.rightpop li').mouseout(function () {
           
            $(this).hide();
            $('.righticon li').eq($(this).index()).css({background:"none"})
        })
    })

// 点击地图名
$(function () {
    $('.all-city').click(function () {
        $('.address').text($(this).text()).css({color:"red"});   
    }) 
    $('.hotCities').click(function () {
        $('.address').text($(this).text()).css({color:"red"}) 
    })
})


// 菜单二级页




  



