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

})