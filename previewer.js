$(document).ready(function(){
	//$("#previewWindow").html($("<img>").attr("src", "./images/tile_background.png")); 
    $("#blue").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_blue.png").attr("class","overlay")); 
    });
    $("#green").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_green.png").attr("class","overlay")); 
    });
    $("#red").click(function(){
    	 $("#pawForeground").html($("<img>").attr("src", "./images/paw_red.png").attr("class","overlay")); 
    });
});