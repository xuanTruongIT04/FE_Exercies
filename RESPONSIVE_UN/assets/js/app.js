$(document).ready(function(){
    $(".navbar-responsive").click(function(){
        $("#responsive-menu").slideToggle();
    });

    var upSlide = function(){
        $("#responsive-menu").slideUp();
        $("#sub-responsive-menu").slideUp();
    }


    $("li.highlight").click(function(){
        $("#sub-responsive-menu").slideToggle();
       $("i.sub-navbar-responsive").toggleClass("fas fa-chevron-down fas fa-chevron-up");
    });

    
    $(window).resize(function(){
        upSlide();
    })

    $(window).scroll(function(){
        upSlide();
    })
});