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


    $(document).ready(function(){
        $("#info4").toggle();
        $("#contactUs").hide();
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

/* form send button hover */
$("#sendButton").mouseenter(function(){
$(this).css("color", "red");
});
$("#sendButton").mouseleave(function(){
$(this).css("color", "white");
});