$(document).ready(function(){

  //방법3......................
  $(".thumbs a").click(function(){
    let path=$(this).attr("href");
    $("#largeImg>img").attr({"src":path}).hide().fadeIn();
    return false;
  });


  //방법2......................
/*   $(".thumbs a").click(function(){
    let num=$(this).index();
    $("#largeImg>img").attr({"src":"image/bg"+num+".jpg"});
    return false;
  }); */


  //방법1......................
  /* $(".thumbs a").eq(0).click(function(){
    $("#largeImg>img").attr({"src":"image/bg0.jpg"});
    return false;
  });
  $(".thumbs a").eq(1).click(function(){
    $("#largeImg>img").attr({"src":"image/bg1.jpg"});
    return false;
  });
  $(".thumbs a").eq(2).click(function(){
    $("#largeImg>img").attr({"src":"image/bg2.jpg"});
    return false;
  });
  $(".thumbs a").eq(3).click(function(){
    $("#largeImg>img").attr({"src":"image/bg3.jpg"});
    return false;
  }); */

});