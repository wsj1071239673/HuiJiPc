function getScrTop() {
    return scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}

var page = 2;
var flag = true;
var navR = document.querySelector(".nav-right");
var ulObj = document.querySelector(".nav-right ul");
window.onscroll = function () {
    var scrollT = getScrTop();

    // 获取窗口可视区域的高度
    var winH = window.innerHeight;

    // 获取图片距离页面顶部的距离
    var navRTop = navR.offsetTop;
    if (winH + scrollT >= navRTop) {

        if (flag) {
            console.log(page);
            flag = false;
            var xhr;
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject("Microsoft:XMLHTTP");
            }
            xhr.open("get", "api/sale-problem.php?page=" + page, true);
            xhr.send();
            xhr.onreadystatechange = function () {
                // console.log(11111);
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    var htmlStr = "";
                    for (var i = 0; i < data.length; i++) {
                        htmlStr += "<li>";
                        htmlStr += "<a href=\"#\">";
                        htmlStr += "<img src=" + data[i].img + ">";
                        htmlStr += "</a>";
                        htmlStr += "<h3>";
                        htmlStr += "<a href=\"#\">" + data[i].title + "</a>";
                        htmlStr += "</h3>";
                        htmlStr += "<p>" + data[i].title;
                        htmlStr += "<a href=\"#\">" + data[i].more + "</a>";
                        htmlStr += "</p>";
                        htmlStr += "<div class=\"import\">";
                        htmlStr += "<em>" + data[i].time + "</em>";
                        htmlStr += "<div class=\"import-rt\">";
                        htmlStr += "<span>";
                        htmlStr += "<i class=\"irt1\"></i>";
                        htmlStr += "<em>" + data[i].views + "</em>";
                        htmlStr += "</span>";
                        htmlStr += "<span>";
                        htmlStr += "<i class=\"irt2\"></i>";
                        htmlStr += "<em>" + data[i].zan + "</em>";
                        htmlStr += "</span>";
                        htmlStr += "<a href=\"#\">";
                        htmlStr += "<i class=\"atu\"></i>";
                        htmlStr += "<em>" + data[i].con + "</em>";
                        htmlStr += "</a>";
                        htmlStr += "</div>";
                        htmlStr += "</div>";
                        htmlStr += "</li>";
                    }
                    ulObj.innerHTML += htmlStr;
                    page++;
                    if( page>5){
                        ulObj.innerHTML += "";
                        return;
                    }
                    flag = true;
                }
            }
        }

    }

}