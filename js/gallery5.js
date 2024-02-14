$(document).ready(function(){

  // 라이트박스 열기
  $('.gallery a').click(function(e){
    let zoomSrc = $(this).attr('href');

    $('.lightbox-overlay').addClass('active');
    $('.lightbox-overlay').find('img').attr('src', zoomSrc);
    $('.lightbox-overlay').find('span').text($(this).attr('data-caption'));

    e.preventDefault(); // href 속성 값 때문에 url이 이미지 경로로 연결되는거 방지
  });

  // 라이트박스 닫기
  $('.lightbox-overlay').click(function(){
    $(this).removeClass('active');
  });

});