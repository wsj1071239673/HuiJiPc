function getScrollY(){
    return document.documentElement.scrollTop || document.body.scrolltop || window.pageYOffset;
}

var page = 1;
var flag = true;
window.onscroll = function(){
    var winH = window.innerHeight;  
    var list = document.querySelector(".list");
    var ulObj = document.querySelector(".list-left");

    var listTop = list.offsetTop + list.clientHeight   
    console.log(listTop)
    var scrollT = getScrollY();   
    if (winH + scrollT >= listTop){
        if (flag){
            flag = false;
        var xhr = new XMLHttpRequest();
            xhr.open("get","api/hyzx.php?page="+ page ,true)
            xhr.send();
            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4 && xhr.status == 200){
                    console.log(JSON.parse(xhr.responseText));
                    var data = JSON.parse(xhr.responseText);
                    var htmlStr = "";
                    for(var i = 0; i < data.length; i++){
                        htmlStr += "<li class=\"item\">";
                        htmlStr += "<div class=\"item-dt\">";
                        htmlStr += '<img src='+data[i].imag+">";
                        htmlStr += "<p>";
                        htmlStr += "<span>"+ data[i].user+"</span>";
                        htmlStr += "<span class=\"sp\">" + data[i].time+"</span>";
                        htmlStr += "</p>";
                        htmlStr += "</div>";
                        htmlStr += "<div class=\"item-img\">";
                        htmlStr += "<img src="+data[i].img+">";
                        htmlStr += "</div>";
                        htmlStr += "<div class=\"item-dl\">";
                        htmlStr += "<h3>"+ data[i].title +"</h3>";
                        htmlStr += "<p>"+ data[i].brife +"</p>";
                        htmlStr += "</div>";
                        htmlStr += "<div class=\"btn\">";
                        htmlStr += "<a class=\"left\">"+"<i class=\"pce\"></i>"+data[i].pce+"</a>";
                        htmlStr += "<span>"+"<i class=\"views\"></i>"+data[i].views+"</span>";
                        htmlStr += "<a >";
                        htmlStr +="<i class=\"zan\"></i>";
                        htmlStr += "<span>"+data[i].zan+"</span>";
                        htmlStr += "</a>";
                        htmlStr += "<a >";
                        htmlStr +="<i class=\"com\"></i>";
                        htmlStr += "<span>"+data[i].con+"</span>";
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
$('.hot-img').hover(
    function(){
       $(this).children('.ceng').show();
    },
    function(){
        $(this).children('.ceng').hide()
    }
)
