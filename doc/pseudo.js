$(function(){
    // ---------------------------------------------
    
    var num=0;
    
    function numc() {
        // console.log(num);
        $('#sec11 figure').eq(num).addClass('on').siblings().removeClass('on')
        num++;
        if (num>4) num=0;
    };
    
    setInterval(numc,2000)
    // setInterval()
    
    var snum=0;
    
    function move() {
        $('.move').css({left:-snum*500});
        snum++;
        if (snum>2) snum=0;
    }
    setInterval(move,3000);
    
    // ---------------------------------------------
    });