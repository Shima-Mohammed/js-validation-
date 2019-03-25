


var projectName , projectClicked ; 

function setProjectName(id)
{
	projectName = id ; 
	projectClicked = "clicked" ;
	console.log(projectClicked) ; 
	console.log(id);
}
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
