$(window).scroll(function(){
	if($(window).scrollTop() > 100){
		$("#navbar").attr("style", "display: block;")
	}else{
		$("#navbar").attr("style", "display: none;")
	}
});