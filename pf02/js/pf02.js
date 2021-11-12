$ (function(){
    $('#top_banner .container i').on('click', function(){
        $(this).parent().parent().slideUp();
    });

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        pauseOnHover:false,
        dots:true,
        vertical:false,
        //dotsClass:"slick-dots"
    });

    $('#visual span.left').on('click',function(){
        $('.main_slider').slick('slickPrev')
    });
    $('#visual span.right').on('click',function(){
        $('.main_slider').slick('slickNext')
    });

    $('.pr_slider').slick({
        arrows:false,
        autoplay:true,
        slidesToShow: 5,
        dots:true,
    });
    
 
})