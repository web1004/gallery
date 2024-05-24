$(document).ready(function(){

  let oimg=0; 
	let nimg=0;

  $(".thumbs img").click(function(){
    nimg=$(this).index();  

    // 썸네일 이미지에 active 클래스 넣고 빼기
    $(this).addClass('active');
    $(this).siblings().removeClass('active');

    $("#largeImg>img").eq(oimg).stop().fadeOut(1000); //기존이미지 사라짐
		$("#largeImg>img").eq(nimg).stop().fadeIn(1000);  //새이미지 나타남
		oimg = nimg; //새로 나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeOut...
  });

});