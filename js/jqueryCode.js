




$(document).ready(function(){
	
	/***************************add check icon **********************************/
	
	$(".pojects").click(function(){
		$(this).siblings().css("border","1px solid #eee ") ; 
		$(this).css("border","2px solid #acd373") ; 
		$(".con-icon").css("opacity","0" );
		$(this).children(".con-icon").css("opacity","1" ) ;
	
	});
	/**************************************************************/
	
	
/***************************************end of jqery functions*******************/	
});