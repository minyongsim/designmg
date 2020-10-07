(function ($) {

    $(window).load(function () {
        $('.introAni').delay(1000).fadeOut(1000)
    })

    init()
    var flag = true

    function init() {
        var ww = $(window).width()
        if (ww > 767) {
            $('html').addClass('pc').removeClass('mobile')
            if (flag) {
                $('.topmenu .menubox').show()
                $('.open_nav, .close_nav, .depth2').hide()
                flag = false
            }
        } else if (ww < 767) {
            $('html').addClass('mobile').removeClass('pc')
            if (!flag) {
                $('.topmenu .open_nav').show()
                $('.menubox, .depth2,.decobox').hide()
                flag = true
            }
        }
    }

    $(window).resize(function () {
        init()
    })

    // pc 화면 에서 메뉴 호버 했을때 이벤트
    $('.depth1 > li').hover(
        function () {
            if ($('html').hasClass('pc')) {
                $('.depth2, .decobox').stop().slideDown(300)
            }
        },
        function () {
            if ($('html').hasClass('pc')) {
                $('.depth2, .decobox').stop().slideUp(300)
            }
        }
    )


    $('#simBox').load('main.html')
    $('.login_box > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#simcontainer').remove()
        $('#simBox').load(url)
    })

    $('#simBox').load('main.html')
    $('.depth1 > li > .depth2 > li > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#simcontainer').remove()
        $('#simBox').load(url)
    })

    var sflag = true;
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
        if (sct >= 100 && sflag) {
            $('#header').css({
                position: 'fixed',
                opacity: '0',
                height: '0px',
                backgroundColor: 'rgba(255,255,255,0.9)'
            }).stop().animate({
                height: '100px',
                opacity: '1',
            }, 500)
            sflag = false;
        } else if (sct === 0 && !sflag) {
            $('#header').css({
                position: 'relative',
                height: '0',
                opacity: '0'
            }).stop().animate({
                opacity: 1,
                height: '100px',
                backgroundColor: 'rgba(255,255,255,1)'
            }, 500)
            sflag = true
        }
    });

    // 클릭시 네비 박스 열고 닫기 버튼 나타나기
    $('.topmenu .open_nav').on('click', function () {
        $(this).next().stop().slideDown(300)
        $(this).hide()
        $(this).nextAll('.close_nav').show()
    })


    // 닫기버튼 클릭시 네비박스 사라지기
    $('.topmenu .close_nav').on('click', function () {
        $(this).prevAll('.menubox').stop().slideUp(300)
        $(this).hide()
        $(this).prevAll('.open_nav').show()
        // $('.depth1, .depth2').hide()
        // $('.topmenu .menubox .depth1 > li').removeClass('on')
    })


    $('.depth1 > li').on('click', function () {
        if ($('html').hasClass('mobile')) {
            $(this).find('.depth2').stop().slideToggle(300)
            $(this).siblings().find('.depth2').stop().slideUp(300)
        }
    })



    $(window).scroll(function () {
        var sct = $(this).scrollTop()
        var biz01 = $('.business_info').offset().top - $(this).height() / 2
        if (sct >= biz01) {
            $('.business_info').addClass('on')
        } else if (sct === 0) {
            $('.business_info').removeClass('on')
        }
        var biz02 = $('.business_info02').offset().top - $(this).height() / 2
        if (sct >= biz02) {
            $('.business_info02').addClass('on')
        } else if (sct === 0) {
            $('.business_info02').removeClass('on')
        }
        var biz03 = $('.biz_box').offset().top - $(this).height() / 2
        if (sct >= biz03) {
            $('.biz_box').addClass('on')
        } else if (sct === 0) {
            $('.biz_box').removeClass('on')
        }
        var portfolio = $('.portfolio').offset().top - $(this).height() / 2
        if (sct >= portfolio) {
            $('.portfolio').addClass('on')
        } else if (sct === 0) {
            $('.portfolio').removeClass('on')
        }
    })








})(jQuery)