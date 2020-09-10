(function(){

  

    $('#simBox').load('main.html')
    $('.login_box > a').on('click',function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#simcontainer').remove()
        $('#simBox').load(url)
    })
    
    
})(jQuery)