//Menu
function MenuChoice()
{
    if (document.getElementById("menu").value == "Get category list")
    {
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Add product category to database")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Change category description in database")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Delete a category from database")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "visible";
        document.getElementById("section5").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "About")
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "visible";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
    }
}

//Section 1    
function Generatecategorylist()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            GenerateOutput(output);
        }
        
    }
    
    objRequest.open("GET",url,true);
    objRequest.send();   
}

function GenerateOutput(result)
{
    var count = 0;
    var displaytext = "";
    var maketable = "<table><tr><th>Category ID,</th><th>Category Name,</th><th>Category Description</th><tr>";
    
    for (count = 0; count <result.GetAllCategoriesResult.length; count++)
    {
        displaytext += + result.GetAllCategoriesResult[count].CID + "," + " " + result.GetAllCategoriesResult[count].CName + "," + " " + result.GetAllCategoriesResult[count].CDescription + "<br>";   
    }
    
    document.getElementById("categorylist").innerHTML = maketable;
    document.getElementById("categorylist2").innerHTML = displaytext;
}