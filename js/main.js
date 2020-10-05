(function ($) {

    $('.slide_inner').slick({
        autoplay: true, // 자동재생
        dots: true, //동그라미 버튼
        autoplaySpeed: 4500, // 슬라이드 재생 시간
        speed:1000, // 바뀌는 시간
        slidesToShow: 1, //보여질 슬라이드 수(생략가능)
        slldesToScroll: 1, //이동 슬라이드 수(생략가능)
        pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
        pauseOnDotHover: false, //동그라미 버튼에 호버시 자동실행 멈춤여부
        pauseOnFocus: true, //동그라미 버튼에 클릭시 자동실행 멈춤여부
        cssEase: 'ease', //속도함수 (생략가능)
        draggdle: true, //마우스 드래그시 슬라이드 교체가능 (생략가능)
        fade: true, //슬라이드 수평으로 이동하지 않고 제자리에서 사라지고 나타남
        arrows: true, // 좌우 화살표 사용여부
        prevArrow: '<button class="marrow prevArrow"><i class="fas fa-angle-left"></i></button> ',
        nextArrow: '<button class="marrow nextArrow"><i class="fas fa-angle-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
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
    
    
    
    $('.business_info .business_box > li > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#simcontainer').remove()
        $('#simBox').load(url)
    })
    $('.slide_side .side_link > li > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#simcontainer').remove()
        $('#simBox').load(url)
    })
    $('.vbox > a').on('click',function(e){
        e.preventDefault()
        var href =$(this).attr('href')
        $('.vouter').show()
        $('.vinner iframe').attr('src',href)

     })
     $('.close').on('click',function(){
         $('.vouter').hide()
         $('.vinner iframe').attr('src','')
     })
     
  

})(jQuery)