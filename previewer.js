$(document).ready(function(){
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
    });
    $("#frameBlack").click(function(){
         $("#frameForeground").html($("<img>").attr("src", "./images/frame_black_500.png").attr("class","overlay")); 
    });
    $("#frameWhite").click(function(){
         $("#frameForeground").html($("<img>").attr("src", "./images/frame_white_500.png").attr("class","overlay")); 
    });
});