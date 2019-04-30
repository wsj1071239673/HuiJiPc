var strCookie = document.cookie;
console.log(strCookie.length)
var arrCookie = strCookie.split("; ");
var getCookie2;
for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    //找到名称为userId的cookie，并返回它的值
    if ("user" == arr[0]) {
        getCookie2 = arr[1];
        break;
    }
}
$(document).ready(function () {
    //页面加载,把数据库的购物车数据渲染到页面上
    $(window).load(function () {
        console.log(1)
        $.ajax({
            type: 'get',
            url: "api/shopCar/shopCar.php",
            data: {
                type: 0,
                cookie: getCookie2
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $.each(data, function (i, val) {
                    console.log(val.num)
                    var str = '';
                    str += '<ul class="car-body clearfix" data-type=' + val.listid + '>';
                    str += '<li class="car-body1"><label class="lab-xuan"><input type="checkbox" class="checkSingle"></label><a href=""><img src=' + val.carsrc + ' alt=""></a></li>';
                    str += ' <li class="car-body2"><a href="">' + val.carname + '</a></li>';
                    str += '<li class="car-body3 singlePrice">' + val.price + '</li>';
                    str += '<li class="car-body4 discount">0.00</li>';
                    str += '<li class="car-body5"><a class="reduce">-</a><span class="singleNum">' + val.num + '</span><a class="add">+</a></li>';
                    str += '<li class="car-body6 subtotal">3450.00</li>';
                    str += '<li class="car-body7"><a class="remove">移入收藏夹</a><a class="del">删除</a></li>';
                    str += '</ul>';
                    $('.core-car .option').append(str);

                })
                // init()
                //数据渲染完以后,调用购车的方法,则新添加的元素也会能添加事件
                carLogic();
                //页面渲染完以后,把每项的小计算一下(需要遍历)
                $('.subtotal').each(function (i) {
                    single(i);
                })
                //点击减号时,发送ajax,改变数据库数据,页面渲染时,还是点击过后的内容
                $('.core-car .reduce').click(function () {
                    var num = $(this).next().html(); //不许减一,因为先执行内容变化,在执行获取内容
                    var listid = $(this).parent().parent().data('type');
                    carAjax(1, getCookie2, listid, num);
                })
                //点击加号时,发送ajax,改变数据库数据,页面渲染时,还是点击过后的内容
                $('.core-car .add').click(function () {
                    console.log(1)
                    var num = $(this).prev().html();
                    var listid = $(this).parent().parent().data('type');
                    carAjax(1, getCookie2, listid, num);
                })
                //点击删除时,删掉对应的数据;
                $('.del,.remove').click(function () {
                    var listid = $(this).parent().parent().data('type');
                    carAjax(2, getCookie2, listid, 0);
                })
                //点击加减时发送ajax(公共代码)
                function carAjax(type, cookie, listid, num) {
                    console.log(num)
                    $.ajax({
                        type: 'get',
                        url: "api/shopCar/shopCar.php",
                        data: {
                            type: type,
                            cookie: cookie,
                            listid: listid,
                            numa: num
                        },
                        dataType: "json",
                    })
                }
            },
            //没数据传回时的页面
            error: function () {
                //页面初始化,若无商品,则显示无购车信息
                function init() {
                    console.log(1)
                    if ($('.core-car .option').children().length == 0) {
                        $('.core-car .infor-car,.core-car .core-list,.core-car .option,.core-car .core-foot').hide();
                        $('.core-car .none').show();
                    } else {
                        $('.core-car .infor-car,.core-car .core-list,.core-car .option,.core-car .core-foot').show();
                        $('.core-car .none').hide();
                    }
                }
                init();
            }
        })
    });
    //点击加入购物车
    function addShop() {
        flagg = true;
        $('.bottom-car .gouWu').click(function () {
            console.log(1)
            listid = $(this).parent().parent().data('type');
            price = $(this).parent().prev().children('.jiage').html();
            name = $(this).parent().prev().prev().children().html();
            src = $(this).parent().prev().prev().prev().children().attr('src');
            console.log(listid);
            console.log(price);
            console.log(name);
            console.log(src);
            console.log(getCookie2)
            $.ajax({
                type: 'get',
                url: "api/shopCar/shopCar.php",
                data: {
                    type: 3,
                    cookie: getCookie2,
                    listid: listid,
                    name: name,
                    price: price,
                    src: src
                },
                dataType: "json",
                success: function () {
                    render();
                }
            })

        })
    }
    addShop();

    function render() {
        $('.car-body').each(function (i, val) {
            if ($(val).data('type') == listid) {
                flagg = false;
                var htm = $(this).children('.car-body5').children('.singleNum').html();
                var htm2 = parseInt(htm) + 1;
                $(this).children('.car-body5').children('.singleNum').html(htm2);
                single(i);
            }
        })
        if (flagg) {
            var strr = '';
            strr += '<ul class="car-body clearfix" data-type=' + listid + '>';
            strr += '<li class="car-body1"><label class="lab-xuan"><input type="checkbox" class="checkSingle"></label><a href=""><img src=' + src + ' alt=""></a></li>';
            strr += ' <li class="car-body2"><a href="">' + name + '</a></li>';
            strr += '<li class="car-body3 singlePrice">' + price + '</li>';
            strr += '<li class="car-body4 discount">0.00</li>';
            strr += '<li class="car-body5"><a class="reduce">-</a><span class="singleNum">1</span><a class="add">+</a></li>';
            strr += '<li class="car-body6 subtotal">' + price + '</li>';
            strr += '<li class="car-body7"><a class="remove">移入收藏夹</a><a class="del">删除</a></li>';
            strr += '</ul>';
            $('.core-car .option').append(strr);
            carLogic();
        }
        flagg = true;
    }
})
//购物车代码
function carLogic() {
    function objNode(selector) {
        return document.getElementsByClassName(selector);
    }
    //获取元素
    function require() {
        checkAll = objNode('checkAll');
        allNum = objNode('allNum')[0]; //切记带下标
        allPrice = objNode('allPrice');
        selectNum = objNode('selectNum');
        checkSingle = objNode('checkSingle');
        singlePrice = objNode('singlePrice');
        checkSingle = objNode('checkSingle');
        discount = objNode('discount');
        add = objNode('add');
        singleNum = objNode('singleNum');
        reduce = objNode('reduce');
        subtotal = objNode('subtotal');
        remove = objNode('remove');
        del = objNode('del');
        delAll = objNode('delAll');
        allNum.innerText = checkSingle.length;
        allNum.innerText = checkSingle.length;
    }
    require()
    // 全选时,单选全部选中
    function allXuan() {
        for (var i = 0; i < checkAll.length; i++) {
            checkAll[i].index = i;
            checkAll[i].onclick = function () {
                if (this.index == 0) {
                    checkAll[this.index + 1].checked = checkAll[this.index].checked;
                } else {
                    checkAll[this.index - 1].checked = checkAll[this.index].checked;
                }
                for (var j = 0; j < checkSingle.length; j++) {
                    checkSingle[j].checked = checkAll[this.index].checked;
                }
                zongPriceNum();
            }
        }
    }
    allXuan();
    // 单选时,全选全部选中
    function singleXuan() {
        for (var i = 0; i < checkSingle.length; i++) {
            checkSingle[i].onclick = function () {
                var cont = 0;
                for (var j = 0; j < checkSingle.length; j++) {
                    if (checkSingle[j].checked) {
                        cont++;
                    }
                }
                if (cont == checkSingle.length) {
                    for (var k = 0; k < checkAll.length; k++) {
                        checkAll[k].checked = true;
                    }
                } else {
                    for (var k = 0; k < checkAll.length; k++) {
                        checkAll[k].checked = false;
                    }
                }
                zongPriceNum();
            }
        }
    }
    singleXuan();
    //点击数量变化
    function clickNum() {
        //点击加+号,数量增加
        for (var i = 0; i < add.length; i++) {
            add[i].index = i;
            add[i].onclick = function () {
                numChange(this.index, true);
            }
        }
        //点击加-号,数量减少
        for (var i = 0; i < reduce.length; i++) {
            reduce[i].index = i;
            reduce[i].onclick = function () {
                numChange(this.index, false);
            }
        }
        //点击加或减时提取的代码,并且计算小计
        function numChange(index, flag) {
            var numH = singleNum[index].innerText;
            if (flag == true) {
                numH++;
            } else {
                numH--;
                if (numH < 0) {
                    numH = 0;
                }
            }
            singleNum[index].innerText = numH;
            subtotal[index].innerText = (parseFloat(singlePrice[index].innerText) * numH).toFixed(2);
            zongPriceNum();
        }
    }
    clickNum();
    //计算总价和总数目
    function zongPriceNum() {
        for (var i = 0; i < allPrice.length; i++) {
            var countNum = 0;
            var countPrice = 0;
            for (var j = 0; j < checkSingle.length; j++) {
                if (checkSingle[j].checked) { //必须被调用,值才会变
                    countNum += parseInt(singleNum[j].innerText); //注意一定要加parseInt,不然会变成字符串拼接
                    countPrice += parseFloat(subtotal[j].innerText); //注意一定要加parseFloat,不然会变成字符串拼接  
                }
            }
            selectNum[i].innerText = countNum;
            allPrice[i].innerText = countPrice.toFixed(2);
        }
    }
    zongPriceNum();
    //删除和移出购物车
    function delShop() {
        for (var i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                delRemove(this);
            }
        }

        for (var j = 0; j < remove.length; j++) {
            remove[j].onclick = function () {
                delRemove(this);
            }
        }
    }
    delShop();

    function delRemove(obj) {
        var delObj = obj.parentNode.parentNode.parentNode;
        // console.log(delObj.parentNode.children.length)
        console.log(delObj.parentNode.children.length)
        if (delObj.children.length == 1) {
            delObj.parentNode.removeChild(delObj.parentNode.children[0]); //下标在不停地变化
            delObj.parentNode.removeChild(delObj.parentNode.children[0]);
            delObj.parentNode.removeChild(delObj.parentNode.children[1]); //先删除最后一个,再删倒数第二个
            delObj.parentNode.removeChild(delObj.parentNode.children[0]);
            console.log(delObj.parentNode);
            $('.core-car .none').show(); //页面有商品时的情况
        } else {
            $('.core-car .none').hide(); //页面无商品时的情况
        }
        delObj.removeChild(obj.parentNode.parentNode); //?????????????????为什么不报错
        obj.parentNode.parentNode.children[0].children[0].children[0].checked = false;
        zongPriceNum();
    }

}

//小计,页面每次加载,算小计;
function single(index) {
    subtotal[index].innerText = (parseFloat(singlePrice[index].innerText) * parseInt(singleNum[index].innerText)).toFixed(2);
}
//轮播图
$(document).ready(function () {
    function rote() {
        var clickShu = 0;
        $('.right').click(function () {
            clickShu++;
            if (clickShu >= 11) {
                clickShu = 1;
                $('.pic-car').animate({
                    marginLeft: 0
                }, 0);
            }
            $('.pic-car').stop(true, true).animate({
                marginLeft: -clickShu * 227
            }, 1000);
        })
        $('.left').click(function () {
            clickShu--;
            if (clickShu < 0) {
                clickShu = 9;
                $('.pic-car').animate({
                    marginLeft: -2270
                }, 0);
            }
            $('.pic-car').stop(true, true).animate({
                marginLeft: -clickShu * 227
            }, 1000);
        })
        $('.bottom-car').hover(function () {
                $('.left,.right').show();
            },
            function () {
                $('.left,.right').hide();
            })
    }
    rote();
})