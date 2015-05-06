var frame = true;

$(document).ready(function(){
    loadPrice();
	//$("#previewWindow").html($("<img>").attr("src", "./images/tile_background.png")); 
    $("#pawBrown").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_brown.png").attr("class","overlayPaw")); 
    });
    $("#pawCream").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_cream.png").attr("class","overlayPaw")); 
    });
    $("#pawGrey").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_grey.png").attr("class","overlayPaw")); 
    });
    $("#pawTaupe").click(function(){
         $("#pawForeground").html($("<img>").attr("src", "./images/paw_taupe.png").attr("class","overlayPaw")); 
    });
    $("#pawBiscuit").click(function(){
         $("#pawForeground").html($("<img>").attr("src", "./images/paw_biscuit.png").attr("class","overlayPaw")); 
    });
    $("#pawChocolate").click(function(){
         $("#pawForeground").html($("<img>").attr("src", "./images/paw_chocolate.png").attr("class","overlayPaw")); 
    });
    $("#pawGinger").click(function(){
         $("#pawForeground").html($("<img>").attr("src", "./images/paw_ginger.png").attr("class","overlayPaw")); 
    });
    $("#pawLatte").click(function(){
         $("#pawForeground").html($("<img>").attr("src", "./images/paw_latte.png").attr("class","overlayPaw")); 
    });
    $("#textLilac").click(function(){
         $("#textForeground").html($("<img>").attr("src", "./images/text_lilac.png").attr("class","overlayText")); 
    });
    $("#textBlue").click(function(){
         $("#textForeground").html($("<img>").attr("src", "./images/text_blue.png").attr("class","overlayText")); 
    });
    $("#textGrey").click(function(){
         $("#textForeground").html($("<img>").attr("src", "./images/text_grey.png").attr("class","overlayText")); 
    });
    $("#textBrown").click(function(){
         $("#textForeground").html($("<img>").attr("src", "./images/text_brown.png").attr("class","overlayText")); 
    });
    $("#framePine").click(function(){
         $("#frameForeground").html($("<img>").attr("src", "./images/frame_pine_500.png").attr("class","overlayFrame")); 
        changeFraming(true);
    });
    $("#frameBlack").click(function(){
         $("#frameForeground").html($("<img>").attr("src", "./images/frame_black_500.png").attr("class","overlayFrame")); 
        changeFraming(true);
    });
    $("#frameNone").click(function(){
         $("#frameForeground").html($("")); 
         changeFraming(false);
    });
    $("#frameWhite").click(function(){
         $("#frameForeground").html($("<img>").attr("src", "./images/frame_white_500.png").attr("class","overlayFrame")); 
         changeFraming(true);
    });
    $("#bgApple").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_apple.jpg").attr("class","backgroundCard")); 
    });
    $("#bgAqua").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_aqua.jpg").attr("class","backgroundCard")); 
    });
    $("#bgCream").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_cream.jpg").attr("class","backgroundCard")); 
    });
    $("#bgCustard").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_custard.jpg").attr("class","backgroundCard")); 
    });
    $("#bgGrey").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_grey.jpg").attr("class","backgroundCard")); 
    });
    $("#bgLilac").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_lilac.jpg").attr("class","backgroundCard")); 
    });
    $("#bgBlue").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_pale_blue.jpg").attr("class","backgroundCard")); 
    });
    $("#bgPink").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_pink.jpg").attr("class","backgroundCard")); 
    });
    $("#bgPurple").click(function(){
         $("#bgCard").html($("<img>").attr("src", "./images/background_purple.jpg").attr("class","backgroundCard")); 
    });

});

function changeFraming(value){
    if (value === frame){
    } else if (value===true){
         $("#bgCard").html($("<img>").attr("src", "./images/background_cream.jpg").attr("class","backgroundCard")); 
    } else if (value===false) {
        $("#bgCard").html($("<div>").attr("class","backgroundCard")); 
    }
    frame = value;
    loadPrice();
}
//<i class=\"fa fa-paypal\" style=\"color:CornflowerBlue  \"> Pay with PayPal</i>\
//<input type=\"image\" src=\"https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal – The safer, easier way to pay online.\">\
//<img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_GB/i/scr/pixel.gif\" width=\"1\" height=\"1\">\
function loadPrice(){
        $("#paypalLink").html($("\
        <div class=\"col-lg-2\"><p>Small Unframed - £49.50</p>\
        <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\
        <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\
        <input type=\"hidden\" name=\"hosted_button_id\" value=\"U5LTXQQSBN5XC\">\
        <button type=\"submit\" class=\"btn btn-primary\">\
        <i class=\"fa fa-paypal\"> Buy with PayPal</i>\
        </button>\
        </form></div>\
        <div class=\"col-lg-2\">\
        <p>Large Unframed - £59.50</p>\
        <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\
        <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\
        <input type=\"hidden\" name=\"hosted_button_id\" value=\"RJ5G6KP4XUHKS\">\
        <button type=\"submit\" class=\"btn btn-primary\">\
        <i class=\"fa fa-paypal\"> Buy with PayPal</i>\
        </button>\
        </form></div>\
        <div class=\"col-lg-2\"><p>Small Framed - £59.50</p>\
        <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\
        <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\
        <input type=\"hidden\" name=\"hosted_button_id\" value=\"6PUG3BBUSSMJC\">\
        <button type=\"submit\" class=\"btn btn-primary\">\
        <i class=\"fa fa-paypal\"> Buy with PayPal</i>\
        </button>\
        </form></div>\
        <div class=\"col-lg-2\">\
        <p>Large Framed - £64.50</p>\
        <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\
        <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\
        <input type=\"hidden\" name=\"hosted_button_id\" value=\"RCTK9PPD7YMLA\">\
        <button type=\"submit\" class=\"btn btn-primary\">\
        <i class=\"fa fa-paypal\"> Buy with PayPal</i>\
        </button>\
        </form></div>\
        "));
}