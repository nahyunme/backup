$(function(){

    $("#movie01").YTPlayer(
        {videoURL:'https://www.youtube.com/embed/ggi62WzYfsY',
        containment:'#movie01',
        autoPlay:true, 
        startAt:0, 
        opacity:1,
        showControls:false,
        mute:true,
    });

});