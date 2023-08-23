$(document).ready(function(){

  let soldidx=0;
	let sidx=0;
	let simg_w=$("#largeImg img").width();

  $(".thumbs a").click(function(){

    sidx=$(this).index();
    smove=-(simg_w*sidx);

    $("#gallery #largeImg").animate({"left":smove});
    $(".thumbs a").eq(soldidx).removeClass("on");
		$(".thumbs a").eq(sidx).addClass("on");
		soldidx = sidx;
    return false;
  });

});