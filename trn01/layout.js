$(function(){
//------------------------

// $(window).on("scroll", function(){
//     if ($(window).scrollTop() > 0) {
//         $('.header').addClass('on')
//     } else {
//         $('.header').removeClass('on') 
//     }
// })

$(window).on('scroll', function(){
    var sct=$(window).scrollTop(); // 변수 - var, let, const
    sct > 0 ? $('.header').addClass('on') : $('.header').removeClass('on') //삼항조건식
    if(sct > 0) {
        $('.header').addClass('on')
    } else {
        $('.header').removeClass('on')
    }
})



$('.main_slider').slick({
    arrows:false,
    fade:true,
    dots:true,
    autoplay:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});







//---------------------
});