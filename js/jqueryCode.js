



var projectName , projectClicked
$(document).ready(function(){
	
	/***************************add check icon **********************************/
	
	$(".pojects").click(function(){
		$(this).siblings().css("border","1px solid #eee ") ; 
		$(this).css("border","2px solid #acd373") ; 
		$(".projects .con-icon").css("opacity","0" );
		$(this).children(".con-icon").css("opacity","1" ) ;
	
	});
	/**************************************************************/
	
	/********************add SEO option icon ************************/
	
	$(".seo-options").click(function(){
		$(this).siblings().css("border","1px solid #eee ") ; 
		$(this).css("border","2px solid #acd373") ; 
		$(".seo-options .con-icon").css("opacity","0" );
		$(this).children(".con-icon").css("opacity","1" ) ;
	
	});
	/*******************************************************************/
	/********************add web option icon ************************/
	
	$(".web-options").click(function(){
		$(this).siblings().css("border","1px solid #eee ") ; 
		$(this).css("border","2px solid #acd373") ; 
		$(".web-options .con-icon").css("opacity","0" );
		$(this).children(".con-icon").css("opacity","1" ) ;
	
	});
	/*******************************************************************/
	
	
	
/***************************************end of jqery functions*******************/	
});