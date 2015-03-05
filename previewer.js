var frame = false;

$(document).ready(function(){
    loadPrice(true);
	//$("#previewWindow").html($("<img>").attr("src", "./images/tile_background.png")); 
    $("#pawBrown").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_brown.png").attr("class","overlay")); 
    });
    $("#pawCream").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_cream.png").attr("class","overlay")); 
    });
    $("#pawGrey").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_grey.png").attr("class","overlay")); 
    });
    $("#textLilac").click(function(){
         $("#textForeground").html($("<img>").attr("src", "./images/text_lilac.png").attr("class","overlay")); 
    });
    $("#textBlue").click(function(){
         $("#textForeground").html($("<img>").attr("src", "./images/text_blue.png").attr("class","overlay")); 
    });
    $("#textGrey").click(function(){
         $("#textForeground").html($("<img>").attr("src", "./images/text_grey.png").attr("class","overlay")); 
    });
    $("#textBrown").click(function(){
         $("#textForeground").html($("<img>").attr("src", "./images/text_brown.png").attr("class","overlay")); 
    });
    $("#framePine").click(function(){
         $("#frameForeground").html($("<img>").attr("src", "./images/frame_pine_500.png").attr("class","overlay")); 
        loadPrice(true);
    });
    $("#frameBlack").click(function(){
         $("#frameForeground").html($("<img>").attr("src", "./images/frame_black_500.png").attr("class","overlay")); 
        loadPrice(true);
    });
    $("#frameNone").click(function(){
         $("#frameForeground").html($("")); 
         loadPrice(false);
    });
    $("#frameWhite").click(function(){
         $("#frameForeground").html($("<img>").attr("src", "./images/frame_white_500.png").attr("class","overlay")); 
         loadPrice(true);
    });

});

function loadPrice(frame){
    if(frame === false){
            $("#paypalLink").html($(" <div class=\"col-lg-2\"><p>Small Unframed - £34.50</p>\
            <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\
            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\
            <input type=\"hidden\" name=\"hosted_button_id\" value=\"6PUG3BBUSSMJC\">\
            <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal – The safer, easier way to pay online.\">\
            <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_GB/i/scr/pixel.gif\" width=\"1\" height=\"1\">\
            </form></div>\
            <div class=\"col-lg-2\">\
            <p>Large Unframed - £69.50</p>\
            <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\
            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\
            <input type=\"hidden\" name=\"hosted_button_id\" value=\"6PUG3BBUSSMJC\">\
            <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal – The safer, easier way to pay online.\">\
            <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_GB/i/scr/pixel.gif\" width=\"1\" height=\"1\">\
            </form></div>"));
    } else if (frame === true) {
            $("#paypalLink").html($("<div class=\"col-lg-2\"><p>Small Framed - £54.50</p>\
            <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\
            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\
            <input type=\"hidden\" name=\"hosted_button_id\" value=\"6PUG3BBUSSMJC\">\
            <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal – The safer, easier way to pay online.\">\
            <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_GB/i/scr/pixel.gif\" width=\"1\" height=\"1\">\
            </form></div>\
            <div class=\"col-lg-2\">\
            <p>Large Framed - £89.50</p>\
            <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\
            <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\
            <input type=\"hidden\" name=\"hosted_button_id\" value=\"6PUG3BBUSSMJC\">\
            <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal – The safer, easier way to pay online.\">\
            <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_GB/i/scr/pixel.gif\" width=\"1\" height=\"1\">\
            </form></div>"));
    }
}