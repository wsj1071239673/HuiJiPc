//     判断浏览器版本是否过低 
;(function(){
    var ua = navigator.userAgent.toLowerCase();
    if (window.ActiveXObject) {  //ie
        var IEversion = ua.match(/msie ([\d.]+)/)[1];
        if (IEversion <= 10) {
            location.href = "/static/kill-ie.html";
        }
    }
    if (Platform.browser.name() == 'chrome' && Platform.browser.version() < 30) {  //chrome
        location.href = "/static/kill-ie.html";
    }
})();
