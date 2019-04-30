$(function () {
    function fun() {
        // $('.guide-nav .dl').children().each(function(){
        //     $(this).children().eq(0).click(function(){
        //         var index = $(this).index();
        //         $('.guide-nav .dl').children().eq(index).slideToggle();
        //     })
        // })
        $('.cur dt').click(function(){
            $('.cur dd').slideToggle();
        })
    }
    fun();


    $('.guide-content .guide-center').first().show();
})