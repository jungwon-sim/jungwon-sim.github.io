/*background*/
$(document).ready(function(){
    


    function WindowSize(){
        var windowWD = $(window).width()
        var windowHT = $(window).height()
        $('#inv').width(windowWD);
        $('#inv').height(windowHT * 2);  
        $('.b').css('margin-top',windowHT)   
    };

    console.log,WindowSize();
   
    $(window).resize(function(){
        WindowSize();
    });

    var BackText = 'INVITAION';
    var BackTextRe = BackText.repeat(800);
    $('#inv').text(BackTextRe); 

    $('.next').click(function(){
            $('.one').fadeOut();
            $('.two').fadeIn();     
        
    })


})