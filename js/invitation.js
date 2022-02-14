/*background*/
$(document).ready(function(){
    
    function WindowSize(){
        var windowWD = $(window).width()
        var windowHT = $(window).height()
        $('#inv').width(windowWD);
        $('#inv').height(windowHT);        
    };

    console.log,WindowSize();
   
    $(window).resize(function(){
        WindowSize();
    });

    var BackText = 'INVITAION';
    var BackTextRe = BackText.repeat(800);
    $('#inv').text(BackTextRe); 


})