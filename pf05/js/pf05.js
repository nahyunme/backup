$(function(){
    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
    });

    $('.mopen').on('click',function(){
        $(this).toggleClass('on');
        $('.gnb').toggleClass('on');
    });

    $('.gnb>ul>li>a').on('click', function(){
        if($('nav').hasClass('on')) {
            $(this).next().stop().slideToggle();
            $(this).parent().siblings().find('.depth02').slideUp();
        }
    });
})