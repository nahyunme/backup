$(function(){
//---------------매인 슬라이드-----------------
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
});


//스크롤할 때 헤드변경 addclass

$(window).on('scroll',function(){
    var sct=$(window).scrollTop();
    console.log(sct);
    if(sct>0) {
        $('#header').addClass('on')
    }else{
        $('#header').removeClass('on')
    }
    //$('#header').addClass('on')
});

//제품 슬라이드 

$('.pr_slider').slick({
    arrows:false,
    autoplay:true,
    slidesToShow: 5,
    dots:true,
});

$('#content01 .btn i.xi-arrow-left').on('click', function(){
    $('.pr_slider').slick('slickPrev');
});
$('#content01 .btn i.xi-arrow-right').on('click', function(){
    $('.pr_slider').slick('slickNext');
});

//----------------------------------
})