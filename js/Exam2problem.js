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

//Add product category to list
function Addproductcategory()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCategory";
    
    //Collect product data from section 2
    var productcategoryname = document.getElementById("productname").value;
    var productcategorydescription = document.getElementById("productdescription").value;
    
    //Parameter string
    var newproductcategory = '{"CName":"'+productcategoryname+'","CDescription":"'+productcategorydescription+'"}';
    
    //Checking AJAX operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }      
    }
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newproductcategory);
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result2").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("result2").innerHTML = "The operation was not succesful!" + "<br>" + output.Exception;
    }
}

//Update product category description
function Changeproductcategorydescription()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    
    //Collect product data from section 3
    var currentcategoryid = document.getElementById("existingcategoryid").value;
    var changedproductdescription = document.getElementById("newnewproductdescription").value;
    
    //Parameter string
    var newproductdescription = '{"CID":"'+currentcategoryid+'","CDescription":"'+changedproductdescription+'"}';
    
    //Checking AJAX operation return
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }      
    }
    
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newproductdescription);
}

function OperationResult2(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result3").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("result3").innerHTML = "The operation was not succesful!" + "<br>" + output.Exception;
    }
}