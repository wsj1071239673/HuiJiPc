/* stats >> 0:结束，1:等待，2:进行中，3:数量不足 */
(function () {
    $.fn.timePlay = function (options) {
        var defVal = {
            stats: -1,
            time: 100,
            sAttr: 'stime',
            eAttr: 'etime',
            etpl: '<span>距离时间</span>&nbsp;<b>%D%</b>天<b>%H%</b>小时<b>%M%</b>分<b>%S%</b>秒',
            stpl: '<span>剩余时间</span>&nbsp;<b>%D%</b>天<b>%H%</b>小时<b>%M%</b>分<b>%S%</b>秒',
            otpl: '<span>活动已经结束</span>',
            callFun: function () { }
        };

        var s = $.extend(defVal, options);
        var vthis = $(this);
        vthis.each(function () {
            var the = $(this);
            var stime = parseInt(the.attr(s.sAttr)) * 1000;
            var etime = parseInt(the.attr(s.eAttr)) * 1000;
            var showTime = function (stats, showTpl) {
                var nowTime = new Date().getTime();
                if (sEndTime >= nowTime) {
                    the.second = sEndTime - nowTime;
                } else if (eEndTime > nowTime) {
                    the.second = eEndTime - nowTime;
                };
                var totalSecond = the.second -= s.time;
                if (totalSecond < 0) { totalSecond = 0;}
                totalSecond = totalSecond / 1000;
                var D = Math.floor(totalSecond / (24 * 3600));
                var H = Math.floor((totalSecond / 3600) % 24);
                var M = Math.floor((totalSecond / 60) % 60);
                var S = (the.second % 60000 * 0.001).toFixed(1);
                if (s.time == 1000) { S = Math.floor(S) };
                if (S < 10 && S >= 0) { S = '0' + S; } else if (S < 0) { S = "00"; };

                the.html(showTpl.replace(/%D%/, D).replace(/%H%/, H).replace(/%M%/, M).replace(/%S%/, S));
                if (stats == 0) {
                    return;
                } else if (stats == 1 && totalSecond <= 0) {
                    stats = 2;
                    the.second = etime;
                    showTpl = s.stpl;
                } else if ((stats == 3 || stats == 2) && totalSecond <= 0) {
                    stats = 0;
                    the.second = 0
                    showTpl = s.otpl;
                };

                s.callFun(stats, the.second);
                setTimeout(function () { showTime(stats, showTpl) }, s.time);
            };
            the.second = 0;
            if (stime > 0) {
                the.second = stime;
                showTime(1, s.etpl);
            } else if (etime > 0) {
                the.second = etime;
                showTime(s.stats, s.stpl);
            } else {
                showTime(0, s.otpl);
            }
        });
    }
})();

var currstats = -2;
function SetLimitBut(qiang) {
	window.PRODUCT.QIANG=qiang;
    if (currstats == qiang) return;
    currstats = qiang;
    var taocan = window.PRODUCT.TAOCAN;
    var buyurl = '/product/' + window.PRODUCT.PPID + '.html';
//    if (taocan == 1) {//联通
//        buyurl = '/taocan.aspx?ppid=' + window.PRODUCT.PPID;
//    } else if (taocan == 2) {
//        buyurl = '/dianxin.aspx?ppid=' + window.PRODUCT.PPID;
//    }
    var buyLinkTmp = "<a href=\"{0}\" title=\"{2}\" class=\"add_gwc\"><img src=\"http://img3.ch999img.com/images/{1}\" width=\"198\" height=\"62\" /></a> ";
    var startMsg = "";
    var buylinkStr = "";
    var strFormat = function () {
        var tmp = arguments[0]; for (var i = 1; i < arguments.length; i++) tmp = tmp.replace('{' + (i - 1) + '}', arguments[i]);
        return tmp;
    };
    switch (qiang) {
        case 0:
            buylinkStr = strFormat(buyLinkTmp, "#\" onclick=\"return false;", "limitbuy0.png", startMsg) +
                         strFormat(buyLinkTmp, buyurl + "\" mybuy=\"0", "limitbuy4.png?t=1", startMsg);
            break;
        case 1:
            buylinkStr = strFormat(buyLinkTmp, "#\" qiang=\"1\" onclick=\"return false;", "limitbuy1.png", startMsg) +
                         strFormat(buyLinkTmp, buyurl + "\" mybuy=\"1", "limitbuy4.png?t=1", startMsg);
            break;
        case 2:
            buylinkStr = strFormat(buyLinkTmp, "#\" onclick=\"myqiang(" + PRODUCT.qid + ",this);return false;\" qiang=\"2", "limitbuy2.png", startMsg);
            break;
        case 3:
            buylinkStr = strFormat(buyLinkTmp, "#\" onclick=\"return false;", "limitbuy3.png", startMsg) +
                         strFormat(buyLinkTmp, buyurl, "limitbuy4.png?t=1", startMsg);
            break;
    }
    if (qiang == 2) {
        $('#validateCode').show();
       
        if (window.PRODUCT.ISCODE) { $('#mycodediv').show(); LoadValideImg && LoadValideImg(); } else { $('#mycodediv').hide() };
    } else {
        $('#mycodediv,#validateCode').hide();
        $('#mybuycode,#txtValidateCode').val('');
    };
    $('#buyType').html(buylinkStr).show();
}
var sEndTime, eEndTime;
function detailLimitFun() {
    if (window.PRODUCT.QIANG != -1) {
        $.get('/ajaxOperate.aspx?act=getlimitbuy&ppid=' + window.PRODUCT.PPID + '&lid=' + window.PRODUCT.qid + '&t=' + Math.random(), function (re) {
            var time = new Date().getTime();
            sEndTime = re.stime * 1000 + time; //客户端活动开始时间
            eEndTime = re.etime * 1000 + time; //客户端活动结束时间
            if (re.stats == 1) {
                window.PRODUCT.QIANG = re.qiang;
                window.PRODUCT.ISCODE = re.iscode;
                window.PRODUCT.ISBUY = re.isbuy;
                $('#vLimitNum b').html(re.buynum);
                SetLimitBut(re.qiang);
                if (re.buynum < 1 && re.etime > 0 && re.stime<0) {
                    $('#vLimitTxt').html('<span>商品已抢空</span>');
                } else if (re.etime <= 0) {
                    $('#vLimitTxt').html('<span>活动已经结束</span>');
                } else {
                    $('#vLimitTxt').attr('stime', re.stime).attr('etime', re.etime).timePlay({ stats: re.qiang, callFun: SetLimitBut });
                }
            };
        }, 'json');
    };
}