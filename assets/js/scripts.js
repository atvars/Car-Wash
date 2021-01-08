 /* setting up wich plans to show and hide when page is loaded */
 $(document).ready(function(){
        $("#info4").toggle();
        $("#contactUs").hide();
    });

/* Plan info disapiers and apiers when button is presed */
 $("#plan1Button").on("click",function() {
        $("#info").toggle(500);
    });

    $("#plan2Button").on("click",function() {
        $("#info2").toggle(500);
    });

    $("#plan3Button").on("click",function() {
        $("#info3").toggle(500);
    });

     $("#plan4Button").on("click",function() {
        $("#info4").toggle(500);
        $("#contactUs").toggle(500);
    });


/* Hover for Plan info */
$("#info").mouseenter(function(){
$(this).css("color", "blue");
});
$("#info").mouseleave(function(){
$(this).css("color", "black");
});
$("#info2").mouseenter(function(){
$(this).css("color", "blue");
});
$("#info2").mouseleave(function(){
$(this).css("color", "black");
});
$("#info3").mouseenter(function(){
$(this).css("color", "blue");
});
$("#info3").mouseleave(function(){
$(this).css("color", "black");
});
$("#info4").mouseenter(function(){
$(this).css("color", "blue");
});
$("#info4").mouseleave(function(){
$(this).css("color", "black");
});

/* form email send button hover */
$("#sendButton").mouseenter(function(){
$(this).css("color", "red");
});
$("#sendButton").mouseleave(function(){
$(this).css("color", "white");
});

/* increasing avatar pic in testimonials when hovered on picture */
$("img.avatarpic").mouseenter(function(){
    $(this).animate({
      opacity: "0.5",
      height: "150px",
      width: "150px"
    });
  });

/*  hovering and changing colors in website*/
  $("#prices h3").addClass("h3hover");
  $("#prices .times").addClass("h3hover");
  $("#testamonials h3").addClass("h3hover");
  $("#findMe h3").addClass("h3hover");
  $("#findMe .contactinfo").addClass("h3hover");
