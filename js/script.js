


var projectName , projectClicked , SEOoptions  , WEBoptions , DESIGNoptions , budgetCheck  ;
/***********************************first page ********************/
/*****************user choose project **********************/
function setProjectName(id)
{
	projectName = id ; 
	projectClicked = "clicked" ;
	console.log(projectClicked) ; 
	console.log(id);
}
/*****************************************************/
/*******************ensure user choose a project  (button)***********/
function checked() 
{
	if(projectClicked === "clicked")
		{
			document.getElementById("firstBtn").setAttribute("data-toggle",""); 
			document.getElementById("firstBtn").setAttribute("data-target",""); 
			document.getElementById("demo").innerHTML =" " ;
			document.getElementById("first").style.display = "none";
			if(projectName =="seo")
				{
					document.getElementById("webOptions").style.display = "none";	
					document.getElementById("seoOptions").style.display = "block";
					document.getElementById("designOptions").style.display = "none";
				}
			else if(projectName =="web")
				{
					document.getElementById("webOptions").style.display = "block";
					document.getElementById("seoOptions").style.display = "none";
					document.getElementById("designOptions").style.display = "none";
				}
			else{
				document.getElementById("designOptions").style.display = "block";
				document.getElementById("seoOptions").style.display = "none";
				document.getElementById("webOptions").style.display = "none";
			}
			
					
			
			
		}
	else
		{
			document.getElementById("firstBtn").setAttribute("data-toggle","modal"); 
			document.getElementById("firstBtn").setAttribute("data-target","#myModal"); 
			document.getElementById("demo").innerHTML ="You Must Choose Project " ;
		}
}
/***************************************************************************************************/



/**************************************SEO opation **************************************************/
/********************choose an option **************************/
function checkSEOOpations()
{
	SEOoptions = "checked"
	
}
/********************************************************************/
/***************ensure user slecet an option (button) ************/
function checkedseooption() 
{
	if(SEOoptions === "checked")
		{
			document.getElementById("SEOoptionsBtn").setAttribute("data-toggle",""); 
			document.getElementById("SEOoptionsBtn").setAttribute("data-target",""); 
			document.getElementById("demo").innerHTML =" " ;
			document.getElementById("seoOptions").style.display="none"; 
			document.getElementById("budget").style.display="block" ; 
			
		}
	else
		{
			document.getElementById("SEOoptionsBtn").setAttribute("data-toggle","modal"); 
			document.getElementById("SEOoptionsBtn").setAttribute("data-target","#myModal"); 
			document.getElementById("demo").innerHTML ="You Must Choose an option " ;
		}
}
/*************************************************/


/******************************************web options ********************************************************/
/********************choose an option **************************/
function checkWEBOpations()
{
	WEBoptions = "checked"
	
}
/********************************************************************/
/***************ensure user slecet an option (button) ************/
function checkedweboption() 
{
	if(WEBoptions === "checked")
		{
			document.getElementById("WEBoptionsBtn").setAttribute("data-toggle",""); 
			document.getElementById("WEBoptionsBtn").setAttribute("data-target",""); 
			document.getElementById("demo").innerHTML =" " ;
			document.getElementById("webOptions").style.display="none"; 
			document.getElementById("budget").style.display="block" ; 
		}
	else
		{
			document.getElementById("WEBoptionsBtn").setAttribute("data-toggle","modal"); 
			document.getElementById("WEBoptionsBtn").setAttribute("data-target","#myModal"); 
			document.getElementById("demo").innerHTML ="You Must Choose an option " ;
		}
}
/*************************************************/


/******************************************design options ********************************************************/
/********************choose an option **************************/
function checkDESIGNOpations()
{
	DESIGNoptions = "checked"
	
}
/********************************************************************/
/***************ensure user slecet an option (button) ************/
function checkeddesignoption() 
{
	if(DESIGNoptions === "checked")
		{
			document.getElementById("DESIGNoptionsBtn").setAttribute("data-toggle",""); 
			document.getElementById("DESIGNoptionsBtn").setAttribute("data-target",""); 
			document.getElementById("demo").innerHTML =" " ;
			document.getElementById("designOptions").style.display="none"; 
			document.getElementById("budget").style.display="block" ; 
			
		}
	else
		{
			document.getElementById("DESIGNoptionsBtn").setAttribute("data-toggle","modal"); 
			document.getElementById("DESIGNoptionsBtn").setAttribute("data-target","#myModal"); 
			document.getElementById("demo").innerHTML ="You Must Choose an option " ;
		}
}
/*************************************************/



/*************backword button**************/
function getBack()
{
	document.getElementById("seoOptions").style.display="none";
	document.getElementById("webOptions").style.display = "none";
	document.getElementById("designOptions").style.display = "none";
	document.getElementById("first").style.display = "block";
}
/*********************************************************************************************************/

/******************************************budget btns ***************************************************/
function btnBudget()
{
	budgetCheck ="checked";
}



function checkedbudgetoption() 
{
	if(budgetCheck === "checked")
		{
			document.getElementById("BUDGEToptionsBtn").setAttribute("data-toggle",""); 
			document.getElementById("BUDGEToptionsBtn").setAttribute("data-target",""); 
			document.getElementById("demo").innerHTML =" " ;
			document.getElementById("budget").style.display="none"; 
			 
			
		}
	else
		{
			document.getElementById("BUDGEToptionsBtn").setAttribute("data-toggle","modal"); 
			document.getElementById("BUDGEToptionsBtn").setAttribute("data-target","#myModal"); 
			document.getElementById("demo").innerHTML ="You Must Choose an option " ;
		}
}




function getBackOptions()
{
	if(projectName =="seo")
		{
			document.getElementById("budget").style.display="none"; 
			document.getElementById("seoOptions").style.display="block";
	        document.getElementById("webOptions").style.display = "none";
			document.getElementById("designOptions").style.display = "none";
		}
	else if(projectName =="web")
		{
			
		}
	
	else{
		    document.getElementById("budget").style.display="none"; 
			document.getElementById("seoOptions").style.display="none";
	        document.getElementById("webOptions").style.display = "none";
			document.getElementById("designOptions").style.display = "block";
	}
}
/************************************************************************************************************/
