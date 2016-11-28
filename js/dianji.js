$(function(){
          var len=$(".count li").length,
          
          liWidth=$(".count li").innerWidth();
          
           $(".prev").on("click",scrollPrev);
           function scrollPrev(){
            $(".prev").off("click");
            var left=$(".scroll_list").position().left;
            if(left==0){
                 $('.scroll_list').css('left',-liWidth*len+'px');
            }
            $(".scroll_list").animate({"left":"+="+liWidth+"px"},1000,function(){
              $('.prev').on('click',scrollPrev);
            });
           }
           $('.next').on('click',scrollNext);
         function scrollNext(){
                 $('.next').off('click');
                var left=$('.scroll_list').position().left;
                if(left==-liWidth*len){
                        $('.scroll_list').css('left','0px');        
                }
                $('.scroll_list').animate({'left':'-='+liWidth+'px'},1000,function(){
                        $('.next').on('click',scrollNext);
                });
            };
           
         });