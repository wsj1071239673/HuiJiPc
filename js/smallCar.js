$(document).ready(function () {
    //点击购物车,导航左移,购物车出现
    function navCkick() {
        $('.righticon .gou').click(function () {
            $('.rnav').animate({
                right: 320
            }, 500);
            $('.small-car').show(500);
        })
        $('.rnav,.small-car').click(function (e) {
            e.stopPropagation();
        })
        // 点击其他地方,隐藏购物车
        $('body').click(function () {
            $('.rnav').animate({
                right: 0
            }, 500);
            $('.small-car').hide(500);
        })
    }
    navCkick();
    $(window).load(function () {
        $.ajax({
            type: 'get',
            url: "api/shopCar/shopCar.php",
            data: {
                type: 0,
                cookie: 'wsj123'
            },
            dataType: "json",
            success: function (data) {
                $.each(data, function (i, val) {
                    var str = '';
                    str += '<ul class="lista clearfix" data-type=' + val.listid + '>';
                    str += '<li class="box"><a href="mate20.html"><img src=' + val.carsrc + ' alt=""></a></li>';
                    str += '<li class="all-car">';
                    str += '<a href="" class="intro">' + val.carname + '</a>';
                    str += '<span>￥</span><span class="danjia">' + val.price + '</span><span>X</span>';
                    str += '<div class="reoption clearfix"><a class="reduce">-</a><span class="singleNum">' + val.num + '</span><a class="add">+</a></div>';
                    str += '<a class="del">删除</a>';
                    str += '</li>';
                    str += '</ul>';
                    $('.small-car .option').append(str);
                })
                carLogic();
                //点击减号时,发送ajax,改变数据库数据,页面渲染时,还是点击过后的内容
                $('.small-car .reduce').click(function () {
                    var num = $(this).next().html(); //不许减一,因为先执行内容变化,在执行获取内容
                    var listid = $(this).parent().parent().parent().data('type');
                    carAjax(1, 'wsj123', listid, num);
                })
                //点击加号时,发送ajax,改变数据库数据,页面渲染时,还是点击过后的内容
                $('.small-car .add').click(function () {
                    console.log(1)
                    var num = $(this).prev().html();
                    var listid = $(this).parent().parent().parent().data('type');
                    carAjax(1, 'wsj123', listid, num);
                })
                //点击删除时,删掉对应的数据;
                $('.small-car .del').click(function () {
                    var listid = $(this).parent().parent().data('type');
                    carAjax(2, 'wsj123', listid, 0);
                })
                //点击加减时发送ajax
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
            }
        })
    })
});

function carLogic() {
    function objNode(selector) {
        return document.getElementsByClassName(selector);
    }

    function acquire() {
        allPrice = objNode('all-price')[0];
        singlePrice = objNode('danjia');
        add = objNode('add');
        singleNum = objNode('singleNum');
        reduce = objNode('reduce');
        del = objNode('del');
        allNum = objNode('num-zong')[0];
        lista = objNode('lista');
    }
    acquire();

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
        // 点击加或减时提取的代码
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
            zongPriceNum(); //必须调用     
        }
    }
    clickNum();
    //计算总价和总数目
    function zongPriceNum() {
        var countNum = 0;
        var countPrice = 0;
        console.log(lista.length)
        for (var i = 0; i < lista.length; i++) {
            countNum += parseInt(singleNum[i].innerText); //注意一定要加parseInt,不然会变成字符串拼接
            countPrice += (parseFloat(singlePrice[i].innerText).toFixed(2)) * parseInt(singleNum[i].innerText); //注意一定要加parseFloat,不然会变成字符串拼接  
        }
        console.log(countNum)
        allNum.innerText = countNum;
        allPrice.innerText = countPrice.toFixed(2);
    }
    zongPriceNum();

    function delEl() {
        for (var i = 0; i < del.length; i++) {
            del[i].onclick = function () {
                var delObj = this.parentNode.parentNode.parentNode;
                if (delObj.children.length == 1) {
                    delObj.parentNode.removeChild(delObj.parentNode.children[0]); //下标在不停地变化
                    delObj.parentNode.removeChild(delObj.parentNode.children[1]);
                    delObj.parentNode.removeChild(delObj.parentNode.children[0]); //先删除最后一个,再删倒数第二    
                    $('.small-car .none').show();
                } else {
                    $('.small-car .none').hide();
                }
                delObj.removeChild(this.parentNode.parentNode);
                zongPriceNum();
            }
        }
    }
    delEl();
    // 初始化,无商品
    function init() {
        if ($('.small-car .option ').children().length == 0) {
            $('.small-car .bottom,.small-car .small-head').hide();
            $('.small-car .none').show();
        } else {
            $('.small-car .none').hide();
            $('.small-car .bottom,.small-car .small-head').show();
        }
    }
    init()
}
carLogic()