(function ($) {

    $('.slide_inner').slick({
        autoplay: true, // 자동재생
        dots: true, //동그라미 버튼
        autoplaySpeed: 4500, // 슬라이드 재생 시간
        slidesToShow: 1, //보여질 슬라이드 수(생략가능)
        slldesToScroll: 1, //이동 슬라이드 수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotHover: false, //동그라미 버튼에 호버시 자동실행 멈춤여부
        pauseOnFocus: true, //동그라미 버튼에 클릭시 자동실행 멈춤여부
        cssEase: 'ease', //속도함수 (생략가능)
        draggdle: true, //마우스 드래그시 슬라이드 교체가능 (생략가능)
        fade: false, //슬라이드 수평으로 이동하지 않고 제자리에서 사라지고 나타남
        arrows: true, // 좌우 화살표 사용여부
        prevArrow: '<button class="marrow prevArrow"><i class="fas fa-angle-left"></i></button> ',
        nextArrow: '<button class="marrow nextArrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 801,
            settings: {
                arrows: false,
                fade: true,
            }
        }]

    })
    $('.plpa').toggle(
        function () {
            $(this).find('i').removeClass('fa-pause')
                .addClass('fa-play')
            $('.slide-inner').slick('slickPause')
        },
        function () {
            $(this).find('i').removeClass('fa-play')
                .addClass('fa-pause')
            $('.slide-inner').slick('slickPlay')
        })
    $(window).scroll(function () {
        var sct = $(this).scrollTop()
        var biz01 = $('.business_info').offset().top - $(this).height() / 2
        if (sct >= biz01) {
            $('.business_info').addClass('on')
        } else {
            $('.business_info').Class('on')
        }
        var biz02 = $('.business_info02').offset().top - $(this).height() / 2
        if (sct >= biz02) {
            $('.business_info02').addClass('on')
        } else {
            $('.business_info02').removeClass('on')
        }
        var biz03 = $('.biz_box').offset().top - $(this).height() / 2
        if (sct >= biz03) {
            $('.biz_box').addClass('on')
        } else {
            $('.biz_box').removeClass('on')
        }
        var portfolio = $('.portfolio').offset().top - $(this).height() / 2
        if (sct >= portfolio) {
            $('.portfolio').addClass('on')
        } else {
            $('.portfolio').removeClass('on')
        }
    })

    
    $('.business_info .business_box > li > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#simcontainer').remove()
        $('#simBox').load(url)
    })





})(jQuery)