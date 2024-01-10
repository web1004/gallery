$(document).ready(function(){

  let oimg=0; 
	let nimg=0;

  $(".thumbs a").click(function(){
    nimg=$(this).index();  
    $(".thumbs a").eq(oimg).removeClass("on");  //썸네일클래스 사라짐
		$(".thumbs a").eq(nimg).addClass("on");  //썸네일 클래스 불러옴
		$("#largeImg>img").eq(oimg).stop().fadeOut(1000); //기존이미지 사라짐
		$("#largeImg>img").eq(nimg).stop().fadeIn(1000);  //새이미지 나타남
		oimg = nimg; //새로 나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeOut...
    return false;
  });

});