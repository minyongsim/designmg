(function(){
    $(window).load(function(){
        $('.introAni').delay(500).fadeOut(500)
    })
   
    $('.depth1').hover(
        function(){
            $(this).find('.depth2')
            .stop().slideDown(700)
        },
        function(){
            $(this).find('.depth2')
            .stop().slideUp(500)
        }
    )


    $('#simBox').load('main.html')
    $('.login_box > a').on('click',function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#simcontainer').remove()
        $('#simBox').load(url)
    })
    
    
})(jQuery)