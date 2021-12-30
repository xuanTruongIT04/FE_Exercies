$(document).ready(function(){
    var link_src_show = $(".list-thumb li:first-child a img").attr("src");
    $(".show img").attr("src", link_src_show);

    $(".item-thumb").click(function() {
        var link_src = $(this).children("a").children("img").attr("src");
        $(".show img").attr("src", link_src);
        return false;
    });

    $(".item-thumb").click(function() {
        $(".item-thumb").removeClass("active");
        $(this).addClass("active");
    });

    $(".next").click(function() {
        if($(".list-thumb .item-thumb:last-child").hasClass("active")) {
            $(".list-thumb .item-thumb:first-child").click();
        }else{
        $(".list-thumb .item-thumb.active").next().click();
        }
    });


    $(".prev").click(function() {
        if($(".list-thumb .item-thumb:first-child").hasClass("active")) {
            $(".list-thumb .item-thumb:last-child").click();
        }else{
        $(".list-thumb .item-thumb.active").prev().click();
        }
    });




});