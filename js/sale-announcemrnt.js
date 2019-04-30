$(function () {
    var x = 0;
    $('.imgbanner .bg li').first().show();
    $('.imgbanner .sp span').first().show();
    $('.circle li').eq(0).css({ background: '#b0aca4' });
    $('.imgbanner .rt').click(function () {
        x++;
        if (x > $('.imgbanner .bg li').length - 1) {
            x = 0;
        }
        fadeInOut(x);
    })
    $('.imgbanner .lt').click(function () {
        x--;
        if (x < 0) {
            x = $('.imgbanner .bg li').length - 1;
        }
        fadeInOut(x);

    })
    $('.circle li').click(function () {
        x = $(this).index();
        fadeInOut(x);
    })
    function fadeInOut(x) {
        $('.imgbanner .bg li').eq(x).fadeIn().siblings().fadeOut();
        $('.circle li').eq(x).css({ background: 'rgba(255,255,255,0.5)' }).siblings().css({ background: '#b0aca4' });
        $('.imgbanner .sp span').eq(x).fadeIn().siblings().fadeOut();
    }


    //目录
    $('.director ul li').eq(0).hover(
        function () {
            $('.director ul li .ig1').css({ backgroundPosition: '-20px 0' });
            $('.director ul li a.cur1').css({ color: '#39f' });
            $('.director ul li em.d1').css({ display: 'block' });
        },
        function () {
            $('.director ul li .ig1').css({ backgroundPosition: '0 0' });
            $('.director ul li a.cur1').css({ color: '#333' });
            $('.director ul li em.d1').css({ display: 'none' });
        }
    )
    $('.director ul li').eq(1).hover(
        function () {
            $('.director ul li .ig2').css({ backgroundPosition: '-20px -16px' });
            $('.director ul li a.cur2').css({ color: '#39f' });
            $('.director ul li em.d2').css({ display: 'block' });
        },
        function () {
            $('.director ul li .ig2').css({ backgroundPosition: '0 -16px' });
            $('.director ul li a.cur2').css({ color: '#333' });
            $('.director ul li em.d2').css({ display: 'none' });
        }
    )
    $('.director ul li').eq(2).hover(
        function () {
            $('.director ul li .ig3').css({ backgroundPosition: '-20px -32px' });
            $('.director ul li a.cur3').css({ color: '#39f' });
            $('.director ul li em.d3').css({ display: 'block' });
        },
        function () {
            $('.director ul li .ig3').css({ backgroundPosition: '0 -32px' });
            $('.director ul li a.cur3').css({ color: '#333' });
            $('.director ul li em.d3').css({ display: 'none' });
        }
    )
    $('.director ul li').eq(3).hover(
        function () {
            $('.director ul li .ig4').css({ backgroundPosition: '-20px -48px' });
            $('.director ul li a.cur4').css({ color: '#39f' });
            $('.director ul li em.d4').css({ display: 'block' });
        },
        function () {
            $('.director ul li .ig4').css({ backgroundPosition: '0 -48px' });
            $('.director ul li a.cur4').css({ color: '#333' });
            $('.director ul li em.d4').css({ display: 'none' });
        }
    )
    $('.director ul li').eq(4).hover(
        function () {
            $('.director ul li .ig5').css({ backgroundPosition: '-20px -64px' });
            $('.director ul li a.cur5').css({ color: '#39f' });
            $('.director ul li em.d5').css({ display: 'block' });
        },
        function () {
            $('.director ul li .ig5').css({ backgroundPosition: '0 -64px' });
            $('.director ul li a.cur5').css({ color: '#333' });
            $('.director ul li em.d5').css({ display: 'none' });
        }
    )

    // 手机新品特效
    $('.newss ul li h6').children().each(function () {
        var i = $(this);
        $(this).hover(
            function () {
                $(i).css({ textDecoration: 'underline' });
            },
            function () {
                $(i).css({ textDecoration: 'none' });
            }
        )
    })
})