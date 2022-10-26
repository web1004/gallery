$(document).ready(function(){

  let goldidx=0; 
  let gidx=0;   

  function galleryImg(gidx){  

    if(goldidx!=gidx){ 

      $(".thumbs li").eq(goldidx).css({"opacity":0.3}); // 기존의 썸네일 흐리게		
      $(".thumbs li").eq(gidx).css({"opacity":1}); //선택된 썸네일 선명하게	
      $(".largeImg li").eq(goldidx).stop().fadeOut(300);  //기존 이미지 사라짐
      $(".largeImg li").eq(gidx).stop().fadeIn(300); //선택된 이미지 나타남
      $(".imgText li").eq(goldidx).stop().fadeOut(300);  //기존 텍스트 사라짐
      $(".imgText li").eq(gidx).stop().fadeIn(300); //선택된 텍스트 나타남

    };
    goldidx=gidx;

  };

  //썸네일버튼 클릭시.....
  $(".thumbs li").click(function(){
    gidx=$(this).index();
    galleryImg(gidx)
  });

  //이전버튼 클릭시.....
  $(".left_btn").click(function(){

    gidx--;
    if(gidx<0){  
		  gidx=9; 
		}
    galleryImg(gidx);

  });


  //다음버튼 클릭시.....
  $(".right_btn").click(function(){
    
    gidx++;
    if(gidx>9){  
		  gidx=0; 
		}
    galleryImg(gidx);

  });

}); 