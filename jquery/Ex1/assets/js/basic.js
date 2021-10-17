$(document).ready(function(){
    // Đặt cố định show là ảnh đầu
    var link_src_show = $("li:first-of-type a img").attr("src");
    $(".show img").attr("src", link_src_show);

    // Highlight cố định ảnh đầu
    $("li:first").addClass("active");

    $("li.thumb-item a").click(function(){
        
        // Ấn vào hình dưới, highlight lên
        var link_src = $(this).children("img").attr("src");
        $(".show img").attr("src", link_src);

        // Highlight hình dưới, tăng tương tác với người dùng, giúp họ biết họ đang ở hình nào
        $("li.thumb-item").removeClass("active");
        $(this).parent("li").addClass("active");
        return false;
    });


    //     //CACH 1: TAO MANG 
    //     var slide = new Array();
    //     slide[0] = "./assets/images/thumb-1.png";
    //     slide[1] = "./assets/images/thumb-2.png";
    //     slide[2] = "./assets/images/thumb-3.png";
    //     slide[3] = "./assets/images/thumb-4.png";

        // // Click button prev
        //     var n = 0;
        //     $("button.prev").click(function(){
        //         // Highlight button lên
        //         $("button").removeClass("active");
        //         $(this).addClass("active");
        
        //         // Bắt sự kiện sau khi click thì ẨN PHẦN TỬ đi
        //         $(".show img").fadeOut(function(){
        //             // Nếu là ảnh đầu thì gán cho 
        //             if(n==0) n=slide.length;
        //             n--;
        //             $(".show img").attr("src", slide[n]);
        //             $(".show img").fadeIn(); 
        //         })
        //     }); 
    
    // // Click button next
    //     $("button.next").click(function(){
    //         // Highlight button lên
    //         $("button").removeClass("active");
    //         $(this).addClass("active");

    //         $(".show img").fadeOut(function(){
    //             n++;
    //             if(n==slide.length) n=0;
    //             $(".show img").attr("src", slide[n]);
    //             $(".show img").fadeIn(); 
    //         })
    //     });




//   // //1. Xoá .active của các li khác, và gán cho li frirst .active
                //     $("li").removeClass("active");
                //     $("li:first-of-type").addClass("active");
                // //2. Chiếu .active lên ảnh to
                //     link_src_show  =    $("li.active").children("a").children("img").attr("src");
                //     $(".show img").attr("src", link_src_show);
                // //3. Thêm .next_active cho active_next()
                //     $(".active").next().addClass("active");
                // //4.Xoá .active ở phần tử cũ
                //     $(".active").prev().removeClass("active");  
                // //5 .Gán active next thành active

                // //6. Lấy src của active và chiếu lên ảnh to
                //     link_src_show  =  $("li.active").children("a").children("img").attr("src");
                //     $(".show img").attr("src", link_src_show);

    $("button.next").click(function(){
        // highlight ảnh dưới
        $(".active").next().addClass("active");
        $(".active").prev().removeClass("active");
        // Chiếu lên
        var link_src_show  =  $("li.active").children("a").children("img").attr("src");
        $(".show img").attr("src", link_src_show);

        if($("li.active").next().children("a").children("img").attr("src") == undefined){
            $("li:first-of-type").addClass("active");
        }
    });


    

    $("button.prev").click(function(){
        $(".active").prev().addClass("active");
        $(".active").next().removeClass("active");

        var link_src_show  =  $("li.active").children("a").children("img").attr("src");
        $(".show img").attr("src", link_src_show);

        if($("li:first-of-type").hasClass("active")){
            if($("button.prev").click(function(){
                $("li:last-of-type").addClass("active");
            }));    
         }
    });

});