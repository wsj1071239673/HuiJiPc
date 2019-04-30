/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function () { function a(a) { return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y) } function b(a) { return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'" } function c(c, d) { function e(a) { return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a } function f(b) { var c = m; if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () { return m++, "$line=" + m + ";" })), 0 === b.indexOf("=")) { var e = l && !/^=[=#]/.test(b); if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) { var f = b.replace(/\s*\([^\)]+\)/, ""); n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")") } else b = "$string(" + b + ")"; b = s[1] + b + s[2] } return g && (b = "$line=" + c + ";" + b), r(a(b), function (a) { if (a && !p[a]) { var b; b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0 } }), b + "\n" } var g = d.debug, h = d.openTag, i = d.closeTag, j = d.parser, k = d.compress, l = d.escape, m = 1, p = { $data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1 }, q = "".trim, s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"], t = q ? "$out+=text;return $out;" : "$out.push(text);", u = "function(){var text=''.concat.apply('',arguments);" + t + "}", v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}", w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""), x = s[0], y = "return new String(" + s[3] + ");"; r(c.split(h), function (a) { a = a.split(i); var b = a[0], c = a[1]; 1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c))) }); var z = w + x + y; g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}"); try { var A = new Function("$data", "$filename", z); return A.prototype = n, A } catch (B) { throw B.temp = "function anonymous($data,$filename) {" + z + "}", B } } var d = function (a, b) { return "string" == typeof b ? q(b, { filename: a }) : g(a, b) }; d.version = "3.0.0", d.config = function (a, b) { e[a] = b }; var e = d.defaults = { openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null }, f = d.cache = {}; d.render = function (a, b) { return q(a, b) }; var g = d.renderFile = function (a, b) { var c = d.get(a) || p({ filename: a, name: "Render Error", message: "Template not found" }); return b ? c(b) : c }; d.get = function (a) { var b; if (f[a]) b = f[a]; else if ("object" == typeof document) { var c = document.getElementById(a); if (c) { var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, ""); b = q(d, { filename: a }) } } return b }; var h = function (a, b) { return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a }, i = { "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;" }, j = function (a) { return i[a] }, k = function (a) { return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j) }, l = Array.isArray || function (a) { return "[object Array]" === {}.toString.call(a) }, m = function (a, b) { var c, d; if (l(a)) for (c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a); else for (c in a) b.call(a, a[c], c) }, n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m }; d.helper = function (a, b) { o[a] = b }; var o = d.helpers = n.$helpers; d.onerror = function (a) { var b = "Template Error\n\n"; for (var c in a) b += "<" + c + ">\n" + a[c] + "\n\n"; "object" == typeof console && console.error(b) }; var p = function (a) { return d.onerror(a), function () { return "{Template Error}" } }, q = d.compile = function (a, b) { function d(c) { try { return new i(c, h) + "" } catch (d) { return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c)) } } b = b || {}; for (var g in e) void 0 === b[g] && (b[g] = e[g]); var h = b.filename; try { var i = c(a, b) } catch (j) { return j.filename = h || "anonymous", j.name = "Syntax Error", p(j) } return d.prototype = i.prototype, d.toString = function () { return i.toString() }, h && b.cache && (f[h] = d), d }, r = n.$each, s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined", t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g, u = /[^\w$]+/g, v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"), w = /^\d[^,]*|,\d[^,]*/g, x = /^,+|,+$/g, y = /^$|,+/; e.openTag = "{{", e.closeTag = "}}"; var z = function (a, b) { var c = b.split(":"), d = c.shift(), e = c.join(":") || ""; return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")" }; e.parser = function (a) { a = a.replace(/^\s/, ""); var b = a.split(" "), c = b.shift(), e = b.join(" "); switch (c) { case "if": a = "if(" + e + "){"; break; case "else": b = "if" === b.shift() ? " if(" + b.join(" ") + ")" : "", a = "}else" + b + "{"; break; case "/if": a = "}"; break; case "each": var f = b[0] || "$data", g = b[1] || "as", h = b[2] || "$value", i = b[3] || "$index", j = h + "," + i; "as" !== g && (f = "[]"), a = "$each(" + f + ",function(" + j + "){"; break; case "/each": a = "});"; break; case "echo": a = "print(" + e + ");"; break; case "print": case "include": a = c + "(" + b.join(",") + ");"; break; default: if (/^\s*\|\s*[\w\$]/.test(e)) { var k = !0; 0 === a.indexOf("#") && (a = a.substr(1), k = !1); for (var l = 0, m = a.split("|"), n = m.length, o = m[l++]; n > l; l++) o = z(o, m[l]); a = (k ? "=" : "=#") + o } else a = d.helpers[c] ? "=#" + c + "(" + b.join(",") + ");" : "=" + a } return a }, "function" == typeof define ? define(function () { return d }) : "undefined" != typeof exports ? module.exports = d : this.template = d }();
/*! layer-v2.4 弹层组件 License LGPL  http://layer.layui.com/ By 贤心 */
; !function (a, b) { "use strict"; var c, d, e = { getPath: function () { var a = document.scripts, b = a[a.length - 1], c = b.src; if (!b.getAttribute("merge")) return c.substring(0, c.lastIndexOf("/") + 1) }(), enter: function (a) { 13 === a.keyCode && a.preventDefault() }, config: {}, end: {}, btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"], type: ["dialog", "page", "iframe", "loading", "tips"] }, f = { v: "2.4", ie6: !!a.ActiveXObject && !a.XMLHttpRequest, index: 0, path: e.getPath, config: function (a, b) { var d = 0; return a = a || {}, f.cache = e.config = c.extend(e.config, a), f.path = e.config.path || f.path, "string" == typeof a.extend && (a.extend = [a.extend]), f.use("../style/main.min.css", a.extend && a.extend.length > 0 ? function g() { var c = a.extend; f.use(c[c[d] ? d : d - 1], d < c.length ? function () { return ++d, g }() : b) }() : b), this }, use: function (a, b, d) { var e = c("head")[0], a = a.replace(/\s/g, ""), g = /\.css$/.test(a), h = document.createElement(g ? "link" : "script"), i = "layui_layer_" + a.replace(/\.|\//g, ""); return f.path ? (g && (h.rel = "stylesheet"), h[g ? "href" : "src"] = /^http:\/\//.test(a) ? a : f.path + a, h.id = i, c("#" + i)[0] || e.appendChild(h), function j() { (g ? 1989 === parseInt(c("#" + i).css("width")) : f[d || i]) ? function () { b && b(); try { g || e.removeChild(h) } catch (a) { } }() : setTimeout(j, 100) }(), this) : void 0 }, ready: function (a, b) { var d = "function" == typeof a; return d && (b = a), f.config(c.extend(e.config, function () { return d ? {} : { path: a } }()), b), this }, alert: function (a, b, d) { var e = "function" == typeof b; return e && (d = b), f.open(c.extend({ content: a, yes: d }, e ? {} : b)) }, confirm: function (a, b, d, g) { var h = "function" == typeof b; return h && (g = d, d = b), f.open(c.extend({ content: a, btn: e.btn, yes: d, btn2: g }, h ? {} : b)) }, msg: function (a, d, g) { var i = "function" == typeof d, j = e.config.skin, k = (j ? j + " " + j + "-msg" : "") || "layui-layer-msg", l = h.anim.length - 1; return i && (g = d), f.open(c.extend({ content: a, time: 3e3, shade: !1, skin: k, title: !1, closeBtn: !1, btn: !1, end: g }, i && !e.config.skin ? { skin: k + " layui-layer-hui", shift: l } : function () { return d = d || {}, (-1 === d.icon || d.icon === b && !e.config.skin) && (d.skin = k + " " + (d.skin || "layui-layer-hui")), d }())) }, load: function (a, b) { return f.open(c.extend({ type: 3, icon: a || 0, shade: .01 }, b)) }, tips: function (a, b, d) { return f.open(c.extend({ type: 4, content: [a, b], closeBtn: !1, time: 3e3, shade: !1, fix: !1, maxWidth: 210 }, d)) } }, g = function (a) { var b = this; b.index = ++f.index, b.config = c.extend({}, b.config, e.config, a), b.creat() }; g.pt = g.prototype; var h = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"]; h.anim = ["layer-anim", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"], g.pt.config = { type: 0, shade: .3, fix: !0, move: h[1], title: "&#x4FE1;&#x606F;", offset: "auto", area: "auto", closeBtn: 1, time: 0, zIndex: 19891014, maxWidth: 360, shift: 0, icon: -1, scrollbar: !0, tips: 2 }, g.pt.vessel = function (a, b) { var c = this, d = c.index, f = c.config, g = f.zIndex + d, i = "object" == typeof f.title, j = f.maxmin && (1 === f.type || 2 === f.type), k = f.title ? '<div class="layui-layer-title" style="' + (i ? f.title[1] : "") + '">' + (i ? f.title[0] : f.title) + "</div>" : ""; return f.zIndex = g, b([f.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + d + '" times="' + d + '" style="' + ("z-index:" + (g - 1) + "; background-color:" + (f.shade[1] || "#000") + "; opacity:" + (f.shade[0] || f.shade) + "; filter:alpha(opacity=" + (100 * f.shade[0] || 100 * f.shade) + ");") + '"></div>' : "", '<div class="' + h[0] + (" layui-layer-" + e.type[f.type]) + (0 != f.type && 2 != f.type || f.shade ? "" : " layui-layer-border") + " " + (f.skin || "") + '" id="' + h[0] + d + '" type="' + e.type[f.type] + '" times="' + d + '" showtime="' + f.time + '" conType="' + (a ? "object" : "string") + '" style="z-index: ' + g + "; width:" + f.area[0] + ";height:" + f.area[1] + (f.fix ? "" : ";position:absolute;") + '">' + (a && 2 != f.type ? "" : k) + '<div id="' + (f.id || "") + '" class="layui-layer-content' + (0 == f.type && -1 !== f.icon ? " layui-layer-padding" : "") + (3 == f.type ? " layui-layer-loading" + f.icon : "") + '">' + (0 == f.type && -1 !== f.icon ? '<i class="layui-layer-ico layui-layer-ico' + f.icon + '"></i>' : "") + (1 == f.type && a ? "" : f.content || "") + '</div><span class="layui-layer-setwin">' + function () { var a = j ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' : ""; return f.closeBtn && (a += '<a class="layui-layer-ico ' + h[7] + " " + h[7] + (f.title ? f.closeBtn : 4 == f.type ? "1" : "2") + '" href="javascript:;"></a>'), a }() + "</span>" + (f.btn ? function () { var a = ""; "string" == typeof f.btn && (f.btn = [f.btn]); for (var b = 0, c = f.btn.length; c > b; b++) a += '<a class="' + h[6] + b + '">' + f.btn[b] + "</a>"; return '<div class="' + h[6] + '">' + a + "</div>" }() : "") + "</div>"], k), c }, g.pt.creat = function () { var a = this, b = a.config, g = a.index, i = b.content, j = "object" == typeof i; if (!c("#" + b.id)[0]) { switch ("string" == typeof b.area && (b.area = "auto" === b.area ? ["", ""] : [b.area, ""]), b.type) { case 0: b.btn = "btn" in b ? b.btn : e.btn[0], f.closeAll("dialog"); break; case 2: var i = b.content = j ? b.content : [b.content || "//layer.layui.com", "auto"]; b.content = '<iframe scrolling="' + (b.content[1] || "auto") + '" allowtransparency="true" id="' + h[4] + g + '" name="' + h[4] + g + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + b.content[0] + '"></iframe>'; break; case 3: b.title = !1, b.closeBtn = !1, -1 === b.icon && 0 === b.icon, f.closeAll("loading"); break; case 4: j || (b.content = [b.content, "body"]), b.follow = b.content[1], b.content = b.content[0] + '<i class="layui-layer-TipsG"></i>', b.title = !1, b.tips = "object" == typeof b.tips ? b.tips : [b.tips, !0], b.tipsMore || f.closeAll("tips") } a.vessel(j, function (d, e) { c("body").append(d[0]), j ? function () { 2 == b.type || 4 == b.type ? function () { c("body").append(d[1]) }() : function () { i.parents("." + h[0])[0] || (i.show().addClass("layui-layer-wrap").wrap(d[1]), c("#" + h[0] + g).find("." + h[5]).before(e)) }() }() : c("body").append(d[1]), a.layero = c("#" + h[0] + g), b.scrollbar || h.html.css("overflow", "hidden").attr("layer-full", g) }).auto(g), 2 == b.type && f.ie6 && a.layero.find("iframe").attr("src", i[0]), c(document).off("keydown", e.enter).on("keydown", e.enter), a.layero.on("keydown", function (a) { c(document).off("keydown", e.enter) }), 4 == b.type ? a.tips() : a.offset(), b.fix && d.on("resize", function () { a.offset(), (/^\d+%$/.test(b.area[0]) || /^\d+%$/.test(b.area[1])) && a.auto(g), 4 == b.type && a.tips() }), b.time <= 0 || setTimeout(function () { f.close(a.index) }, b.time), a.move().callback(), h.anim[b.shift] && a.layero.addClass(h.anim[b.shift]) } }, g.pt.auto = function (a) { function b(a) { a = g.find(a), a.height(i[1] - j - k - 2 * (0 | parseFloat(a.css("padding")))) } var e = this, f = e.config, g = c("#" + h[0] + a); "" === f.area[0] && f.maxWidth > 0 && (/MSIE 7/.test(navigator.userAgent) && f.btn && g.width(g.innerWidth()), g.outerWidth() > f.maxWidth && g.width(f.maxWidth)); var i = [g.innerWidth(), g.innerHeight()], j = g.find(h[1]).outerHeight() || 0, k = g.find("." + h[6]).outerHeight() || 0; switch (f.type) { case 2: b("iframe"); break; default: "" === f.area[1] ? f.fix && i[1] >= d.height() && (i[1] = d.height(), b("." + h[5])) : b("." + h[5]) } return e }, g.pt.offset = function () { var a = this, b = a.config, c = a.layero, e = [c.outerWidth(), c.outerHeight()], f = "object" == typeof b.offset; a.offsetTop = (d.height() - e[1]) / 2, a.offsetLeft = (d.width() - e[0]) / 2, f ? (a.offsetTop = b.offset[0], a.offsetLeft = b.offset[1] || a.offsetLeft) : "auto" !== b.offset && (a.offsetTop = b.offset, "rb" === b.offset && (a.offsetTop = d.height() - e[1], a.offsetLeft = d.width() - e[0])), b.fix || (a.offsetTop = /%$/.test(a.offsetTop) ? d.height() * parseFloat(a.offsetTop) / 100 : parseFloat(a.offsetTop), a.offsetLeft = /%$/.test(a.offsetLeft) ? d.width() * parseFloat(a.offsetLeft) / 100 : parseFloat(a.offsetLeft), a.offsetTop += d.scrollTop(), a.offsetLeft += d.scrollLeft()), c.css({ top: a.offsetTop, left: a.offsetLeft }) }, g.pt.tips = function () { var a = this, b = a.config, e = a.layero, f = [e.outerWidth(), e.outerHeight()], g = c(b.follow); g[0] || (g = c("body")); var i = { width: g.outerWidth(), height: g.outerHeight(), top: g.offset().top, left: g.offset().left }, j = e.find(".layui-layer-TipsG"), k = b.tips[0]; b.tips[1] || j.remove(), i.autoLeft = function () { i.left + f[0] - d.width() > 0 ? (i.tipLeft = i.left + i.width - f[0], j.css({ right: 12, left: "auto" })) : i.tipLeft = i.left }, i.where = [function () { i.autoLeft(), i.tipTop = i.top - f[1] - 10, j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", b.tips[1]) }, function () { i.tipLeft = i.left + i.width + 10, i.tipTop = i.top, j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", b.tips[1]) }, function () { i.autoLeft(), i.tipTop = i.top + i.height + 10, j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", b.tips[1]) }, function () { i.tipLeft = i.left - f[0] - 10, i.tipTop = i.top, j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", b.tips[1]) }], i.where[k - 1](), 1 === k ? i.top - (d.scrollTop() + f[1] + 16) < 0 && i.where[2]() : 2 === k ? d.width() - (i.left + i.width + f[0] + 16) > 0 || i.where[3]() : 3 === k ? i.top - d.scrollTop() + i.height + f[1] + 16 - d.height() > 0 && i.where[0]() : 4 === k && f[0] + 16 - i.left > 0 && i.where[1](), e.find("." + h[5]).css({ "background-color": b.tips[1], "padding-right": b.closeBtn ? "30px" : "" }), e.css({ left: i.tipLeft - (b.fix ? d.scrollLeft() : 0), top: i.tipTop - (b.fix ? d.scrollTop() : 0) }) }, g.pt.move = function () { var a = this, b = a.config, e = { setY: 0, moveLayer: function () { var a = e.layero, b = parseInt(a.css("margin-left")), c = parseInt(e.move.css("left")); 0 === b || (c -= b), "fixed" !== a.css("position") && (c -= a.parent().offset().left, e.setY = 0), a.css({ left: c, top: parseInt(e.move.css("top")) - e.setY }) } }, f = a.layero.find(b.move); return b.move && f.attr("move", "ok"), f.css({ cursor: b.move ? "move" : "auto" }), c(b.move).on("mousedown", function (a) { if (a.preventDefault(), "ok" === c(this).attr("move")) { e.ismove = !0, e.layero = c(this).parents("." + h[0]); var f = e.layero.offset().left, g = e.layero.offset().top, i = e.layero.outerWidth() - 6, j = e.layero.outerHeight() - 6; c("#layui-layer-moves")[0] || c("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + f + "px; top:" + g + "px; width:" + i + "px; height:" + j + 'px; z-index:2147483584"></div>'), e.move = c("#layui-layer-moves"), b.moveType && e.move.css({ visibility: "hidden" }), e.moveX = a.pageX - e.move.position().left, e.moveY = a.pageY - e.move.position().top, "fixed" !== e.layero.css("position") || (e.setY = d.scrollTop()) } }), c(document).mousemove(function (a) { if (e.ismove) { var c = a.pageX - e.moveX, f = a.pageY - e.moveY; if (a.preventDefault(), !b.moveOut) { e.setY = d.scrollTop(); var g = d.width() - e.move.outerWidth(), h = e.setY; 0 > c && (c = 0), c > g && (c = g), h > f && (f = h), f > d.height() - e.move.outerHeight() + e.setY && (f = d.height() - e.move.outerHeight() + e.setY) } e.move.css({ left: c, top: f }), b.moveType && e.moveLayer(), c = f = g = h = null } }).mouseup(function () { try { e.ismove && (e.moveLayer(), e.move.remove(), b.moveEnd && b.moveEnd()), e.ismove = !1 } catch (a) { e.ismove = !1 } }), a }, g.pt.callback = function () { function a() { var a = g.cancel && g.cancel(b.index, d); a === !1 || f.close(b.index) } var b = this, d = b.layero, g = b.config; b.openLayer(), g.success && (2 == g.type ? d.find("iframe").on("load", function () { g.success(d, b.index) }) : g.success(d, b.index)), f.ie6 && b.IE6(d), d.find("." + h[6]).children("a").on("click", function () { var a = c(this).index(); if (0 === a) g.yes ? g.yes(b.index, d) : g.btn1 ? g.btn1(b.index, d) : f.close(b.index); else { var e = g["btn" + (a + 1)] && g["btn" + (a + 1)](b.index, d); e === !1 || f.close(b.index) } }), d.find("." + h[7]).on("click", a), g.shadeClose && c("#layui-layer-shade" + b.index).on("click", function () { f.close(b.index) }), d.find(".layui-layer-min").on("click", function () { var a = g.min && g.min(d); a === !1 || f.min(b.index, g) }), d.find(".layui-layer-max").on("click", function () { c(this).hasClass("layui-layer-maxmin") ? (f.restore(b.index), g.restore && g.restore(d)) : (f.full(b.index, g), setTimeout(function () { g.full && g.full(d) }, 100)) }), g.end && (e.end[b.index] = g.end) }, e.reselect = function () { c.each(c("select"), function (a, b) { var d = c(this); d.parents("." + h[0])[0] || 1 == d.attr("layer") && c("." + h[0]).length < 1 && d.removeAttr("layer").show(), d = null }) }, g.pt.IE6 = function (a) { function b() { a.css({ top: f + (e.config.fix ? d.scrollTop() : 0) }) } var e = this, f = a.offset().top; b(), d.scroll(b), c("select").each(function (a, b) { var d = c(this); d.parents("." + h[0])[0] || "none" === d.css("display") || d.attr({ layer: "1" }).hide(), d = null }) }, g.pt.openLayer = function () { var a = this; f.zIndex = a.config.zIndex, f.setTop = function (a) { var b = function () { f.zIndex++, a.css("z-index", f.zIndex + 1) }; return f.zIndex = parseInt(a[0].style.zIndex), a.on("mousedown", b), f.zIndex } }, e.record = function (a) { var b = [a.width(), a.height(), a.position().top, a.position().left + parseFloat(a.css("margin-left"))]; a.find(".layui-layer-max").addClass("layui-layer-maxmin"), a.attr({ area: b }) }, e.rescollbar = function (a) { h.html.attr("layer-full") == a && (h.html[0].style.removeProperty ? h.html[0].style.removeProperty("overflow") : h.html[0].style.removeAttribute("overflow"), h.html.removeAttr("layer-full")) }, a.layer = f, f.getChildFrame = function (a, b) { return b = b || c("." + h[4]).attr("times"), c("#" + h[0] + b).find("iframe").contents().find(a) }, f.getFrameIndex = function (a) { return c("#" + a).parents("." + h[4]).attr("times") }, f.iframeAuto = function (a) { if (a) { var b = f.getChildFrame("html", a).outerHeight(), d = c("#" + h[0] + a), e = d.find(h[1]).outerHeight() || 0, g = d.find("." + h[6]).outerHeight() || 0; d.css({ height: b + e + g }), d.find("iframe").css({ height: b }) } }, f.iframeSrc = function (a, b) { c("#" + h[0] + a).find("iframe").attr("src", b) }, f.style = function (a, b) { var d = c("#" + h[0] + a), f = d.attr("type"), g = d.find(h[1]).outerHeight() || 0, i = d.find("." + h[6]).outerHeight() || 0; (f === e.type[1] || f === e.type[2]) && (d.css(b), f === e.type[2] && d.find("iframe").css({ height: parseFloat(b.height) - g - i })) }, f.min = function (a, b) { var d = c("#" + h[0] + a), g = d.find(h[1]).outerHeight() || 0; e.record(d), f.style(a, { width: 180, height: g, overflow: "hidden" }), d.find(".layui-layer-min").hide(), "page" === d.attr("type") && d.find(h[4]).hide(), e.rescollbar(a) }, f.restore = function (a) { var b = c("#" + h[0] + a), d = b.attr("area").split(","); b.attr("type"); f.style(a, { width: parseFloat(d[0]), height: parseFloat(d[1]), top: parseFloat(d[2]), left: parseFloat(d[3]), overflow: "visible" }), b.find(".layui-layer-max").removeClass("layui-layer-maxmin"), b.find(".layui-layer-min").show(), "page" === b.attr("type") && b.find(h[4]).show(), e.rescollbar(a) }, f.full = function (a) { var b, g = c("#" + h[0] + a); e.record(g), h.html.attr("layer-full") || h.html.css("overflow", "hidden").attr("layer-full", a), clearTimeout(b), b = setTimeout(function () { var b = "fixed" === g.css("position"); f.style(a, { top: b ? 0 : d.scrollTop(), left: b ? 0 : d.scrollLeft(), width: d.width(), height: d.height() }), g.find(".layui-layer-min").hide() }, 100) }, f.title = function (a, b) { var d = c("#" + h[0] + (b || f.index)).find(h[1]); d.html(a) }, f.close = function (a) { var b = c("#" + h[0] + a), d = b.attr("type"); if (b[0]) { if (d === e.type[1] && "object" === b.attr("conType")) { b.children(":not(." + h[5] + ")").remove(); for (var g = 0; 2 > g; g++) b.find(".layui-layer-wrap").unwrap().hide() } else { if (d === e.type[2]) try { var i = c("#" + h[4] + a)[0]; i.contentWindow.document.write(""), i.contentWindow.close(), b.find("." + h[5])[0].removeChild(i) } catch (j) { } b[0].innerHTML = "", b.remove() } c("#layui-layer-moves, #layui-layer-shade" + a).remove(), f.ie6 && e.reselect(), e.rescollbar(a), c(document).off("keydown", e.enter), "function" == typeof e.end[a] && e.end[a](), delete e.end[a] } }, f.closeAll = function (a) { c.each(c("." + h[0]), function () { var b = c(this), d = a ? b.attr("type") === a : 1; d && f.close(b.attr("times")), d = null }) }; var i = f.cache || {}, j = function (a) { return i.skin ? " " + i.skin + " " + i.skin + "-" + a : "" }; f.prompt = function (a, b) { a = a || {}, "function" == typeof a && (b = a); var d, e = 2 == a.formType ? '<textarea class="layui-layer-input">' + (a.value || "") + "</textarea>" : function () { return '<input type="' + (1 == a.formType ? "password" : "text") + '" class="layui-layer-input" value="' + (a.value || "") + '">' }(); return f.open(c.extend({ btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"], content: e, skin: "layui-layer-prompt" + j("prompt"), success: function (a) { d = a.find(".layui-layer-input"), d.focus() }, yes: function (c) { var e = d.val(); "" === e ? d.focus() : e.length > (a.maxlength || 500) ? f.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (a.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", d, { tips: 1 }) : b && b(e, c, d) } }, a)) }, f.tab = function (a) { a = a || {}; var b = a.tab || {}; return f.open(c.extend({ type: 1, skin: "layui-layer-tab" + j("tab"), title: function () { var a = b.length, c = 1, d = ""; if (a > 0) for (d = '<span class="layui-layer-tabnow">' + b[0].title + "</span>"; a > c; c++) d += "<span>" + b[c].title + "</span>"; return d }(), content: '<ul class="layui-layer-tabmain">' + function () { var a = b.length, c = 1, d = ""; if (a > 0) for (d = '<li class="layui-layer-tabli xubox_tab_layer">' + (b[0].content || "no content") + "</li>"; a > c; c++) d += '<li class="layui-layer-tabli">' + (b[c].content || "no  content") + "</li>"; return d }() + "</ul>", success: function (b) { var d = b.find(".layui-layer-title").children(), e = b.find(".layui-layer-tabmain").children(); d.on("mousedown", function (b) { b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0; var d = c(this), f = d.index(); d.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"), e.eq(f).show().siblings().hide(), "function" == typeof a.change && a.change(f) }) } }, a)) }, f.photos = function (b, d, e) { function g(a, b, c) { var d = new Image; return d.src = a, d.complete ? b(d) : (d.onload = function () { d.onload = null, b(d) }, void (d.onerror = function (a) { d.onerror = null, c(a) })) } var h = {}; if (b = b || {}, b.photos) { var i = b.photos.constructor === Object, k = i ? b.photos : {}, l = k.data || [], m = k.start || 0; if (h.imgIndex = (0 | m) + 1, b.img = b.img || "img", i) { if (0 === l.length) return f.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;") } else { var n = c(b.photos), o = function () { l = [], n.find(b.img).each(function (a) { var b = c(this); b.attr("layer-index", a), l.push({ alt: b.attr("alt"), pid: b.attr("layer-pid"), src: b.attr("layer-src") || b.attr("src"), thumb: b.attr("src") }) }) }; if (o(), 0 === l.length) return; if (d || n.on("click", b.img, function () { var a = c(this), d = a.attr("layer-index"); f.photos(c.extend(b, { photos: { start: d, data: l, tab: b.tab }, full: b.full }), !0), o() }), !d) return } h.imgprev = function (a) { h.imgIndex--, h.imgIndex < 1 && (h.imgIndex = l.length), h.tabimg(a) }, h.imgnext = function (a, b) { h.imgIndex++, h.imgIndex > l.length && (h.imgIndex = 1, b) || h.tabimg(a) }, h.keyup = function (a) { if (!h.end) { var b = a.keyCode; a.preventDefault(), 37 === b ? h.imgprev(!0) : 39 === b ? h.imgnext(!0) : 27 === b && f.close(h.index) } }, h.tabimg = function (a) { l.length <= 1 || (k.start = h.imgIndex - 1, f.close(h.index), f.photos(b, !0, a)) }, h.event = function () { h.bigimg.hover(function () { h.imgsee.show() }, function () { h.imgsee.hide() }), h.bigimg.find(".layui-layer-imgprev").on("click", function (a) { a.preventDefault(), h.imgprev() }), h.bigimg.find(".layui-layer-imgnext").on("click", function (a) { a.preventDefault(), h.imgnext() }), c(document).on("keyup", h.keyup) }, h.loadi = f.load(1, { shade: "shade" in b ? !1 : .9, scrollbar: !1 }), g(l[m].src, function (d) { f.close(h.loadi), h.index = f.open(c.extend({ type: 1, area: function () { var e = [d.width, d.height], f = [c(a).width() - 50, c(a).height() - 50]; return !b.full && e[0] > f[0] && (e[0] = f[0], e[1] = e[0] * d.height / d.width), [e[0] + "px", e[1] + "px"] }(), title: !1, shade: .9, shadeClose: !0, closeBtn: !1, move: ".layui-layer-phimg img", moveType: 1, scrollbar: !1, moveOut: !0, shift: 5 * Math.random() | 0, skin: "layui-layer-photos" + j("photos"), content: '<div class="layui-layer-phimg"><img src="' + l[m].src + '" alt="' + (l[m].alt || "") + '" layer-pid="' + l[m].pid + '"><div class="layui-layer-imgsee">' + (l.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : "") + '<div class="layui-layer-imgbar" style="display:' + (e ? "block" : "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (l[m].alt || "") + "</a><em>" + h.imgIndex + "/" + l.length + "</em></span></div></div></div>", success: function (a, c) { h.bigimg = a.find(".layui-layer-phimg"), h.imgsee = a.find(".layui-layer-imguide,.layui-layer-imgbar"), h.event(a), b.tab && b.tab(l[m], a) }, end: function () { h.end = !0, c(document).off("keyup", h.keyup) } }, b)) }, function () { f.close(h.loadi), f.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", { time: 3e4, btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"], yes: function () { l.length > 1 && h.imgnext(!0, !0) } }) }) } }, e.run = function () { c = jQuery, d = c(a), h.html = c("html"), f.open = function (a) { var b = new g(a); return b.index } }, "function" == typeof define ? define(function () { return e.run(), f }) : function () { e.run()/*,f.use("skin/layer.css")*/ }() }(window);
/*拖拽插件*/
var Drag = { left: 0, top: 0, currentX: 0, currentY: 0, flag: false }; var getCss = function (b, a) { return b.currentStyle ? b.currentStyle[a] : document.defaultView.getComputedStyle(b, false)[a] }; var startDrag = function (a, b) { if (getCss(b, "left") !== "auto") { Drag.left = getCss(b, "left") } if (getCss(b, "top") !== "auto") { Drag.top = getCss(b, "top") } a.onmousedown = function (c) { Drag.flag = true; if (!c) { c = window.event; a.onselectstart = function () { return false } } var d = c; Drag.currentX = d.clientX; Drag.currentY = d.clientY }; document.onmouseup = function () { Drag.flag = false; if (getCss(b, "left") !== "auto") { Drag.left = getCss(b, "left") } if (getCss(b, "top") !== "auto") { Drag.top = getCss(b, "top") } }; document.onmousemove = function (h) { var i = h ? h : window.event; if (Drag.flag) { var d = i.clientX, c = i.clientY; var g = d - Drag.currentX, f = c - Drag.currentY; b.style.left = parseInt(Drag.left) + g + "px"; b.style.top = parseInt(Drag.top) + f + "px" } } };

/*字符串原型扩展*/
String.prototype.getParams = function (key) {
    var temp = {}, arr = this.split('&'), len = arr.length, i = 0, s;
    for (; i < len; i++) {
        if (!arr[i]) { continue; }
        s = arr[i].split('=');
        temp[s[0]] = s[1];
    }
    return key ? temp[key] ? temp[key] : "" : temp;
}
String.prototype.htmlEncode = function () { 
    var str = this, s = "";
    if (str.length == 0) return "";
    s = str.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    //s = s.replace(/\n/g, "<br>");
    s = s.replace(/(&lt;)br(&gt;)/gi, function () {
        if (arguments.length > 1) {
           return '<br>';
        }
    });
    //s = s.replace(/&/g, "&amp;");
    return s;
}
String.prototype.htmlDecode = function () {
    var str = this, s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    //s = s.replace(/<br>/g, "\n");
    return s;
}
if (!window.JSON) {
    window.JSON = {
        parse: function (sJSON) { return eval('(' + sJSON + ')'); },
        stringify: (function () {
            var toString = Object.prototype.toString;
            var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
            var escMap = { '"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t' };
            var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
            var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function stringify(value) {
                if (value == null) {
                    return 'null';
                } else if (typeof value === 'number') {
                    return isFinite(value) ? value.toString() : 'null';
                } else if (typeof value === 'boolean') {
                    return value.toString();
                } else if (typeof value === 'object') {
                    if (typeof value.toJSON === 'function') {
                        return stringify(value.toJSON());
                    } else if (isArray(value)) {
                        var res = '[';
                        for (var i = 0; i < value.length; i++)
                            res += (i ? ', ' : '') + stringify(value[i]);
                        return res + ']';
                    } else if (toString.call(value) === '[object Object]') {
                        var tmp = [];
                        for (var k in value) {
                            if (value.hasOwnProperty(k))
                                tmp.push(stringify(k) + ': ' + stringify(value[k]));
                        }
                        return '{' + tmp.join(', ') + '}';
                    }
                }
                return '"' + value.toString().replace(escRE, escFunc) + '"';
            };
        })()
    };
}
/*数组原型方法扩展*/
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function(callback, thisArg) {
        var T, k;
        if (this == null) {
            throw new TypeError(' this is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(callback + ' is not a function');
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < len) {
            var kValue;
            if (k in O) {
                kValue = O[k];
                callback.call(T, kValue, k, O);
            }
            k++;
        }
    };
}
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement, fromIndex) {//Polyfill
        var k;
        if (this == null) {
            throw new TypeError('"this" is null or not defined');
        }
        var O = Object(this);
        var len = O.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = +fromIndex || 0;
        if (Math.abs(n) === Infinity) {
            n = 0;
        }
        if (n >= len) {
            return -1;
        }
        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        while (k < len) {
            if (k in O && O[k] === searchElement) {
                return k;
            }
            k++;
        }
        return -1;
    };
    Array.prototype.lastIndexOf = function (searchElement) {
        'use strict';
        if (this === void 0 || this === null) {
            throw new TypeError();
        }
        var n, k,
          t = Object(this),
          len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        n = len - 1;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) {
                n = 0;
            }
            else if (n != 0 && n != (1 / 0) && n != -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        for (k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n) ; k >= 0; k--) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}
Array.prototype.unique=function () {
    var temp, arrVal,
		array = this,
		arrClone = array.concat(),//克隆数组
		typeArr = {//数组原型
		    'obj': '[object Object]',
		    'fun': '[object Function]',
		    'arr': '[object Array]',
		    'num': '[object Number]'
		},
		ent = /(\u3000|\s|\t)*(\n)+(\u3000|\s|\t)*/gi;//空白字符正则

    //把数组中的object和function转换为字符串形式
    for (var i = arrClone.length; i--;) {
        arrVal = arrClone[i];
        temp = Object.prototype.toString.call(arrVal);

        if (temp == typeArr['num'] && arrVal.toString() == 'NaN') {
            arrClone[i] = arrVal.toString();
        }

        if (temp == typeArr['obj']) {
            arrClone[i] = JSON.stringify(arrVal);
        }

        if (temp == typeArr['fun']) {
            arrClone[i] = arrVal.toString().replace(ent, '');
        }
    }

    //去重关键步骤
    for (var i = arrClone.length; i--;) {
        arrVal = arrClone[i];
        temp = Object.prototype.toString.call(arrVal);

        if (temp == typeArr['arr']) arrVal.unique();//如果数组中有数组，则递归
        if (arrClone.indexOf(arrVal) != arrClone.lastIndexOf(arrVal)) {//如果有重复的，则去重
            array.splice(i, 1);
            arrClone.splice(i, 1);
        }
        else {
            if (Object.prototype.toString.call(array[i]) != temp) {
                //检查现在数组和原始数组的值类型是否相同，如果不同则用原数组中的替换，原因是原数组经过了字符串变换
                arrClone[i] = array[i];
            }
        }
    }
    return arrClone;
}
/* 
*日期格式化  
*格式 YYYY/yyyy/YY/yy 表示年份  
*MM/M 月份  
*W/w 星期  
*dd/DD/d/D 日期  
*hh/HH/h/H 时间  
*mm/m 分钟  
*ss/SS/s/S 秒 
*pretty 返回优化的人性化时间
*/
Date.prototype.format = function (formatStr,pretty,serveTime) {
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];

    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

    str = str.replace(/MM/, (this.getMonth() + 1) > 9 ? (this.getMonth() + 1).toString() : '0' + (this.getMonth() + 1));
    str = str.replace(/M/g, (this.getMonth() + 1));

    str = str.replace(/w|W/g, Week[this.getDay()]);

    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());

    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
    str = str.replace(/h|H/g, this.getHours());
    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
    str = str.replace(/m/g, this.getMinutes());

    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
    str = str.replace(/s|S/g, this.getSeconds());

    if (pretty == "pretty") {//人性化时间
        var now = serveTime || new Date();
        var differ = (now - this) / 1000;
        var indexOfH = formatStr.indexOf("h") == -1 ? formatStr.indexOf("H") : formatStr.indexOf("h");
        if (now.getDate() == this.getDate() && now.getMonth() == this.getMonth()) {
            str = "今天";
            if (indexOfH > -1) {//有小时则可以显示
                if (differ < 60 && differ > 0) {
                    str = "刚刚";
                } else if (differ >= 60 && differ < 3600) {
                    str = parseInt(differ / 60) + "分钟前";
                } else if (differ >= 3600 && parseInt(differ / 3600) <= now.getHours()) {
                    str = parseInt(differ / 3600) + "小时前";
                } else if (-differ >= 60 && -differ < 3600) {
                    str = -parseInt(differ / 60) + "分钟后";
                } else if (-differ >= 3600 && -parseInt(differ / 3600) <= (24 - now.getHours())) {
                    str = -parseInt(differ / 3600) + "小时后";
                }
            }
        } else if (now.getDate() - this.getDate() == 1 && now.getMonth() == this.getMonth()) {
            str = "昨天";
            if (indexOfH > -1) {
                str += this.format(formatStr.substr(indexOfH));
            }
        } else if (now.getDate() - this.getDate() == 2 && now.getMonth() == this.getMonth()) {
            str = "前天";
            if (indexOfH > -1) {
                str += this.format(formatStr.substr(indexOfH));
            }
        } else if (now.getDate() - this.getDate() == -1 && now.getMonth() == this.getMonth()) {
            str = "明天";
            if (indexOfH > -1) {
                str += this.format(formatStr.substr(indexOfH));
            }
        } else if (now.getDate() - this.getDate() == -2 && now.getMonth() == this.getMonth()) {
            str = "后天";
            if (indexOfH > -1) {
                str += this.format(formatStr.substr(indexOfH));
            }
        } else if (this.getFullYear() == now.getFullYear()) {
            if (formatStr.indexOf("M")>-1) {
                formatStr = formatStr.substr(formatStr.indexOf("M"));
                str = this.format(formatStr);
            }
        } else if (this.getFullYear() - now.getFullYear() == 1) {
            str = "明年";
            if (formatStr.indexOf("M") > -1) {
                formatStr = formatStr.substr(formatStr.indexOf("M"));
                if (now.getMonth() == 11) {//12月不显示明年
                    str = this.format(formatStr);
                } else {
                    str += this.format(formatStr);
                }
            }
        }else if (this.getFullYear() - now.getFullYear() == -1) {
            str = "去年";
            if (formatStr.indexOf("M") > -1) {
                formatStr = formatStr.substr(formatStr.indexOf("M"));
                str += this.format(formatStr);
            }
        }
    }
    return str;
}
Date.prototype.addDays = function (num) {
    var t = new Date(this.setDate(this.getDate() + num));
    var newDate = new Date(t.format("yyyy/MM/dd"));
    this.setDate(t.getDate() - num);
    return newDate;
}
/*Cookie*/
var Cookie = function (domain, path) {
    "use strict";
    this.domain = domain ? domain : window.location.host.indexOf("localhost") != -1 ? "localhost" : "9ji.com";
    this.path = path ? path : "/";
    this.set = function (name, value, time, callback) {/*time为小时*/
        var expires = new Date(new Date().getTime() + (time || 24) * 3600 * 1000);
        if (time == 0) {
            expires = null;
        }
        document.cookie = name + "=" + encodeURIComponent(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + "; path=" + this.path + ";domain=" + this.domain;
        if (typeof callback === "function")
            callback.call(this);
    };
    this.get = function (name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) {
            try {
                return decodeURIComponent(arr[2]);
            }
            catch (err) {
                return unescape(arr[2]);
            }
        }
        return null;
    };
    this.remove = function (name, callback) {
        document.cookie = name + "=" + ";path=" + this.path + ";domain=" + this.domain + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
        document.cookie = name + "=" + ";path=" + this.path + ";domain=" + ";expires=Fri, 02-Jan-1970 00:00:00 GMT";
        if (typeof callback === "function") {
            if (!this.get(name)) {
                callback.call(this, { status: 1, msg: "删除成功！" });
            } else {
                callback.call(this, { status: 0, msg: "删除失败！" });
            }
        }
    }
};
var Platform = {
    ua: window.navigator.userAgent.toLowerCase(),
    isMobile:/mobile/.test(window.navigator.userAgent.toLowerCase()),
    system: function () {/*window x,android x.x,mac,ios x.x.x*/
        var s, u = this.ua;
        if (/windows nt/.test(u)) {
            s = "windows";
            /windows nt 10.0/.test(u) && (s += " 10");
            /windows nt 6.3/.test(u)  && (s += " 8.1");
            /windows nt 6.2/.test(u) && (s += " 8");
            /windows nt 6.1/.test(u)  && (s += " 7");
            /windows nt 5.1"/.test(u) && (s += " xp");
        };
        if (/android/.test(u)) {
            s = "android " + u.substr(u.indexOf('android') + 8, 3);
        };
        /mac/.test(u) && (s = "mac os");
        if (/iphone/.test(u) || /ipad/.test(u)) {
            s = "ios ";
            /iphone/.test(u) &&(s += u.match(/iphone os (\w+) like/)[1].replace(/_/g, "."));
            /ipad/.test(u)&&(s += u.match(/cpu os (\w+) like/)[1].replace(/_/g, "."));
        }
        return s;
    },
    browser: {
        name: function () {/*ie,ios webview,chrome,firefox,safari,android default,uc,wechat*/
            var n, u = Platform.ua, s = Platform.system();
            (/msie/.test(u) || /trident/.test(u)) && (n = "ie");
            s.indexOf("ios") > -1&&(n = "ios webview");
            if (u.indexOf("version") > -1 && (u.indexOf("version") < u.indexOf("safari"))) {
                n = "safari";
                Platform.system().indexOf("android") > -1 && (n = "android default");
            };
            (/chrome/.test(u) || /crios/.test(u)) && (n = "chrome");
            (/firefox/.test(u) || /fxios/.test(u)) && (n = "firefox");
            /ucbrowser/.test(u) && (n = "uc");
            /micromessenger/.test(u) && (n = "wechat");
            return n;
        },
        version: function () {
            var v, u = Platform.ua, b = Platform.browser.name();
            if (b == "ie") {
                v = u.match(/msie (\d.+)/);
                /rv:11/.test(u) && (v = 11);
            }
            b == "ios webview" && (v = u.match(/mobile\/(\w+)/)[1]);
            if (b == "chrome") {
                /chrome/.test(u) && (v = u.match(/chrome\/(\d+)/)[1]);
                /crios/.test(u)&&(v=u.match(/crios\/(\d+)/)[1]);
            }
            if (b == "firefox") {
                /firefox/.test(u) && (v = u.match(/firefox\/(\d+)/)[1]);
                /fxios/.test(u) && (v = u.match(/fxios\/(\d+)/)[1]);
            }
            (b == "safari" || b == "android default") && (v = u.match(/version\/(\d+\.\d+)/)[1]);
            b == "uc" && (v = u.match(/ucbrowser\/(\d+\.\d+)/)[1]);
            b == "wechat" && (v = u.match(/micromessenger\/(\d+\.\d+)/)[1]);
            return v;
        },
        core: function () {
            var c, u = Platform.ua;
            /trident/.test(u) && (c = "trident");
            /applewebkit/.test(u) && (c = "webkit");
            /gecko\//.test(u) && (c = "gecko");
            return c;
        }
    }
};
/*url信息，包括url，get参数，hash*/
var Url = {
    href: function () {
        return window.location.href;
    },
    params: function (key) {
        var s = window.location.href.split('?');
        if (s.length > 2) {
            window.console&&console.error('参数中不能包含两个问号');
            return {}
        }
        if (s.length == 2) {
            return s[1].getParams(key)
        }
        if (key) {
            return ""
        }
        return {}
    },
    hash: function (key) {
        if (window.location.hash.indexOf("=") < 0) {
            return window.location.hash.replace("#", '');
        }
        return window.location.hash.replace(/^\#/, '').getParams(key);
    },
    hashChange: function (callback) {
        if (typeof callback !== "function") { return; }
        if (Url.hash()) {
            callback.call(this, Url.hash());
        }
        try{
            window.addEventListener("hashchange", function () {
                callback.call(this, Url.hash());
            });
        }catch(e){
            window.attachEvent("onhashchange", function () {
                callback.call(this, Url.hash());
            });
        }
    }
};
/*验证*/
var Validate = {
    mobile: function (num) {//验证手机
        return /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(num);
    },
    email: function (email) {//验证邮箱
        return /^([a-zA-Z0-9]+[_|\_|-|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email);
    },
    number: function (num) {//验证数字
        return /^[0-9]*$/.test(num);
    }
};
/*主站控件*/
var Jiuji = {
    /*用户信息*/
    user: {
        callbackArr: [],
        loading: false,
        temp: null,
        getInfo: function (callback) {//获取用户信息
            var self = this;
            if (this.temp == null) {
                if (this.loading) {
                    this.callbackArr.push(callback)
                    return;
                }
                this.loading = true;
                $.ajax({
                    url: "/api/data.ashx",
                    data: { "act": "user" },
                    type: "get",
                    dataType: "json",
                    success: function (res) {
                        if (res.status == 5 && window.location.href.indexOf("Changepassword")<0){
                            window.location.href = "/Changepassword.aspx"; 
                        }
                        Jiuji.user.temp = res;
                        if (typeof callback === "function" && callback) {
                            callback.call(this, res);
                            if (self.callbackArr.length > 0) {
                                self.callbackArr.forEach(function (c) {
                                    c(res)
                                })
                            }
                        }
                        self.loading = false;
                    }
                });
            } else {
                if (typeof callback === "function") {
                    callback.call(this, this.temp);
                }
            }
        },
        isLogin: function () {//是否登录
            var cookie = new Cookie();
            if ((!cookie.get("signTicket") && !cookie.get("Authorization")) || (cookie.get("Authorization") && cookie.get("Authorization").length < 5)) { // 小于5是为了兼容安卓APP的逻辑错误
                return false;
            }
            return true;
        },
        login: {//登录组件
            callTemp: null,
            layerIndex: null,
            show: function (callback) {
                this.layerIndex = layer.open({
                    type: 2,
                    title: '用户登录',
                    area: ['350px', '484px'], //宽高
                    content: ['https://www.9ji.com/acount/login.aspx?act=prop', 'no']
                });
                layer.style(this.layerIndex, { 'border-radius': 'none', 'min-height': '354px' });
                this.callTemp = callback;
            },
            callback: function () {
                if (!this.callTemp) {
                    window.location.reload();
                    return;
                }
                this.callTemp.call(this);
                layer.close(this.layerIndex);
            }
        },
        logOut: function () {//退出登录
            $.ajax({
                url: '/api/common.aspx',
                data: { 'act': 'logout' },
                type: 'post',
                dataType: "json",
                success: function (res) {
                    if (res.status == 1) {
                        window.location.reload();
                    }
                }
            });
        }
    },
    /*发送店铺、自提点信息到手机*/
    sendStoreInfo: function (id, type) {/*type:1店铺，2自提点*/
        layerMsg = layer.open({
            type: 2,
            title: '免费短信发送',
            area: ['370px', '270px'], //宽高
            content: ['/Store/sendStoreInfo.aspx?ziid=' + id + '&type=' + type + '', 'no']
        });
        layer.style(layerMsg, { 'border-radius': 'none' });
    },
    city: function () {
        var nowCity = new Cookie().get("cityid") || null, reqRul = '/web/api/area/allAreaTree/v1?optimize=1';
        if (nowCity && String(nowCity).length != 6) {
            nowCity = null;
        }
        var args = arguments; argsL = args.length;
        if (argsL === 0) {//如果不传任何参数直接返回cityid
            return nowCity;
        }
        var callback = args[0];
        var onlyHasShopFlag = false;
        if (argsL > 1 && typeof args[0] !== "function") {
            args[0] ? nowCity = args[0] : nowCity ? (nowCity = nowCity) : nowCity = 530102;
            callback = args[1];
            if ((args[argsL - 1] !== undefined) && args[argsL - 1]) {
                if (typeof (args[argsL - 1]) === "boolean") {
                    reqRul = '/web/api/area/allAreaTree/v1?optimize=0';
                } else if (typeof (args[argsL - 1]) === "string" && args[argsL - 1] === "onlyHasShop") {
                    // 若在方法最后传入字符串"onlyHasShop"字符串，则只返回有店铺的地址
                    onlyHasShopFlag = true;
                    if ((args[argsL - 2] !== undefined) && typeof (args[argsL - 2]) === "boolean" && args[argsL - 2]) {
                        reqRul = '/web/api/area/allAreaTree/v1?optimize=0';
                        onlyHasShopFlag = false; //当reqRul为此地址时，所有返回的店铺hasshop都是false
                    }
                }                
            }
        }
        if (!nowCity) {
            callback.call(this, null);
            return;
        }
        var temp = {
            provinceId: nowCity.toString().substr(0, 2),//省id
            cityId: nowCity.toString().substr(0, 4),//市id
            countyId: nowCity//区、县id
        };
        var onlyHasShopData = []; //有店铺的所有数据
        $.ajax({
            url: reqRul,
            dataType: "json",
            success: function (res) {
                if (res.code != 0) { layer.msg(res.userMsg); return; }
                var data = res.data;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].id == temp.provinceId) {
                        temp.provinceName = data[i].name;
                        for (var j = 0; j < data[i].children.length; j++) {
                            if (data[i].children[j].id == temp.cityId) {
                                temp.cityName = data[i].children[j].name;
                                for (var k = 0; k < data[i].children[j].children.length; k++) {
                                    if (data[i].children[j].children[k].id == temp.countyId) {
                                        temp.countyName = data[i].children[j].children[k].name;
                                        temp.hasshop = data[i].children[j].children[k].hasShop;
                                        /*if (typeof callback === "function") {
                                            callback.call(this, temp, data);
                                        }*/
                                    }
                                }
                            }
                        }
                    }
                    if (onlyHasShopFlag) {
                        if (data[i].hasShop) {
                            onlyHasShopData.push(data[i]);
                            var provinceObj = onlyHasShopData[onlyHasShopData.length - 1];
                            var city = [];
                            for (var a = 0; a < provinceObj.children.length; a++) {
                                var county = [];
                                if (provinceObj.children[a].hasShop) {
                                    // 市级有店铺
                                    city.push(provinceObj.children[a]);
                                    for (var b = 0; b < provinceObj.children[a].children.length; b++) {
                                        //县级有店铺
                                        if (provinceObj.children[a].children[b].hasShop) {
                                            county.push(provinceObj.children[a].children[b]);
                                        }
                                    }
                                    city[city.length - 1].children = county;
                                }
                            }
                            provinceObj.children = city;
                        }
                    }
                }
                if (typeof callback === "function") {
                    if (onlyHasShopFlag) {
                        callback.call(this, temp, onlyHasShopData);
                    } else {
                        callback.call(this, temp, data);
                    }                    
                }
            }
        });
    },
    addCart: function (ppid,callback) {//两个参数都必传，批量添加ppid逗号【,】分隔
        layer.load();
        $.ajax({
            url: "/api/common.aspx?act=addCart",
            data:{ppid:ppid},
            dataType: "json",
            success: function (res) {
                layer.closeAll();
                if (res.status == 1) {
                    typeof callback=="function"&&callback.call(this);
                } else {
                    layer.msg("加入购物车失败，请重试");
                }
            }
        });
    },
    /*在线客服*/
    listen : null, //监听后台信息
    chat: function (type) {
        if (!Jiuji.user.isLogin()) {
            Jiuji.user.login.show(function () {
                Jiuji.chat("show");
            });
            return;
        }
        var chatCookie = new Cookie();
        var isChat = document.getElementById("jiujiChat");
        chatCookie.set("chatShow", true, "1");//聊天框是否显示
        chatCookie.set("chatNumber", 0, "1");//聊天信息数量
        if (isChat!=null) {
            if (type == "show") {
                document.getElementById("jiujiChat").style.display = "block";
                window.clearInterval(Jiuji.listen);
                document.getElementById("chatNum").style.display = "none";
                //document.documentElement.style.overflow = 'hidden';
            }
            if (type == "hide") {
                document.getElementById("jiujiChat").style.display = "none";
                //document.documentElement.style.overflow = 'auto';
                chatCookie.set("chatShow", false, "1");
                var getNumber = function () { //后台信息数
                    var len = chatCookie.get("chatNumber");
                    var chatNum = document.getElementById("chatNum");
                    if (len > 0) {
                        chatNum.innerText = len;
                        chatNum.style.display = "block";
                    } else {
                        chatNum.style.display = "none";
                    }
                }
                Jiuji.listen = setInterval(getNumber, 3000);
            }
        } else {
            var oLeft = (window.innerWidth - 830) / 2
            var oTop = (window.innerHeight - 550) / 2
            $("body").append('<div class="jiujiChat fixed" style="left:'+oLeft+'px;top:'+oTop+'px;box-shadow:none" id="jiujiChat"><div class="relative"><div style="width:95%; height:40px; position:absolute; top:2px; z-index:1000; cursor:move;" id="Chatbar"></div>\
                                <iframe src="//chat.9ji.com/index.aspx?SourceUrl=' + location.href + '" width="830" height="550"></iframe>\
                              <div class="closeChat" onclick="Jiuji.chat(\'hide\')" title="关闭窗口不影响消息接收"></div></div></div>');
            //启动拖拽插件
            /* var oBox = document.getElementById("jiujiChat");
            var oBar = document.getElementById("Chatbar");
            startDrag(oBar, oBox); */
            
            var isDragging = false
            var supportTouch = 'ontouchstart' in window

            var draggable = function (element, options) {
                var moveFn = function (event) {
                    if (options.drag) {
                        options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
                    }
                }
                var endFn = function (event) {
                    if (!supportTouch) {
                        document.removeEventListener('mousemove', moveFn)
                        document.removeEventListener('mouseup', endFn)
                    }
                    document.onselectstart = null
                    document.ondragstart = null

                    isDragging = false

                    if (options.end) {
                        options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
                    }
                }

                element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function (event) {
                    if (isDragging) return
                    event.preventDefault()
                    document.onselectstart = function () { return false }
                    document.ondragstart = function () { return false }

                    if (!supportTouch) {
                        document.addEventListener('mousemove', moveFn)
                        document.addEventListener('mouseup', endFn)
                    }
                    isDragging = true

                    if (options.start) {
                        options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event)
                    }
                })

                if (supportTouch) {
                    element.addEventListener('touchmove', moveFn)
                    element.addEventListener('touchend', endFn)
                    element.addEventListener('touchcancel', endFn)
                }
            }
            var chatBar = document.getElementById("Chatbar");
            var chatBox = document.getElementById("jiujiChat");
            var x = 0
            var y = 0
            var originX = 0
            var originY = 0
            draggable(chatBar, {
              start: function(e) {
                chatBar.style.width = 830 + 'px';
                chatBar.style.height = 550 + 'px';
                x = e.pageX;
                y = e.pageY;
                originX = chatBox.getBoundingClientRect().left;
                originY = chatBox.getBoundingClientRect().top;
              },
              drag: function(e) {
                var xChange = e.pageX - x;
                var yChange = e.pageY - y;
                chatBox.style.left = originX + xChange + 'px';
                chatBox.style.top = originY + yChange + 'px';
              },
              end: function(e) {
                chatBar.style.width = '95%';
                chatBar.style.height = 40 + 'px';
              }
            })
        }
    },
    editAddress: function (id) {
        this.editAddressObject = layer.open({
            type: 2,
            title: (id == 0?'新增':'编辑') + '收货地址',
            shadeClose: true,
            shade: 0.6,
            area: ['640px', '450px'],
            content: 'https://www.9ji.com/myCenter/editAddress.aspx?id=' + id
        })
    },
    closeEditAddress: function () {
        layer.close(this.editAddressObject)
    }
}
/*Jquery监听事件，操作dom常用组件*/
; !function ($) {
    "use strict";
    $.fn.tabs = function (options) {//标签切换，淡入淡出幻灯片
        var defaults = {
            nav: "",//鼠标事件选择器
            item: "",//切换项
            speed: 0,//淡入淡出速度，标签切换给0
            navcur: "cur",//当前导航器选中事件
            timer: 0,//定时播放，0则不自动播放
            trigger: "click",
            callback: $.noop,
            delay: 0
        };
        var params = $.extend({}, defaults, options || {});
        this.each(function () {
            var curi = 0, autoPlay, a = $(this).find(params.nav), b = $(this).find(params.item);
            var play = function () {
                if (curi >= a.length) { curi = 0 }
                a.eq(curi).addClass(params.navcur).siblings().removeClass(params.navcur);
                b.eq(curi).fadeIn(params.speed).siblings().fadeOut(params.speed);
                params.callback.call(this, curi);
                curi++;
            }
            play();
            a.on(params.trigger, function () {
                curi = $(this).index();
                play();
            });
            
            if (params.timer) {
                var timeId = null;
                var autoPlay;
                var timeId=setTimeout(function () {
                    autoPlay = setInterval(play, params.timer);
                }, params.delay > params.timer ? (params.delay - params.timer) : params.delay);
                
                a.hover(function () { clearInterval(autoPlay); clearTimeout(timeId); }, function () { autoPlay = setInterval(play, params.timer); clearTimeout(timeId); });
                b.hover(function () { clearInterval(autoPlay); clearTimeout(timeId); }, function () { autoPlay = setInterval(play, params.timer); clearTimeout(timeId); });
            }
        });
    };

    $.fn.hoverShow = function (cur, shower, callback1, callback2) {//移入显示移出隐藏
        var showTimer=null, a = $(this), b = $(shower);
        $(document).on("mouseenter", a.selector, function () {
            a.addClass(cur);
            clearTimeout(showTimer);
            b.show();
            if (typeof callback1 === "function") {
                callback1.call(this, a.selector);
            }
        });
        $(document).on("mouseleave", a.selector, function () {
            showTimer = setTimeout(function () {
                b.hide();
                a.removeClass(cur);
                if (typeof callback2 === "function") {
                    callback2.call();
                }
            }, 500)
        });
        $(document).on("mouseenter", shower, function () {
            clearTimeout(showTimer);
        });
        $(document).on("mouseleave", shower, function () {
            b.hide();
            a.removeClass(cur);
            if (typeof callback2 === "function") {
                callback2.call();
            }
        });

        /*a.hover(function () {
            $(this).addClass(cur);
            clearInterval(showTimer);
            b.show();
            if (typeof callback1 === "function") {
                callback1.call();
            }
        }, function () {
            showTimer = setInterval(function () {
                b.hide();
                a.removeClass(cur);
                if (typeof callback2 === "function") {
                    callback2.call();
                }
            }, 500)
        });
        b.hover(function () {
            clearInterval(showTimer);
        }, function () {
            $(this).hide();
            a.removeClass(cur);
            if (typeof callback2 === "function") {
                callback2.call();
            }
        });*/
    };
    $.fn.backToTop = function (options) {//回到顶部
        $(this).hide().click(function () {
            $("body, html").animate({ scrollTop: "0px" });
        });
        var $this = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $this.fadeIn();
            }
            else {
                $this.fadeOut();
            }
        });
        return this;
    };
    $.fn.smartFloat = function () {//滚动停留在顶部
        var position = function (element) {
            var top = element.position().top, pos = element.css("position");
            $(window).scroll(function () {
                var scrolls = $(window).scrollTop();
                if (scrolls > top) {
                    if (window.XMLHttpRequest) {
                        element.css({
                            position: "fixed",
                            top: 0
                        });
                    } else {
                        element.css({
                            top: scrolls
                        });
                    }
                } else {
                    element.css({
                        position: pos,
                        top: top
                    });
                }
            });
        };
        return $(this).each(function () {
            position($(this));
        });
    };
    $.fn.lazyLoad = function (options) {//延迟加载，可以加载html
        var defaults = {
            attr: "data-url",
            container: $(window),
            callback: $.noop
        };
        var params = $.extend({}, defaults, options || {});
        params.cache = [];
        $(this).each(function () {
            var node = this.nodeName.toLowerCase(), url = $(this).attr(params["attr"]);
            var data = {
                obj: $(this),
                tag: node,
                url: url
            };
            params.cache.push(data);
        });
        var callback = function (call) {
            if ($.isFunction(params.callback)) {
                params.callback.call(call.get(0));
            }
        };
        //动态显示数据
        var loading = function () {
            var contop;
            var contHeight = params.container.height();
            if (params.container.get(0) === window) {
                contop = $(window).scrollTop();
            } else {
                contop = params.container.offset().top;
            }
            $.each(params.cache, function (i, data) {
                var o = data.obj, tag = data.tag, url = data.url, post, posb;
                if (o) {
                    post = o.offset().top - contop, posb = post + o.height();
                    if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
                        if (url) {
                            //在浏览器窗口内
                            if (tag === "img") {
                                //图片，改变src
                                callback(o.attr("src", url));
                            } else {
                                o.load(url, {}, function () {
                                    callback(o);
                                });
                            }
                        } else {
                            // 无地址，直接触发回调
                            callback(o);
                        }
                        data.obj = null;
                    }
                }
            });
        };
        loading();
        params.container.bind("scroll", loading);
    };
    $.fn.reSend = function (options) {//倒计时重新发送，只能用button标签
        var defaults = {
            time: 30,//倒计时时间，秒
            style: "cur"//倒计时的样式名
        };
        var params = $.extend({}, defaults, options || {});
        var tag = $(this), s = params.time;
        tag.addClass(params.style).attr("disabled", "disabled");
        var sendTimer;
        sendTimer = setInterval(function () {
            s--;
            if (s >= 0) {
                tag.html(s + "秒后重新发送");
            } else {
                clearInterval(sendTimer);
                tag.removeClass(params.style).removeAttr("disabled").html("重新发送");
            }
        }, 1000);
    };
    $.fn.mark = function () {//arguments传入z-index或者"hide"
        var div = $("<div class='mark'></div>");
        div.css({ position: "fixed", width: "100%", height: "100%", top: 0, left: 0, background: "#000", "filter": "alpha(opacity=30)", opacity: "0.3", zIndex: 98 });
        if (typeof arguments[0] === "number") {
            div.css({ zIndex: arguments[0] });
        }
        if (arguments[0] == "hide") {
            $(".mark").eq($(".mark").length - 1).remove();
            return;
        }
        this.append(div);
    };
    $.fn.getPrice = function (options) {
        var defaults = {
            prefix: "￥",//价格前缀
            tofixed: true,//是否保留2位小数
            attr:"data-ppid",
            callback: $.noop()
        };
        var params = $.extend({}, defaults, options || {});
        var ppids = [], the = $(this);
        the.each(function () {
            var ppid = $(this).attr(params.attr);
            if (ppid) {
                ppids.push(ppid);
            }
        });
        ppids = ppids.unique();
        ppids = ppids.join(",");
        var userId = "";
        var basePath = "//img2.ch999img.com";
        Jiuji.user.getInfo(function (res) {
            if (res.status == 1) {
                userId = res.UserId;
            }
            $.ajax({
                url: "//price.ch999img.com/DataAPI.ashx",
                data: { act: "g-price-bat", "ppid": ppids, "cityid": Jiuji.city(), "userId": userId },
                dataType: "jsonp",
                success: function (res) {
                    the.each(function () {
                        var ppid = $(this).attr("data-ppid");
                        for (var i = 0; i < res.length; i++) {
                            if (ppid == res[i].ppid) {
                                if (parseInt(res[i].price) == 1234567) {
                                    $(this).html('暂无报价');
                                    break;
                                }
                                if (params.tofixed) {
                                    if (res[i].isVip2 && $(this).attr("data-showvippic") == "1") {
                                        $(this).attr("data-isvip2", "1");
                                        $(this).html(params.prefix + parseFloat(res[i].price).toFixed(2) + ' <i class="vip2pic_list"></i>');
                                    } else {
                                        $(this).html(params.prefix + parseFloat(res[i].price).toFixed(2));
                                    }
                                } else {
                                    if (res[i].isVip2 && $(this).attr("data-showvippic") == "1") {
                                        $(this).attr("data-isvip2", "1");
                                        $(this).html(params.prefix + parseInt(res[i].price) + ' <i class="vip2pic_list"></i>');
                                    } else {
                                        $(this).html(params.prefix + parseInt(res[i].price));
                                    }
                                }
                            }
                        }
                    });
                    if (typeof params.callback === "function") {
                        params.callback.call(this, res);
                    }
                }
            });
        });
    };
    $.fn.changeCity = function () {//argument1-定位ID[可不传],argument2-回调，argument3-层级z-index；必须传回调函数才能传z-index；argument4-只显示有店铺地址
        var args = arguments, argsL = args.length, local = null, callback = args[0], zIndex = args[1], first = false, uncompreser = false, isAll = "";
        var onlyHasShopFlag = false;
        if (typeof args[1] !== "number") {
            if (typeof args[1] === "string" && args[1] === "uncompress") {
                isAll = args[1];
                if (args[2] === "onlyHasShop") {
                    onlyHasShopFlag = true;
                } else {
                    zIndex = args[2];
                }                
            } else if (typeof args[1] === "string") {
                if (args[1] === "onlyHasShop") {
                    onlyHasShopFlag = true;
                } else {
                    first = new Cookie().get("cityid") ? false : true;
                    zIndex = args[2];
                }
                
            }
        }
        
        if (argsL >= 1) {
            if (typeof args[0] !== "function") {
                if (typeof args[0] === 'string' && args[0] === 'onlyHasShop') {
                    onlyHasShopFlag = true;
                } else {
                    local = args[0];
                }

                if (typeof args[1] !== "function") {
                    first = new Cookie().get("cityid") ? false : true;
                } else {
                    callback = args[1];
                }
                if (typeof args[2] !== "number") {
                    if (typeof args[2] === "string") {
                        if (args[2] === "uncompress") {
                            isAll = args[2];
                            zIndex = args[3];
                        } else if (args[2] === "onlyHasShop") {
                            onlyHasShopFlag = true;
                        }

                    } else if (typeof args[1] === "string") {
                        if (args[1] === "onlyHasShop") {
                            onlyHasShopFlag = true;
                        } else {
                            first = new Cookie().get("cityid") ? false : true;
                            zIndex = args[2];
                        }
                    }
                }
            } else {
                var index = 0;
                for (var i = 0; i < args.length; i++) {
                    if (typeof args[i] === 'string' && args[i] === 'onlyHasShop') {
                        onlyHasShopFlag = true;
                        index = i;
                    }
                }
                if (typeof args[index - 1] === "string" && args[index - 1] === "uncompress") {
                    isAll = args[index - 1];
                    if (typeof args[index - 2] === "number" && args[index - 2]) {
                    	zIndex = args[index - 2];
                    }
                }else if (typeof args[index - 1] === "number" && args[index - 1]) {
                	zIndex = args[index - 1];
                	if (typeof args[index - 2] === "string" && args[index - 2] === "uncompress") {
                    	isAll = args[index - 2];
                    }
                }
            }
        }
        uncompreser = isAll === "uncompress" ? true : false;
        if ($(".city-wrap").length == 0) {
            $("body").append('<div class="city-wrap hide">\
                <p class="loading">loading...</p>\
                <script type="text/html" id="J-city-tmpl">\
                        <a href="javascript:;" class="close"></a>\
                        {{if guess}}\
                        <p class="city-guess">小九猜你在：<a href="javascript:;" class="city-item" data-id="{{now.countyId}}" data-name="{{now.countyName}}">{{now.countyName}}</a></p>\
                        {{/if}}\
                        <p class="city-hot">热门城市：{{each hot}}<a href="javascript:;" class="city-item" data-id="{{$value.id}}" data-name="{{$value.name}}">{{$value.name}}</a>{{/each}}</p>\
                        <div class="city-tab">{{each tabs}}<a href="javascript:;" data-level="{{$value.level}}" data-id="{{$value.pid}}" data-name="{{$value.pname}}" class="city-item {{if $value.level==level}}cur{{/if}}">{{$value.name?$value.name:"请选择"}}</a>{{/each}}</div>\
                        <div class="city-box">\
                        <ul>\
                        {{each item}}\
                            <li><a href="javascript:;" data-id="{{$value.id}}" data-name="{{$value.name}}" class="city-item {{if $value.id==now.provinceId||$value.id==now.cityId||$value.id==now.countyId}}cur{{/if}}">{{$value.name}}{{if $value.hasShop&&!uncompreser}}<i></i>{{/if}}</a></li>\
                        {{/each}}\
                        </ul>\
                    </div>\
                </script></div>');
        }
        var cityWrap = $(".city-wrap");
        var change = function () {
            var data = {};
            var changeCallback = function (now, all) {
                data.tabs = [{ level: 1, pid: 0, name: now.provinceName, pname: now.provinceName }, { level: 2, pid: now.provinceId, name: now.cityName, pname: now.provinceName }, { level: 3, pid: now.cityId, name: now.countyName, pname: now.cityName }];
                data.now = now;
                data.hot = [{ id: 530102, name: "昆明" }, { id: 520102, name: "贵阳" }, { id: 430101, name: "长沙" }, { id: 510106, name: "成都" }, { id: 500103, name: "重庆" }, { id: 530302, name: "曲靖" }, { id: 532901, name: "大理" }, { id: 532503, name: "蒙自" }, { id: 210102, name: "沈阳" }, { id: 360602, name: "江西" }, { id: 440304, name: "深圳" }];
                data.level = 3;
                for (var i = 0; i < all.length; i++) {
                    if (all[i].id == now.provinceId) {
                        for (var j = 0; j < all[i].children.length; j++) {
                            if (all[i].children[j].id == now.cityId) {
                                data.item = all[i].children[j].children;
                            }
                        }
                    }
                }
                local && first && (data.guess = true);
                cityWrap.html(template("J-city-tmpl", data));
                /*监听点击*/
                $(document).off("click").on("click", ".city-item", function () {
                    var id = $(this).attr("data-id"), name = $(this).attr("data-name");
                    if (id == 0) {//0则是省
                        data.item = all;
                        data.level = 1;
                    } else {
                        for (var i = 0; i < all.length; i++) {
                            if (all[i].id == id) {
                                data.item = all[i].children;//找到市
                                data.level = 2;
                                data.tabs[0].name = name;
                                data.tabs[1].name = "请选择";
                                data.tabs[2].name = "请选择";
                                break;
                            }
                            for (var j = 0; j < all[i].children.length; j++) {
                                if (all[i].children[j].id == id) {
                                    data.item = all[i].children[j].children;//找到区县
                                    data.level = 3;
                                    data.tabs[1].name = name;
                                    break;
                                }
                                for (var k = 0; k < all[i].children[j].children.length; k++) {
                                    if (all[i].children[j].children[k].id == id) {//设置城市id
                                        cityWrap.hide();
                                        if (typeof callback === "function") {
                                            var last = { provinceId: all[i].id, provinceName: all[i].name, cityId: all[i].children[j].id, cityName: all[i].children[j].name, countyId: id, countyName: all[i].children[j].children[k].name };
                                            callback.call(this, last);//回调返回选择的城市id
                                            return;
                                        }
                                        //setCookie(all[i].id, all[i].children[j].id, id, all[i].children[j].children[k].name);
                                        var selected = {
                                            provinceId: all[i].id,
                                            cityId: all[i].children[j].id,
                                            countyId: id,
                                            provinceName: all[i].name,
                                            cityName: all[i].children[j].name,
                                            countyName: all[i].children[j].children[k].name,
                                            hasShop: all[i].children[j].children[k].hasShop
                                        }
                                        setCookie(selected);
                                        window.location.reload();
                                    }
                                }
                            }
                        }
                    }
                    cityWrap.html(template("J-city-tmpl", data));
                });
                $(document).on("click", ".city-wrap .close", function () {
                    if (cityWrap.hasClass("unselected")) {
                        setCookie(now);
                        window.location.reload();
                    }
                    cityWrap.removeClass("unselected").hide();
                });
                $(document).on("keyup", function (e) {
                    if (e.keyCode == 27) {
                        if (cityWrap.hasClass("unselected")) {
                            setCookie(now);
                            window.location.reload();
                        }
                        cityWrap.removeClass("unselected").hide();
                    }
                });
            }
            if (onlyHasShopFlag) {
                // 返回有店铺地址
                Jiuji.city(local, changeCallback, uncompreser, 'onlyHasShop');
            } else {
                Jiuji.city(local, changeCallback, uncompreser);
            }            
        }
        var setCookie = function (city) {
            //var host = window.location.host.match(/\w+\.(\w+)/);
            var c = new Cookie();//兼容以前的城市切换接口，完全切换后cookie只存cityid
            c.set("pidc", city.provinceId, 365 * 24);
            c.set("zidc", city.cityId, 365 * 24);
            c.set("didc", city.countyId, 365 * 24);
            c.set("cityid", city.countyId, 365 * 24);
            c.set("dnamec", city.countyName, 365 * 24);
            c.set("ischecked", 1, 365 * 24);
            var cityStr = city.provinceId + '_' + city.provinceName + '-' + city.cityId + '_' + city.cityName + '-' + city.countyId + '_' + city.countyName + '-' + 's_' + (city.hasShop || city.hasshop ? 1 : 0);
            c.set("city", cityStr, 365 * 24);
        }
        if (local && first) {//如果传入定位城市id
            cityWrap.css({ position: "fixed", left: ($(window).width() - cityWrap.width()) / 2, top: ($(window).height() - cityWrap.height()) / 2 }).show().addClass("unselected");
            $("body").mark();
            change();
        } else {
            if (this.selector == 'body') {
                console.warn('myAddressArea接口没有返回cityid');
                return;
            }
            this.hoverShow("cur", ".city-wrap", function (obj) {
                obj = $(obj);
                var offsetLeft = obj.offset().left, offsetTop = obj.offset().top, offsetHeight = obj.height();
                cityWrap.removeClass("unselected").css({ position: "absolute", left: offsetLeft, top: offsetTop + offsetHeight });
                change();
            }, function () {
                $(document).off("click", ".city-tab a,.city-item a");
                if (cityWrap.hasClass("unselected")) {
                    cityWrap.show();
                }
            });
        }
        zIndex && cityWrap.css("z-index", zIndex);
    };
    $.fn.contrast = function (options) {//对比
        var defaults = { expire: 24 * 30 }, settings = $.extend({}, defaults, options);
        var dbFun = function (obj) {
            var cookie = new Cookie(), _this = obj, ppid = _this.attr("ppid"), cid = _this.attr("cid"), curIndex = 0, oldData = [], dbData = null, proCnt = 0, open = false, duibiStr = cookie.get("duibi") == null ? '' : cookie.get("duibi");
            toolBarFrame("/product/contrast/mini/" + ppid, 1); // 新版对比
            return;
            if (duibiStr !== "" && duibiStr.indexOf('CID') === -1 || duibiStr.indexOf('@') !== -1) {//删除老的cookie
                duibiStr = '';
                cookie.remove("duibi");
            }
            if (duibiStr !== "" && duibiStr.length > 0 && duibiStr.indexOf('CID') !== -1) {
                //取出原有的数据,并格式化
                oldData = JSON.parse(duibiStr);
                for (var j = 0; j < oldData.length; j++) {
                    if (oldData[j].CID == cid) {
                        var tmp = oldData[j].data, proCnt = tmp.length;
                        if (proCnt == 4) {
                            curIndex = j;
                        }
                        for (var m = 0; m < proCnt; m++) {
                            if (tmp[m] == ppid) {
                                layer.tips('商品已经在对比栏了！', _this, { top: 5, left: 10 }, 2000);
                                open = true;
                            }
                        }
                    }
                }
                if (open) {//已存在商品
                    toolBarFrame("/ProductContrast.aspx?act=mini", 2);
                    return;
                }
                if (proCnt >= 4) {//达到每一类的上限,替换该类的第一个商品
                    layer.tips('最多可以对比4件同类商品', _this, { top: 5, left: 20 });
                    oldData[curIndex].data.splice(0, 1);
                }

            }
            var i = 0, newData = [], push = true;//cookie中有数据，但没有该ppid
            if (oldData) {//存在以前的数据
                for (var k = 0; k < oldData.length; k++) {
                    if (oldData[k].CID == cid) {
                        oldData[k].data.push(ppid);
                        push = false;
                        var newArr = new Array();
                        newArr[0] = oldData[k];
                        oldData.splice(k, 1);
                        oldData=newArr.concat(oldData);
                        break;
                    }
                }
                if (push) {//没有该cid
                    dbData = [{ "CID": cid, "data": [ppid] }].concat(oldData);
                } else {
                    dbData = oldData;
                }
            } else {
                dbData = [{ "CID": cid, "data": [ppid] }];
            }
            if (dbData.length > 3) {
                layer.tips('最多可以对比3类商品', _this, { top: 5, left: 20 });
                dbData.splice(-1, 1);
                cookie.set("duibi", JSON.stringify(dbData), settings.expire);
                toolBarFrame("/ProductContrast.aspx?act=mini", 2);
                return;
            }
            cookie.set("duibi", JSON.stringify(dbData), settings.expire);
            toolBarFrame("/ProductContrast.aspx?act=mini", 1);
        };
        return this.each(function () {
            $(this).on("click", function () {
                dbFun($(this));
            });
        });
    };
    $.fn.JiuTips = function (options) {
        var defaults = {
            dataAttr: 'data-title', //监听该类上的哪个属性
            timer: false, //是否可以自动消失，
            timeOut: 1000, //设置时间,取决于time
            maxWidth: "300px", //最大宽度
            borderColor: '#ff6700', //border颜色
            bgColor: '#fff', //默认白色背景
            color: '#666',
            offset: [10, 17, 100] //[0]动画距离,[1]左右偏移量,[2]动画时间,可不填，各有默认值，如果参数缺省，可用null代替
        },
            settings = $.extend({}, defaults, options);
        settings.offset[0] = settings.offset[0] ? settings.offset[0] : 15;
        settings.offset[1] = settings.offset[1] ? settings.offset[1] : 18;
        settings.offset[2] = settings.offset[2] ? settings.offset[2] : 100;
        var isCss = true,
        timeId = null,
        destroy = true,
        listenClassName = this.selector,
        funCollection = {
            init: function (obj, event) {
                var body = $("body"),
                    head = $("head"),
                    style = head.find("style");
                var css = '.tips-msg-box{display:none; position:absolute;z-index:110; padding:10px;font-size:12px;border-radius:5px;background:' + (settings.bgColor ? settings.bgColor : "#fff") + '; color:' + (settings.color ? settings.color : "#666") + '; ' + 'word-break:break-all;word-wrap:break-word; border:1px solid ' + (settings.borderColor ? settings.borderColor : "#ff6700") + '; top:100px; ' + 'left:100px; max-width:' + (settings.maxWidth ? settings.maxWidth : "300px") + ';font-family:"Microsoft Yahei",sans-serif;}';
                css += '.tips-msg-box.direction-down:after{ content:""; position:absolute; width:10px; height:10px; ' + 'left:10px; bottom:-6px; background:' + (settings.bgColor ? settings.bgColor : "#fff") + '; border-width:0 1px 1px 0; border-style:solid;' + ' border-color:' + (settings.borderColor ? settings.borderColor : "#ff6700") + '; transform:rotate(45deg);display:none\\9; }';
                css += '.tips-msg-box.direction-up:after{ content:""; position:absolute; width:10px; height:10px; ' + 'left:10px; top:-6px; background:' + (settings.bgColor ? settings.bgColor : "#fff") + '; border-width:1px 0 0 1px; border-style:solid;' + ' border-color:' + (settings.borderColor ? settings.borderColor : "#ff6700") + '; t' + 'ransform:rotate(45deg);display:none\\9; }';
                css += '.tips-msg-box.direction-right-down:after{ content:""; position:absolute; width:10px; height:10px; ' + 'right:10px; bottom:-6px; background:' + (settings.bgColor ? settings.bgColor : "#fff") + '; border-width:0 1px 1px 0; border-style:solid;' + ' border-color:' + (settings.borderColor ? settings.borderColor : "#ff6700") + '; transform:rotate(45deg);display:none\\9; }';
                css += '.tips-msg-box.direction-right-up:after{ content:""; position:absolute; width:10px; height:10px; ' + 'right:10px; top:-6px; background:' + (settings.bgColor ? settings.bgColor : "#fff") + '; border-width:1px 0 0 1px; border-style:solid;' + ' border-color:' + (settings.borderColor ? settings.borderColor : "#ff6700") + '; transform:rotate(45deg);display:none\\9; }';
                if (isCss) { //只添加一次css
                    head.append('<style>' + css + '</style>');
                    isCss = false;
                }
                //创建div
                var content = obj.attr(settings.dataAttr),
                    objInfo = {
                        top: obj.offset().top,
                        left: obj.offset().left,
                        w: obj.outerWidth(),
                        h: obj.outerHeight()
                    };
                if ($(".tips-msg-box").length == 0) {
                    body.append('<div class="tips-msg-box">' + content + '</div>');
                } else {
                    $(".tips-msg-box").html(content);
                }
                var box = $(".tips-msg-box"),
                    win = $(window),
                    boxInfo = {
                        h: box.outerHeight(),
                        w: box.outerWidth()
                    },
                    top = 0,
                    left = 0,
                    className = 'direction-down',
                    winInfo = {
                        h: win.height(),
                        w: win.width()
                    };
                if (objInfo.top < boxInfo.h) { //上方
                    top = objInfo.top + objInfo.h + 10;
                    left = objInfo.left + objInfo.w / 2 - settings.offset[1];
                    className = 'direction-up';
                    if (winInfo.w - objInfo.left < boxInfo.w) { //右上
                        left = objInfo.left - boxInfo.w + objInfo.w / 2 + settings.offset[1];
                        className = 'direction-right-up';
                    }
                } else if (winInfo.h - objInfo.top < boxInfo.h) { //下方
                    top = objInfo.top - boxInfo.h - 10;
                    left = objInfo.left + objInfo.w / 2 - settings.offset[1];
                    className = 'direction-down';
                    if (winInfo.w - objInfo.left < boxInfo.w) { //右下
                        top = objInfo.top - boxInfo.h - 10;
                        left = objInfo.left - boxInfo.w + objInfo.w / 2 + settings.offset[1];
                        className = 'direction-right-down';
                    }
                } else if (objInfo.left < boxInfo.w) { //左
                    left = objInfo.left + objInfo.w / 2 - settings.offset[1];
                    top = objInfo.top - boxInfo.h - 10;
                    className = 'direction-down';
                } else if (winInfo.w - objInfo.left < boxInfo.w) { //右
                    left = objInfo.left - boxInfo.w + objInfo.w / 2 + settings.offset[1];
                    top = objInfo.top - boxInfo.h - 10;
                    className = 'direction-right-down';
                } else {
                    top = objInfo.top - boxInfo.h - 10;
                    left = objInfo.left + objInfo.w / 2 - settings.offset[1];
                    className = 'direction-down';
                }
                var isDown = className.indexOf('down') !== -1,
                    isUp = className.indexOf('up') !== -1,
                 newT = top + (isDown ? -settings.offset[0] : isUp ? settings.offset[0] : 0);
                box.removeClass().addClass("tips-msg-box" + " " + className).css({
                    'top': newT + 'px',
                    'left': left + 'px'
                }).show().animate({
                    top: newT + (isDown ? settings.offset[0] : isUp ? -settings.offset[0] : 0) + 'px',
                    'left': left + 'px'
                }, settings.offset[2], 'linear');
            }
        };
        $(document).on("mouseover", listenClassName, function (ev) {
            if (!destroy) {
                return;
            }
            var self = $(this);
            if ($(".tips-msg-box").length == 0) {
                funCollection.init(self, ev || window.event);
            }
        });
        $(document).on("mouseleave", listenClassName, function (ev) {
            var self = $(this),
                tips = $(".tips-msg-box");
            if (settings.timer) {
                timeId = setTimeout(function () {
                    tips.remove();
                }, settings.timeOut);
            } else {
                timeId = setTimeout(function () {
                    tips.remove();
                }, 10);
            }
        });
        $(document).on("mouseover", ".tips-msg-box", function (ev) {
            var self = $(this);
            if (timeId !== null) {
                clearTimeout(timeId);
            }
        });
        $(document).on("mouseleave", ".tips-msg-box", function (ev) {
            var self = $(this);
            self.remove();
        });
        return this;
    };
    $.fn.timePlay = function (optioins) {
        var defaults = {
            times: 0,//必传属性
            attr: 'data-time',
            tpl: '<b>{{d}}</b>天<b>{{h}}</b>小时<b>{{m}}</b>分<b>{{s}}</b>秒',//倒计时显示模板
            end: null, //倒计时完成时执行
            callback: null, //每减1秒执行,
            double: true,
            time: 1000,
            justify: true,//是否在天或时为0是隐藏天或时，默认是这样
            hideDay:false//只隐藏天
        };
        return this.each(function () {
            var settings = $.extend({}, defaults, optioins);
            var _this = $(this), eachTpl = settings.tpl;
            //只有一个在执行
            var seconds = 0, tplParten = /(\{\{[dhms]\}\})+/gi, tplRes = eachTpl.match(tplParten);;
            if (!_this.attr(settings.attr)) {
                seconds = parseFloat(settings.times);
            } else {//多个执行时，先把请求来的时间以属性的方式赋值给元素，再执行插件
                seconds = parseFloat(_this.attr(settings.attr));
            }
            if (isNaN(seconds)) {
                window.console && console.log('时间错误');
                _this.html(eachTpl.replace(/\{\{d\}\}/, '00').replace(/\{\{h\}\}/, '00').replace(/\{\{m\}\}/, '00').replace(/\{\{s\}\}/, '00'));
                return;
            }
            var stime = parseFloat(seconds) * 1000;
            //得到本地结束的时间
            var sEndTime = stime + new Date().getTime();
            //得到本地的时间差
            var total = 0, n = 0, secFlg = false;
            var rush = function () {
                secFlg = false;
                var now = new Date().getTime();
                if (sEndTime > now) {
                    total = sEndTime - now;
                }
                if (settings.time < 1000) {
                    if (((n++) * settings.time) % 1000 === 0) {
                        secFlg = true;
                    }
                }
                var totalSecond = total -= settings.time;
                totalSecond /= 1000;
                if (totalSecond <= 0) {
                    if (settings.callback && typeof settings.callback === 'function') {
                        var time = { obj: _this, total: Math.floor(seconds) };
                        if (secFlg) {
                            settings.callback(time);
                        } else if (!secFlg && settings.time >= 1000) {
                            settings.callback(time);
                        }
                    }
                    totalSecond = 0;
                    _this.html(eachTpl.replace(/\{\{d\}\}/, '00').replace(/\{\{h\}\}/, '00').replace(/\{\{m\}\}/, '00').replace(/\{\{s\}\}/, '00'));
                    if (settings.end && typeof settings.end === 'function') {
                        settings.end(_this);
                    }
                    return;
                }
                var D = 0, H = 0, M = 0, S = 0;
                if (tplRes && tplRes.length > 0 && tplRes.length < 4) {
                    if (tplRes.indexOf('{{d}}')!==-1) {
                        D = totalSecond / (24 * 3600);
                        H = (totalSecond / 3600) % 24;
                        M = (totalSecond / 60) % 60;
                        S = (total % 60000 * 0.001).toFixed(1);
                    } else if (tplRes.indexOf('{{h}}') !== -1) {
                        H = totalSecond / 3600;
                        M = (totalSecond / 60) % 60;
                        S = (total % 60000 * 0.001).toFixed(1);
                    } else if (tplRes.indexOf('{{m}}') !== -1) {
                        M = totalSecond / 60;
                        S = (total % 60000 * 0.001).toFixed(1);
                    } else if (tplRes.indexOf('{{s}}') !== -1) {
                        S = totalSecond.toFixed(1);
                    }
                } else {
                    D = totalSecond / (24 * 3600);
                    H = (totalSecond / 3600) % 24;
                    M = (totalSecond / 60) % 60;
                    S = (total % 60000 * 0.001).toFixed(1);
                }
                var fitTime = function (t) {
                    return t < 10 ? '0' + t : t;
                };
                D = Math.floor(D);
                H = Math.floor(H);
                M = Math.floor(M);
                if (settings.time == 1000) {
                    S = Math.floor(S);
                }
                if (settings.double) {
                    D = fitTime(D);
                    H = fitTime(H);
                    M = fitTime(M);
                    S = fitTime(S);
                } else {
                    S = fitTime(S);
                }
                if (settings.callback && typeof settings.callback === 'function') {
                    var time = { obj: _this,  total: Math.floor(totalSecond) };
                    if (secFlg) {
                        settings.callback(time);
                    } else if (!secFlg && settings.time >= 1000) {
                        settings.callback(time);
                    }
                }
                if (settings.hideDay) {
                    if (D <= 0) {
                        if (secFlg) {
                            eachTpl = eachTpl.replace(/(<\w+.*?>.*?\{\{d\}\}.*?<\/\w+>[^<]?)?/, '');
                        } else if (!secFlg && settings.time >= 1000) {
                            eachTpl = eachTpl.replace(/(<\w+.*?>.*?\{\{d\}\}.*?<\/\w+>[^<]?)?/, '');
                        }
                    }
                }else if (settings.justify) {
                    if (D <= 0) {
                        if (secFlg) {
                            eachTpl = eachTpl.replace(/(<\w+.*?>.*?\{\{d\}\}.*?<\/\w+>[^<]?)?/, '');
                        } else if (!secFlg && settings.time >= 1000) {
                            eachTpl = eachTpl.replace(/(<\w+.*?>.*?\{\{d\}\}.*?<\/\w+>[^<]?)?/, '');
                        }
                    }
                    if (D <= 0&&H <= 0) {
                        if (secFlg) {
                            eachTpl = eachTpl.replace(/(<\w+.*?>.*?\{\{h\}\}.*?<\/\w+>[^<]?)?/, '');
                        } else if (!secFlg && settings.time >= 1000) {
                            eachTpl = eachTpl.replace(/(<\w+.*?>.*?\{\{h\}\}.*?<\/\w+>[^<]?)?/, '');
                        }
                    }
                }
                _this.html(eachTpl.replace(/\{\{d\}\}/, D).replace(/\{\{h\}\}/, H).replace(/\{\{m\}\}/, M).replace(/\{\{s\}\}/, S));
                setTimeout(rush, settings.time);
            };
            rush();
        });
    };
    $.fn.slide = function (options) {  //上下左右切换插件参考手册 http://www.superslide2.com/param.html
        $.fn.slide.defaults = {
            type: "slide",
            effect: "fade",  //动画效果  fade：渐显； || top：上滚动；|| left：左滚动；|| topLoop：上循环滚动；|| leftLoop：左循环滚动；|| topMarquee：上无缝循环滚动；|| leftMarquee：左无缝循环滚动；fold：淡入淡出；slideDown：下拉效果
            autoPlay: true,  //自动播放
            delayTime: 800,  //自动运行间隔。当effect为无缝滚动(topMarquee/leftMarquee)时，相当于运行速度。
            interTime: 4000,  //毫秒；切换效果持续时间（一次切换效果执行所用的时间长度）。
            triggerTime: 150,
            defaultIndex: 0,  //默认的当前位置索引。0是第一个； defaultIndex:1 时，相当于从第2个开始执行
            titCell: ".hd li",  //导航元素包裹器
            mainCell: ".bd",    //目标显示元素包裹器
            targetCell: null,   //切换元素对象，处理内容切换元素非包裹状态下等情况，实现更多效果，处理更多情况，能和titCell、mainCell同时使用。只支持fade,slideDown效果。
            trigger: "mouseover",  //触发方式 mouseover：鼠标移过触发；|| click：鼠标点击触发；
            scroll: 1,  //每次滚动个数
            vis: 1,  //mainCell的可视范围个数，当实际内容个数少于可视个数的时候，不执行SuperSlide效果。
            titOnClassName: "on",  //当前导航位置自动增加的class名称
            autoPage: false,    //程序自动分页
            prevCell: ".prev",  //前一个
            nextCell: ".next",  //后一个
            pageStateCell: ".pageState",   //分页状态对象，用于显示分页状态，例如：2/3
            opp: false,  //默认反方向运动
            pnLoop: true,  //前/后按钮是否继续循环，若为false则当翻动到最前/后页时，前/后按钮点击无效，同时增加prevStop/nextStop类名控制样色
            easing: "swing",  //缓动效果；更改默认效果为“swing”，使效果更流畅
            startFun: null,  //每次切换效果开始时执行函数，用于处理特殊情况或创建更多效果。用法 startFun:function(i,c){ }； 其中i为当前分页，c为总页数
            endFun: null,   //每次切换效果结束时执行函数，用法和startFun一致
            switchLoad: null,

            playStateCell: ".playState",  //播放/暂停状态按钮，点击后会增加/删除"pauseState"类名用于控制样色。
            mouseOverStop: true,
            defaultPlay: true,
            returnDefault: false
        };

        return this.each(function () {

            var opts = $.extend({}, $.fn.slide.defaults, options);
            var slider = $(this);
            var effect = opts.effect;
            var prevBtn = $(opts.prevCell, slider);
            var nextBtn = $(opts.nextCell, slider);
            var pageState = $(opts.pageStateCell, slider);
            var playState = $(opts.playStateCell, slider);

            var navObj = $(opts.titCell, slider);//导航子元素结合
            var navObjSize = navObj.size();
            var conBox = $(opts.mainCell, slider);//内容元素父层对象
            var conBoxSize = conBox.children().size();
            var sLoad = opts.switchLoad;
            var tarObj = $(opts.targetCell, slider);

            /*字符串转换*/
            var index = parseInt(opts.defaultIndex);
            var delayTime = parseInt(opts.delayTime);
            var interTime = parseInt(opts.interTime);
            var triggerTime = parseInt(opts.triggerTime);
            var scroll = parseInt(opts.scroll);
            var vis = parseInt(opts.vis);
            var autoPlay = (opts.autoPlay == "false" || opts.autoPlay == false) ? false : true;
            var opp = (opts.opp == "false" || opts.opp == false) ? false : true;
            var autoPage = (opts.autoPage == "false" || opts.autoPage == false) ? false : true;
            var pnLoop = (opts.pnLoop == "false" || opts.pnLoop == false) ? false : true;
            var mouseOverStop = (opts.mouseOverStop == "false" || opts.mouseOverStop == false) ? false : true;
            var defaultPlay = (opts.defaultPlay == "false" || opts.defaultPlay == false) ? false : true;
            var returnDefault = (opts.returnDefault == "false" || opts.returnDefault == false) ? false : true;

            var slideH = 0;
            var slideW = 0;
            var selfW = 0;
            var selfH = 0;
            var easing = opts.easing;
            var inter = null;//autoPlay-setInterval 
            var mst = null;//trigger-setTimeout
            var rtnST = null;//returnDefault-setTimeout
            var titOn = opts.titOnClassName;

            var onIndex = navObj.index(slider.find("." + titOn));
            var defaultIndex;
            var oldIndex = index = defaultIndex = onIndex == -1 ? index : onIndex;


            var _ind = index;
            var cloneNum = conBoxSize >= vis ? (conBoxSize % scroll != 0 ? conBoxSize % scroll : scroll) : 0;
            var _tar;
            var isMarq = effect == "leftMarquee" || effect == "topMarquee" ? true : false;

            var doStartFun = function () { if ($.isFunction(opts.startFun)) { opts.startFun(index, navObjSize, slider, $(opts.titCell, slider), conBox, tarObj, prevBtn, nextBtn) } }
            var doEndFun = function () { if ($.isFunction(opts.endFun)) { opts.endFun(index, navObjSize, slider, $(opts.titCell, slider), conBox, tarObj, prevBtn, nextBtn) } }
            var resetOn = function () { navObj.removeClass(titOn); if (defaultPlay) navObj.eq(defaultIndex).addClass(titOn) }

            //单独处理菜单效果
            if (opts.type == "menu") {

                if (defaultPlay) { navObj.removeClass(titOn).eq(index).addClass(titOn); }
                navObj.hover(
						function () {
						    _tar = $(this).find(opts.targetCell);
						    var hoverInd = navObj.index($(this));

						    mst = setTimeout(function () {
						        index = hoverInd;
						        navObj.removeClass(titOn).eq(index).addClass(titOn);
						        doStartFun();
						        switch (effect) {
						            case "fade": _tar.stop(true, true).animate({ opacity: "show" }, delayTime, easing, doEndFun); break;
						            case "slideDown": _tar.stop(true, true).animate({ height: "show" }, delayTime, easing, doEndFun); break;
						        }
						    }, opts.triggerTime);

						}, function () {
						    clearTimeout(mst);
						    switch (effect) { case "fade": _tar.animate({ opacity: "hide" }, delayTime, easing); break; case "slideDown": _tar.animate({ height: "hide" }, delayTime, easing); break; }
						}
				);

                if (returnDefault) {
                    slider.hover(function () { clearTimeout(rtnST); }, function () { rtnST = setTimeout(resetOn, delayTime); });
                }


                return;
            }

            //处理分页
            if (navObjSize == 0) navObjSize = conBoxSize;//只有左右按钮
            if (isMarq) navObjSize = 2;
            if (autoPage) {
                if (conBoxSize >= vis) {
                    if (effect == "leftLoop" || effect == "topLoop") { navObjSize = conBoxSize % scroll != 0 ? (conBoxSize / scroll ^ 0) + 1 : conBoxSize / scroll; }
                    else {
                        var tempS = conBoxSize - vis;
                        navObjSize = 1 + parseInt(tempS % scroll != 0 ? (tempS / scroll + 1) : (tempS / scroll));
                        if (navObjSize <= 0) navObjSize = 1;
                    }
                }
                else { navObjSize = 1 }

                navObj.html("");
                var str = "";

                if (opts.autoPage == true || opts.autoPage == "true") { for (var i = 0; i < navObjSize; i++) { str += "<li>" + (i + 1) + "</li>" } }
                else { for (var i = 0; i < navObjSize; i++) { str += opts.autoPage.replace("$", (i + 1)) } }
                navObj.html(str);

                var navObj = navObj.children();//重置导航子元素对象
            }

            if (conBoxSize >= vis) { //当内容个数少于可视个数，不执行效果。
                conBox.children().each(function () { //取最大值
                    if ($(this).width() > selfW) { selfW = $(this).width(); slideW = $(this).outerWidth(true); }
                    if ($(this).height() > selfH) { selfH = $(this).height(); slideH = $(this).outerHeight(true); }
                });

                var _chr = conBox.children();
                var cloneEle = function () {
                    for (var i = 0; i < vis ; i++) { _chr.eq(i).clone().addClass("clone").appendTo(conBox); }
                    for (var i = 0; i < cloneNum ; i++) { _chr.eq(conBoxSize - i - 1).clone().addClass("clone").prependTo(conBox); }
                }

                switch (effect) {
                    case "fold": conBox.css({ "position": "relative", "width": slideW, "height": slideH }).children().css({ "position": "absolute", "width": selfW, "left": 0, "top": 0, "display": "none" }); break;
                    case "top": conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + vis * slideH + 'px"></div>').css({ "top": -(index * scroll) * slideH, "position": "relative", "padding": "0", "margin": "0" }).children().css({ "height": selfH }); break;
                    case "left": conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + vis * slideW + 'px"></div>').css({ "width": conBoxSize * slideW, "left": -(index * scroll) * slideW, "position": "relative", "overflow": "hidden", "padding": "0", "margin": "0" }).children().css({ "float": "left", "width": selfW }); break;
                    case "leftLoop":
                    case "leftMarquee":
                        cloneEle();
                        conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:' + vis * slideW + 'px"></div>').css({ "width": (conBoxSize + vis + cloneNum) * slideW, "position": "relative", "overflow": "hidden", "padding": "0", "margin": "0", "left": -(cloneNum + index * scroll) * slideW }).children().css({ "float": "left", "width": selfW }); break;
                    case "topLoop":
                    case "topMarquee":
                        cloneEle();
                        conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:' + vis * slideH + 'px"></div>').css({ "height": (conBoxSize + vis + cloneNum) * slideH, "position": "relative", "padding": "0", "margin": "0", "top": -(cloneNum + index * scroll) * slideH }).children().css({ "height": selfH }); break;
                }
            }

            //针对leftLoop、topLoop的滚动个数
            var scrollNum = function (ind) {
                var _tempCs = ind * scroll;
                if (ind == navObjSize) { _tempCs = conBoxSize; } else if (ind == -1 && conBoxSize % scroll != 0) { _tempCs = -conBoxSize % scroll; }
                return _tempCs;
            }

            //切换加载
            var doSwitchLoad = function (objs) {

                var changeImg = function (t) {
                    for (var i = t; i < (vis + t) ; i++) {
                        objs.eq(i).find("img[" + sLoad + "]").each(function () {
                            var _this = $(this);
                            _this.attr("src", _this.attr(sLoad)).removeAttr(sLoad);
                            if (conBox.find(".clone")[0]) { //如果存在.clone
                                var chir = conBox.children();
                                for (var j = 0 ; j < chir.size() ; j++) {
                                    chir.eq(j).find("img[" + sLoad + "]").each(function () {
                                        if ($(this).attr(sLoad) == _this.attr("src")) $(this).attr("src", $(this).attr(sLoad)).removeAttr(sLoad)
                                    })
                                }
                            }
                        })
                    }
                }

                switch (effect) {
                    case "fade": case "fold": case "top": case "left": case "slideDown":
                        changeImg(index * scroll);
                        break;
                    case "leftLoop": case "topLoop":
                        changeImg(cloneNum + scrollNum(_ind));
                        break;
                    case "leftMarquee": case "topMarquee":
                        var curS = effect == "leftMarquee" ? conBox.css("left").replace("px", "") : conBox.css("top").replace("px", "");
                        var slideT = effect == "leftMarquee" ? slideW : slideH;
                        var mNum = cloneNum;
                        if (curS % slideT != 0) {
                            var curP = Math.abs(curS / slideT ^ 0);
                            if (index == 1) { mNum = cloneNum + curP } else { mNum = cloneNum + curP - 1 }
                        }
                        changeImg(mNum);
                        break;
                }
            }//doSwitchLoad end

            //效果函数
            var doPlay = function (init) {
                // 当前页状态不触发效果
                if (defaultPlay && oldIndex == index && !init && !isMarq) return;

                //处理页码
                if (isMarq) { if (index >= 1) { index = 1; } else if (index <= 0) { index = 0; } }
                else {
                    _ind = index; if (index >= navObjSize) { index = 0; } else if (index < 0) { index = navObjSize - 1; }
                }

                doStartFun();

                //处理切换加载
                if (sLoad != null) { doSwitchLoad(conBox.children()) }

                //处理targetCell
                if (tarObj[0]) {
                    _tar = tarObj.eq(index);
                    if (sLoad != null) { doSwitchLoad(tarObj) }
                    if (effect == "slideDown") {
                        tarObj.not(_tar).stop(true, true).slideUp(delayTime);
                        _tar.slideDown(delayTime, easing, function () { if (!conBox[0]) doEndFun() });
                    }
                    else {
                        tarObj.not(_tar).stop(true, true).hide();
                        _tar.animate({ opacity: "show" }, delayTime, function () { if (!conBox[0]) doEndFun() });
                    }
                }

                if (conBoxSize >= vis) { //当内容个数少于可视个数，不执行效果。
                    switch (effect) {
                        case "fade": conBox.children().stop(true, true).eq(index).animate({ opacity: "show" }, delayTime, easing, function () { doEndFun() }).siblings().hide(); break;
                        case "fold": conBox.children().stop(true, true).eq(index).animate({ opacity: "show" }, delayTime, easing, function () { doEndFun() }).siblings().animate({ opacity: "hide" }, delayTime, easing); break;
                        case "top": conBox.stop(true, false).animate({ "top": -index * scroll * slideH }, delayTime, easing, function () { doEndFun() }); break;
                        case "left": conBox.stop(true, false).animate({ "left": -index * scroll * slideW }, delayTime, easing, function () { doEndFun() }); break;
                        case "leftLoop":
                            var __ind = _ind;
                            conBox.stop(true, true).animate({ "left": -(scrollNum(_ind) + cloneNum) * slideW }, delayTime, easing, function () {
                                if (__ind <= -1) { conBox.css("left", -(cloneNum + (navObjSize - 1) * scroll) * slideW); } else if (__ind >= navObjSize) { conBox.css("left", -cloneNum * slideW); }
                                doEndFun();
                            });
                            break;//leftLoop end

                        case "topLoop":
                            var __ind = _ind;
                            conBox.stop(true, true).animate({ "top": -(scrollNum(_ind) + cloneNum) * slideH }, delayTime, easing, function () {
                                if (__ind <= -1) { conBox.css("top", -(cloneNum + (navObjSize - 1) * scroll) * slideH); } else if (__ind >= navObjSize) { conBox.css("top", -cloneNum * slideH); }
                                doEndFun();
                            });
                            break;//topLoop end

                        case "leftMarquee":
                            var tempLeft = conBox.css("left").replace("px", "");
                            if (index == 0) {
                                conBox.animate({ "left": ++tempLeft }, 0, function () {
                                    if (conBox.css("left").replace("px", "") >= 0) { conBox.css("left", -conBoxSize * slideW) }
                                });
                            }
                            else {
                                conBox.animate({ "left": --tempLeft }, 0, function () {
                                    if (conBox.css("left").replace("px", "") <= -(conBoxSize + cloneNum) * slideW) { conBox.css("left", -cloneNum * slideW) }
                                });
                            } break;// leftMarquee end

                        case "topMarquee":
                            var tempTop = conBox.css("top").replace("px", "");
                            if (index == 0) {
                                conBox.animate({ "top": ++tempTop }, 0, function () {
                                    if (conBox.css("top").replace("px", "") >= 0) { conBox.css("top", -conBoxSize * slideH) }
                                });
                            }
                            else {
                                conBox.animate({ "top": --tempTop }, 0, function () {
                                    if (conBox.css("top").replace("px", "") <= -(conBoxSize + cloneNum) * slideH) { conBox.css("top", -cloneNum * slideH) }
                                });
                            } break;// topMarquee end

                    }//switch end
                }

                navObj.removeClass(titOn).eq(index).addClass(titOn);
                oldIndex = index;
                if (!pnLoop) { //pnLoop控制前后按钮是否继续循环
                    nextBtn.removeClass("nextStop"); prevBtn.removeClass("prevStop");
                    if (index == 0) { prevBtn.addClass("prevStop"); }
                    if (index == navObjSize - 1) { nextBtn.addClass("nextStop"); }
                }

                pageState.html("<span>" + (index + 1) + "</span>/" + navObjSize);

            };// doPlay end

            //初始化执行
            if (defaultPlay) { doPlay(true); }

            if (returnDefault)//返回默认状态
            {
                slider.hover(function () { clearTimeout(rtnST) }, function () {
                    rtnST = setTimeout(function () {
                        index = defaultIndex;
                        if (defaultPlay) { doPlay(); }
                        else {
                            if (effect == "slideDown") { _tar.slideUp(delayTime, resetOn); }
                            else { _tar.animate({ opacity: "hide" }, delayTime, resetOn); }
                        }
                        oldIndex = index;
                    }, 300);
                });
            }

            ///自动播放函数
            var setInter = function (time) { inter = setInterval(function () { opp ? index-- : index++; doPlay() }, !!time ? time : interTime); }
            var setMarInter = function (time) { inter = setInterval(doPlay, !!time ? time : interTime); }
            // 处理mouseOverStop
            var resetInter = function () { if (!mouseOverStop) { clearInterval(inter); setInter() } }
            // 前后按钮触发
            var nextTrigger = function () { if (pnLoop || index != navObjSize - 1) { index++; doPlay(); if (!isMarq) resetInter(); } }
            var prevTrigger = function () { if (pnLoop || index != 0) { index--; doPlay(); if (!isMarq) resetInter(); } }
            //处理playState
            var playStateFun = function () { clearInterval(inter); isMarq ? setMarInter() : setInter(); playState.removeClass("pauseState") }
            var pauseStateFun = function () { clearInterval(inter); playState.addClass("pauseState"); }

            //自动播放
            if (autoPlay) {
                if (isMarq) {
                    opp ? index-- : index++; setMarInter();
                    if (mouseOverStop) conBox.hover(pauseStateFun, playStateFun);
                } else {
                    setInter();
                    if (mouseOverStop) slider.hover(pauseStateFun, playStateFun);
                }
            }
            else { if (isMarq) { opp ? index-- : index++; } playState.addClass("pauseState"); }

            playState.click(function () { playState.hasClass("pauseState") ? playStateFun() : pauseStateFun() });

            //titCell事件
            if (opts.trigger == "mouseover") {
                navObj.hover(function () { var hoverInd = navObj.index(this); mst = setTimeout(function () { index = hoverInd; doPlay(); resetInter(); }, opts.triggerTime); }, function () { clearTimeout(mst) });
            } else { navObj.click(function () { index = navObj.index(this); doPlay(); resetInter(); }) }

            //前后按钮事件
            if (isMarq) {

                nextBtn.mousedown(nextTrigger);
                prevBtn.mousedown(prevTrigger);
                //前后按钮长按10倍加速
                if (pnLoop) {
                    var st;
                    var marDown = function () { st = setTimeout(function () { clearInterval(inter); setMarInter(interTime / 10 ^ 0) }, 150) }
                    var marUp = function () { clearTimeout(st); clearInterval(inter); setMarInter() }
                    nextBtn.mousedown(marDown); nextBtn.mouseup(marUp);
                    prevBtn.mousedown(marDown); prevBtn.mouseup(marUp);
                }
                //前后按钮mouseover事件
                if (opts.trigger == "mouseover") { nextBtn.hover(nextTrigger, function () { }); prevBtn.hover(prevTrigger, function () { }); }
            } else {
                nextBtn.click(nextTrigger);
                prevBtn.click(prevTrigger);
            }

        });//each End

    };//slide End
}(jQuery);

/*错误监听*/
window.onerror = function (err, url, line) {
    try {
        $.post("/api/data.ashx", { act: "jsError", content: err, url: encodeURIComponent(url), line: line, ua: navigator.userAgent,cityid: new Cookie().get("cityid") }, $.noop, "text");
    } catch (e) { }
}
; (function () {
    if (Url.params("ad2")) {
        new Cookie().set("ad2", Url.params("ad2"), 14 * 24);
        $.ajax({
            type: "post",
            url: "//price.ch999img.com/ActivityAPI.ashx",
            data: { "act": "AddActRecord", "Url": location.href, "ad2": Url.params("ad2") },
            dataType: "jsonp",
            success: function (rsp) { }
        });

    }
})();
