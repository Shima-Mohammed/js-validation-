


var projectName , projectClicked , SEOoptions  ; 
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
/***********************************choose an option ************************************/
function checkedseooption(id)
{
	SEOoptions = "checked"
	
}
/*******************************************************************************/
/*********************************ensure user slecet an option (button) ******************/
function checkedseooption() 
{
	if(SEOoptions === "checked")
		{
			document.getElementById("SEOoptionsBtn").setAttribute("data-toggle",""); 
			document.getElementById("SEOoptionsBtn").setAttribute("data-target",""); 
			document.getElementById("demo").innerHTML =" " ;
		}
	else
		{
			document.getElementById("SEOoptionsBtn").setAttribute("data-toggle","modal"); 
			document.getElementById("SEOoptionsBtn").setAttribute("data-target","#myModal"); 
			document.getElementById("demo").innerHTML ="You Must Choose an option " ;
		}
}
/*************************************************************************************/
