(function($){

$('*').css({
    outline:'none'
})
$('form').on('submit',function(){  // submit 이벤트는 폼에서 발생함
        
    // 아이디 유효성 체크 : 글자수는 3~5, 특수문자제외
    var idtxt = $('#name_idl').val()   // tsalt
    if ( idtxt.length>=3 && idtxt.length<=5 ) {
        for ( var i=0; i<idtxt.length; i++ ) {
            var ch = idtxt.charAt(i);
            if ( !(ch>='0' && ch<='9') && !(ch>='a' && ch<='z') && !(ch>='A' && ch<='Z')  ) {
                alert('아이디는 대소문자, 숫자만 가능합니다.')
                $('#name_idl').css({
                    border:'1px solid #f00'
                })
                $('#name_idl').focus()
                $('#name_ldl').select()
                return false
            }
        }
    } else {
        alert('아이디는 3~5글자 범위입니다.')
        $('#name_idl').css({
            border:'1px solid #f00'
        })
        $('#name_idl').focus()
        $('#name_idl').select()
        return false
    }


    // 이름은 한글만 입력(정규표현식 p.612~p.613)
    // ^ : 시작 표시
    // $ : 끝 표시
    // + : 한번 이상 포함
    // 정규표현식.test(입력한내용) : 정규표현식에 맞는지 내용을 검사


    // 이메일 유효성 체크
    var email = $('#email_lbl').val()
    var emailchk = /^[a-zA-Z0-9]+$/   // 특수문제 제외 
    if ( !emailchk.test(email) ) {
        alert('이메일 형식이 틀립니다.')
        $('#email_lbl').focus()
        $('#email_lbl').select()
        return false
    }

    // 도메인타입 유효성 체크
    var domain = $('#domain').val()
    var domainchk = /^[a-zA-Z0-9]+[\.][a-z]+$/
    if ( domain.length === 0 ) {
        alert('도메인을 선택해 주세요.')
        $('#domainType').focus()
        return false
    } else {
        if ( !domainchk.test(domain) ) {
            alert('형식에 맞지 않습니다.')
            $('#domainType').focus()
            return false
        }
    }
    

    // 비밀번호 유효성체크 : 첫글자는 대소문자만, 반드시 숫자와 특수문자를 1개 이상 조합해서 10~12글자 범위
    var pass1 = $('#pass1').val()
    var pass2 = $('#pass2').val()
    var check1 = /^(?=[a-zA-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    // ?= : 처음부터 조사
    // . : 임의의 모든 문자(숫자, 특수문자, 대소문자)
    // * : 0번 이상 나올 수 있음
    // ^ : 대괄호([]) 안의 ^는 not을 의미함
    if ( pass1.length>=10 && pass1.length<=12 ) {
        if ( !check1.test(pass1) ) {
            alert('비밀번호 첫글자는 영문대소문자만 허용하며, 반드시 숫자와 특수문자를 1개 이상 조합해주세요.')
            $('#pass1').css({
                border:'1px solid #f00'
            })
            $('#pass1').focus()
            $('#pass1').select()
            return false
        }
    } else {
        alert('비밀번호 글자수는 10글자~12글자 범위입니다.')
        $('#pass1').css({
            border:'1px solid #f00'
        })
        $('#pass1').focus()
        $('#pass1').select()
        return false
    }

    // 비밀번호와 비밀번호 확인 일치여부 점검
    // 비밀번호 확인란이 비어있으면 "비밀번호 확인을 입력하지 않았습니다." 경고창 띄우고, 나머지는 다른 오류표시 동일하게 할것
    // 일치하지 않으면 "비밀번호를 정확히 입력해 주세요" 경고창 띄우고, 나머지는 다른 오류표시와 동일하게 할것
    if ( pass2.length === 0 ) {
        alert('비밀번호 확인을 입력하지 않았습니다.') 
        $('#pass2').css({
            border:'1px solid #f00'
        })
        $('#pass2').focus()
        $('#pass2').select()
        return false
    } else if ( pass1 !== pass2 ) {
        alert('비밀번호를 정확히 입력해 주세요.') 
        $('#pass2').css({
            border:'1px solid #f00'
        })
        $('#pass2').focus()
        $('#pass2').select()
        return false
    }

    // 성별을 선택하지 않으면 '성별을 선택해 주세요'라는 문구를 .gender에 표시하고 글자색상을 #f00 할 것
    // 성별을 선택하고 나면 .gender의 문구를 '성별'로 표시하고 글자색상을 #000으로 할 것
    var gender = $('input[name="gender"]:checked').length  // 체크된 라디오버튼 갯수 추출
    if (gender === 0) {
        $('.gender').text('성별을 선택해 주세요').css({  color:'#f00'  })
        return false
    } else {
        $('.gender').text('성별').css({  color:'#000'  })
    }

    // 휴대폰번호, 첫번째칸은 01(0~9), 두번째칸은 숫자 3~4개, 세번째칸은 숫자 4개
    var tel1 = $('#tel1').val()
    var tel2 = $('#tel2').val()
    var tel3 = $('#tel3').val()
    if ( !/^01\d{1}$/.test(tel1)  ) {
        alert('전화번호 형식이 맞지 않습니다.')
        $('#tel1').focus()
        $('#tel1').select()
        return false
    } else if ( !/^\d{3,4}$/.test(tel2) ) {
        alert('전화번호 형식이 맞지 않습니다.')
        $('#tel2').focus()
        $('#tel2').select()
        return false
    } else if ( !/^\d{4}$/.test(tel3)  ) {
        alert('전화번호 형식이 맞지 않습니다.')
        $('#tel3').focus()
        $('#tel3').select()
        return false
    }




    return false  // 유효성 체크후에는 제거할 것
})


// 연령에 따라 좋아하는 술 이름을 입력할 수 있도록 활성화시키고, 10대이면 비활성상태로 만들것
$('select[name="age"]').on('change', function(){
    if (  $(this).find('option:selected').val() === "10대" || $(this).find('option:selected').val() === "title"  ) {
        $('.wine').attr({
            disabled:'disabled'
        })
    } else {
        $('.wine').removeAttr('disabled')
    }
})

// 스킬에서 전부체크 체크 여부에 따라 나머지 체크박스들을 동일하게 제어하기
// prop('checked') : 체크여부 파악, checked이면 true, checked 안돼 있으면 false
$('#all').on('click', function(){
    var bool = $(this).prop('checked')
    $('.skill > input:checkbox').prop('checked', bool)
})


// 생년월일에 datepicker 연결하기
$('#birth').datepicker({  // jqueryui.com 에서 파일 다운받아 ui.css, ui.js, images만 복사하기
    dateFormat:'yy-mm-dd', // 날짜형식
    changeMonth:'true',    // 월 선택
    changeYear:'true',     // 연도 선택
    yearRange:'1900:2020'  // 연도 범위
})



$('input').focus(function(){
    $(this).css({
        background:'pink'
    })
}).blur(function(){
    if ( $(this).val().length === 0 ) {
        $(this).css({
            border:'1px solid #f00',
            background:''
        })
    } else {
        $(this).css({
            border:'1px solid #ddd',
            background:''
        })
    }
})


// id입력상자만 포커스 했을때 뒤에 "필수항목입니다." 문구 표시하기
$('#idtxt').focus(function(){
    $(this).after('<strong>필수항목입니다.</strong>')
}).blur(function(){
    $(this).next().remove()
})

// 비밀번호 칸에 포커스했을때  #warning에 '비밀번호 첫글자는 영문대소문자만 허용하며, 반드시 숫자와 특수문자를 1개 이상 조합해주세요.' 문구 표시
$('#pass1').focus(function(){
    $(this).next().text('비밀번호 첫글자는 영문대소문자만 허용하며, 반드시 숫자와 특수문자를 1개 이상 조합해주세요.')
}).blur(function(){
    $(this).next().text('')
})


// 파일선택 에 마우스오버 했을 때 뒤에 "업로드 가능한 파일은 1MB 이하입니다." 문구 표시(strong 태그 사용)
// 마우스아웃하면 위의 문구 제거하기
$('input[type=file]').hover(
    function(){
        $(this).after('<strong>업로드 가능한 파일은 1MB 이하입니다.<strong>')
    },
    function(){
        $(this).next().remove()
    }
)

// textarea 박스에서 키보드이벤트(keydown, keyup, keypress) 입력된 글자수를 카운트해서 남은글자 표시하기
$('textarea').on('keyup', function(){
    var maxlen = 10
    var count = $(this).val().length
    var remain = maxlen - count
    $(this).next().text(remain)
})


// 이메일 도메인 선택을 변경(change())했을때 변경한 내용으로 채우기
$('#domainType').on('change', function(){
    $('#domainType option:selected').each(function(){
        if( $(this).val()==='title' ) {
            $('#domain').val('')
            $('#domain').attr('disabled', true)
        } else if ( $(this).val()==='self' ) {
            $('#domain').val('')
            $('#domain').attr('disabled', false)
        } else {
            $('#domain').val( $(this).val() )
            $('#domain').attr('disabled', true)
        }
    })
})







})(jQuery)