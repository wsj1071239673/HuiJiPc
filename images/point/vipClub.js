/*同步签到领积分*/
$(".viphdad a").attr("href", "javascript:;").removeAttr("target");
$(".viphdad").on("click", function () {
    layer.open({
        type: 1,
        title: '同步签到领积分',
        content: '<div style="text-align:center;padding:10px 20px 25px;font-size:14px;"><img src="/images/ewm.png" style="width:220px;" /><p>微信扫一扫，关注<%=SiteName %>同步签到领积分！</p></div>'
    })
});

/*详细参数提示*/
$(".tip-help").mouseover(function () {
    var html = $(this).attr("rel");
    if (html) {
        layer.tips(html, $(this), { time: 5000 });
    }
});