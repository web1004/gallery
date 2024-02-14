$(document).ready(function(){

  $(".thumbs img").click(function(){
    // 썸네일 이미지에 active 클래스 넣고 빼기
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    // 큰이미지 src 속성 변경하기
    let imageSrc = $(this).attr('src');
    $("#largeImg>img").attr({"src":imageSrc}).hide().fadeIn();
  });

  
  //기본방법
  /* $(".thumbs img").eq(0).click(function(){
    $("#largeImg>img").attr({"src":"image/bg0.jpg"});
    return false;
  });
  $(".thumbs img").eq(1).click(function(){
    $("#largeImg>img").attr({"src":"image/bg1.jpg"});
    return false;
  });
  $(".thumbs img").eq(2).click(function(){
    $("#largeImg>img").attr({"src":"image/bg2.jpg"});
    return false;
  });
  $(".thumbs img").eq(3).click(function(){
    $("#largeImg>img").attr({"src":"image/bg3.jpg"});
    return false;
  });  */

});