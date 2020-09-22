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
   
    $('#simBox').load('main.html')
    $('.depth1 > li > .depth2 > li > a').on('click',function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#simcontainer').remove()
        $('#simBox').load(url)
    })
    

    var flag = true;
    $(window).on('scroll', function () {
        var scollSize = $(document).height() - $('#header').height() - $(window).height();
        var sct = $(this).scrollTop();
        var wid = (sct / scollSize) * 100 + '%';
        // $('.scrolling-bar')
        //     .css({
        //         zIndex: 999999999999,
        //         opacity: 1,
        //         width: wid
        //     });

        // 스크롤탑값에 따라 헤더구역 고정시키기
        if (sct >= 100 && flag) {
            $('#header').css({
                position: 'fixed',
                opacity: '0',
                height: '0px',
                backgroundColor: 'rgba(255,255,255,0.9)'
            }).stop().animate({
                height: '100px',
                opacity: '1',
            }, 500)
            flag = false;
        } else if (sct === 0 && !flag) {
            $('#header').css({
                position: 'relative',
                height: '0',
                opacity: '0'
            }).stop().animate({
                opacity: 1,
                height: '100px',
                backgroundColor: 'rgba(255,255,255,1)'
            }, 500)
            flag = true
        }
    });
    $(window).scroll(function () {
        var sct = $(this).scrollTop()
        var biz01 = $('.business_info').offset().top - $(this).height() / 2
        if (sct >= biz01) {
            $('.business_info').addClass('on')
        } else if (sct===0) {
            $('.business_info').Class('on')
        }
        var biz02 = $('.business_info02').offset().top - $(this).height() / 2
        if (sct >= biz02) {
            $('.business_info02').addClass('on')
        }else if (sct===0){
            $('.business_info02').removeClass('on')
        }
        var biz03 = $('.biz_box').offset().top - $(this).height() / 2
        if (sct >= biz03) {
            $('.biz_box').addClass('on')
        }else if (sct===0){
            $('.biz_box').removeClass('on')
        }
        var portfolio = $('.portfolio').offset().top - $(this).height() / 2
        if (sct >= portfolio) {
            $('.portfolio').addClass('on')
        }else if (sct===0){
            $('.portfolio').removeClass('on')
        }
    })
    





    
    
})(jQuery)