$(function(){
       	 var cur=0;
        var $li=$("#banner_list li");
        var $btn=$("#banner_btn li");
         $li.eq(0).fadeIn();
         play();
         $btn.hover(function(){
         	clearTimeout(auto);
         	var index=$(this).index();
         	$(this).addClass("sel").siblings().removeClass("sel");
         	$li.eq(index).fadeIn(400).siblings().hide();
         },function(){
         	var index=$(this).index()+1;
         	cur=index;
         	auto=setTimeout(play,3000);
         });
         function play(){
            $btn.eq(cur).addClass("sel").siblings().removeClass("sel");
            $li.eq(cur).fadeIn(400).siblings().hide();
            cur++;
            cur=cur>=$btn.length?0:cur;
            auto=setTimeout(play,3000);
         };
         $li.mouseover(function(){
         	clearTimeout(auto);
         });
         $li.mouseout(function(){
         	auto=setTimeout(play,3000);
         });
       });