
// 로딩화면 구현
window.addEventListener('load', function () {
  setTimeout(function () {
    var loadingPage = document.querySelector('.loading-page');
    if (loadingPage) {
      loadingPage.style.transition = 'opacity 0.4s ease';
      loadingPage.style.opacity = '0';
      setTimeout(function () {
        loadingPage.style.display = 'none';
      }, 400); // fade out 시간만큼 기다린 후 display: none 처리
    }
  }, 4000); // 4초 delay
});



$(document).ready(function() {
  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
      $(".loading-page .counter hr").css("width", c + "%");
      //$(".loading-page .counter").css("background", "linear-gradient(to right, #f60d54 "+ c + "%,#0d0d0d "+ c + "%)");

    /*
    $(".loading-page .counter h1.color").css("width", c + "%");
    */
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
    }
  }, 40);
});




// 마우스 커서

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// 메뉴 버튼 효과
$(function() {
  $('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $(".sitemap").toggle();
  });     
});

// 메인 스크롤 텍스트

let text1 = document.querySelector('.scroll_txt01');
let text2 = document.querySelector('.scroll_txt02');

document.addEventListener('scroll', function(){
  text1.style.left = Math.max( -10 + 0.05  * window.scrollY,-50) + '%';
   text2.style.left = Math.max( +80 - 0.09  * window.scrollY,-100) + '%';
  
});

// 서브 탭메뉴

var tabBtn = $("#tab-btn > ul > li");     //각각의 버튼을 변수에 저장
var tabCont = $("#tab-cont > div");       //각각의 콘텐츠를 변수에 저장

//컨텐츠 내용을 숨겨주세요!
tabCont.hide().eq(0).show();

tabBtn.click(function(){
  var target = $(this);         //버튼의 타겟(순서)을 변수에 저장
  var index = target.index();   //버튼의 순서를 변수에 저장
  //alert(index);
  tabBtn.removeClass("active");    //버튼의 클래스를 삭제
  target.addClass("active");    //타겟의 클래스를 추가
  tabCont.css("display","none");
  tabCont.eq(index).css("display", "block");
});



// 위에 텍스트 스크롤 안먹음

// $('html, body').css({'overflow': 'hidden', 'height': '100%'}); // 모달팝업 중 html,body의 scroll을 hidden시킴
// $('#element').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지
//   event.preventDefault();
//   event.stopPropagation();

// return false;
// });





