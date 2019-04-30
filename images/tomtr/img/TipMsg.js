/*提示信息*/
var TipMsg = {
    showTimer: null,
    popUp: function (icon, msg, abort, callback) {/*true或false,"提示",true为有取消按钮*/
        var cName;
        var callback = callback || function () { };
        if (icon == true) { cName = "true" }
        else if (icon == false) { cName = "false" } else { cName = "hide" }
        $("body").append('<div id="mark"></div><div id="alert"><h3>Tips<a href="javascript:;" onclick="TipMsg.closePop()"></a></h3><div class="tip_msg"><i class="' + cName + '"></i><div class="msg_con">' + msg + '</div></div><div class="al_btn"><button id="config">确定</button><button onclick="TipMsg.closePop()" id="abort">取消</button></div></div>');
        if (abort == true) { $("#abort").show(); }
        var win = $(window), off = $("#alert");
        off.css({ "left": (win.width() - off.width()) / 2 });
        $("#config").click(function () {
            TipMsg.closePop(callback);
        });
    },
    closePop: function (callback) {
        $("#mark,#alert").remove();
        if (callback) { callback(); }
    },
    position: function (msg, tag, timer, leftplus, topplus, direction) {/*"提示",$(this),2000,向左偏移,向上偏移,方向*/
        clearTimeout(this.showTimer);
        if ($("#tipBox").length == 0) { $("body").append('<div id="tipBox"></div>'); } else { $("#tipBox").show(); }
        var tagOff = tag.offset() || tag.position(), the = $("#tipBox");
        the.html('<div>' + msg + '</div>')
        var h = the.height() + 30;
        var _direction = direction || "up";
        if (leftplus == null) { leftplus = 0 }
        if (topplus == null) { topplus = 0 }
        if (_direction == "up") {
            the.css({ top: tagOff.top - h - 20, left: tagOff.left + leftplus }).removeClass("downTip leftTip rightTip");
            the.fadeIn(300).animate({ top: tagOff.top - h + topplus }, 300);
        } else if (_direction == "down") {
            the.css({ top: tagOff.top + tag.outerHeight() + 10, left: tagOff.left + leftplus }).addClass("downTip");
            the.fadeIn(300).animate({ top: tagOff.top + tag.outerHeight() + topplus }, 300);
        } else if (_direction == "left") {
            the.css({ top: tagOff.top + topplus, left: tagOff.left - tag.outerWidth() - 10 }).addClass("leftTip");
            the.fadeIn(300).animate({ left: tagOff.left - tag.outerWidth() - 10 + leftplus }, 300);
        } else if (_direction == "right") {
            the.css({ top: tagOff.top + topplus, left: tagOff.left + tag.outerWidth() + 10 + leftplus }).addClass("rightTip");
            the.fadeIn(300).animate({ left: tagOff.left + tag.outerWidth() + 10 + leftplus }, 300);
        }
        if (timer != -1) {
            the.hover(function () { clearTimeout(TipMsg.showTimer); }, function () {
                TipMsg.showTimer = setTimeout(function () {
                    the.fadeOut(300, function () { the.remove(); });
                }, timer);
            });
            TipMsg.showTimer = setTimeout(function () {
                the.fadeOut(300, function () { the.remove(); });
            }, timer);
        } else {
            tag.mouseleave(function () {
                the.hover(function () { clearTimeout(TipMsg.showTimer); }, function () {
                    TipMsg.showTimer = setTimeout(function () {
                        the.fadeOut(300, function () { the.remove(); });
                    }, 300);
                });
                TipMsg.showTimer = setTimeout(function () {
                    the.fadeOut(300, function () { the.remove(); });
                }, 300);
            });
        }
    },
    Dialog: function (icon, msg, timer) {/*true或false,"提示",时间*/
        var cName = icon == true ? "true" : "false";
        $("body").append('<div id="mark"></div><div id="automsg"><i class="' + cName + '"></i><span>' + msg + '</span></div>');
        var win = $(window), the = $("#automsg");
        the.css({ left: (win.width() - the.width()) / 2, top: (win.height() - the.height()) / 2 });
        setTimeout(function () { $("#mark,#automsg").remove(); }, timer);
    }
};