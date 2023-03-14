$(document).ready(function(){

  /* old는 처음 있던 이미지, num은 다음에 올 이미지 */
  let oimg=0; 
	let nimg=0;

  $(".thumbs a").click(function(){

    nimg=$(this).index();  //0,1,2,3....

    $(".thumbs a").eq(oimg).removeClass("on");  //썸네일클래스 사라짐
		$(".thumbs a").eq(nimg).addClass("on");  //썸네일 클래스 불러옴
		$("#largeImg>img").eq(oimg).stop().fadeOut(1000); //기존이미지 사라짐
		$("#largeImg>img").eq(nimg).stop().fadeIn(1000,function(){  //새이미지 나타남
			oimg = nimg; //새로 나온 이미지가 다시 기존이미지로 바뀌고 다시 fadeOut...
		});
    return false;
    
  });

});