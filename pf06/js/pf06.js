$(function(){

    $('#main').fullpage({
        anchors:['con01', 'con02', 'con03', 'con04'],
        //navigation: true,
        afterLoad: function(origin, destination, direction){
            var idx=destination.index;
            console.log(idx);
            $('.section').eq(idx).addClass('on').siblings().removeClass('on');
        },
    });
    

//-------------------------------------------------
});