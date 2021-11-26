$ (function(){

    $('.main_slider').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
        
    });

    
    $('#main_visual i.xi-arrow-left').on('click', function(){
        $('.main_slider').slick('slickPrev');
    });
    $('#main_visual i.xi-arrow-right').on('click', function(){
        $('.main_slider').slick('slickNext');
    });

    
    //$('.container_slider').slick({
        autoplay:true
    
    //


    $('.cn_slider').slick({
        arrows:false,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:2000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
    $('.cn_slider figure').eq(4).addClass('on');
    $('.cn_slider').on('afterChange', function(e,s,c){
        $('.cn_slider figure').eq(c+4).addClass('on').siblings().removeClass('on');
        $('#section02 .slide_bar>span').css({left:c*69.2})
    });
    
})