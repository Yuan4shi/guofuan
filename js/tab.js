$(function(){
             $(".right h1").click(function(){
             	$(this).addClass("active").next().show().end().siblings("h1").removeClass("active").next().hide();
             });
             
        });