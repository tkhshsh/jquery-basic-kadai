//function関数で関数内にある色々な処理を行うよ
$(function(){
    //change-colorというIDをHTMLから取得し、クリックすると
    $('#change-color').on('click',function(){
        //targetというIDであるこんにちは！の色をピンクにするよ
        $('#target').css('color','pink');
    });
    $('#change-text').on('click',function(){
        //textでHello！に変更するよ
        $('#target').text('ひなちんめんこちん')
    });
    $('#fade-out').on('click',function(){
        $('#target').fadeOut();
    });
    $('#fade-in').on('click',function(){
        $('#target').fadeIn();
    });
});