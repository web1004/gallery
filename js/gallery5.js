$(document).ready(function(){

  // 라이트박스 열기
  $('.gallery a').click(function(e){
    e.preventDefault();

    let zoomSrc = $(this).attr('href');
    $('.lightbox-overlay').addClass('active');
    $('.lightbox-overlay').find('img').attr('src', zoomSrc);
    $('.lightbox-overlay').find('span').text($(this).attr('data-caption'));
  });

  // 라이트박스 닫기
  $('.lightbox-overlay').click(function(){
    $(this).removeClass('active');
  });

});