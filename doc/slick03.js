$(function(){
//--------------------------------
const mainSlider=$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    pauseOnHover:false,
    //vertical:true - 아래에서 위로 올라옴 
    fade:true, //- 흐려졌다가 나옴 //
});

let idx=1;
mainSlider.on('afterChange', function(e,s,c){
    console.log(c);
    $('.num').css({backgroundPositionY:-500*idx});
    idx++;//idx=idx+1
})



//----------------------------------
})