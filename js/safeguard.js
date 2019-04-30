$(function () {
    $('.wrapper').children().each(function () {
        var i = $(this);
        $(this).children().eq(0).children().click(function () {
            var index = $(this).index();
            $('.wrapper').children().eq(index).css({ display: 'block' });
            $(i).css({ display: 'none' });
        })
    })
})