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


   