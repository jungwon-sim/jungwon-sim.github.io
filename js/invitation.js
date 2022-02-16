/*background*/
$(document).ready(function(){
    


    function WindowSize(){
        var windowWD = $(window).width()
        var windowHT = $(window).height()
        $('#inv').width(windowWD);
        $('#inv').height(windowHT * 2);        
    };

    console.log,WindowSize();
   
    $(window).resize(function(){
        WindowSize();
    });

    var BackText = 'INVITAION';
    var BackTextRe = BackText.repeat(800);
    $('#inv').text(BackTextRe); 


 
    $(document).ready(function () {
        $('.fullpage_area').fullpage({
            sectionsColor : ['orange','red','green', 'darkviolet'],
            menu : '.menu',
            anchors : ['aa','bb','cc','dd']
        });

    })
})