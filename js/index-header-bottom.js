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

}
tanchu();





// 搜索效果

function cb(data) {
    console.log(data);
    var SearchRes = document.querySelector('.SearchRes');
    for (var i in data) {
        var node = document.createElement('li');
        node.innerHTML = "<strong>" + data[i] + "</strong>";
        SearchRes.appendChild(node);
    }
}
var seach = document.querySelector(".gseach");
seach.onkeyup = function () {
    var scriptEl = document.createElement("script");
    scriptEl.src = "https://sug.so.360.cn/suggest?word=" + this.value + "&encodein=utf-8&encodeout=utf-8&pq=&callback=cb";
    document.body.appendChild(scriptEl);
}


