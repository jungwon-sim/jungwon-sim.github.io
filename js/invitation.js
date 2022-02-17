/*background*/
$(document).ready(function(){
    


    function WindowSize(){
        var windowWD = $(window).width()
        var windowHT = $(window).height()
        $('#inv').width(windowWD);
        $('#inv').height(windowHT * 2);  
        $('.b').height(windowHT);  
        $('.a').height(windowHT);  
    };

    console.log,WindowSize();
   
    $(window).resize(function(){
        WindowSize();
    });

    var BackText = 'INVITAION';
    var BackTextRe = BackText.repeat(500);
    $('#inv').text(BackTextRe); 





    $('.next').click(function(){
        var anText_sub1 = document.getElementById('who').value;
        if(anText_sub1 == '배서진' ){
            $('.one').fadeOut();
            $('.two').fadeIn();     
        }else{
            if(anText_sub1 == '서보람' ){
            $('.one').fadeOut();
            $('.two').fadeIn();
            }else{
                alert('초대받지 못한 휴먼입니다.</br>다음 기회에 도전하세요')}
        }
    })

    $('.place').html('장소</br>독산동 953 삼부르네상스 플러스 1020호</br>시간</br>언제오실텨?');
    return false;

})