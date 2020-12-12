function colorLinks(hex)
{
    var links = document.getElementsByClassName("navlink");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}
function darkmode(){
    if(document.getElementById("light").innerHTML=="Light Mode"){
    document.getElementById("body").style.backgroundImage="none";
    document.getElementById("body").style.backgroundColor="black";
    document.getElementById("light").innerHTML = "Dark Mode"
    document.getElementById("arrowimage").src="whitearrow.png";
    document.getElementById("myTopnav").style.backgroundColor="black";
    document.getElementById("timertostopwatch").style.color="white";
    document.getElementById("light").style.color="white";
    document.getElementById("login").style.color="white";
    document.getElementById("signup").style.color="white";
    document.getElementById("projects").style.color="white";
    colorLinks("white");

    
    }
    else if(document.getElementById("light").innerHTML =="Dark Mode"){
        document.getElementById("body").style.backgroundImage="linear-gradient(#21eb95,#366aac, teal)";
        document.getElementById("light").innerHTML="Light Mode";
        document.getElementById("arrowimage").src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=";
        document.getElementById("arrowimage").style.outline="none";
        document.getElementById("myTopnav").style.backgroundColor="white";
        document.getElementById("timertostopwatch").style.color="black";
        document.getElementById("light").style.color="black";
        document.getElementById("login").style.color="black";
        document.getElementById("signup").style.color="black";
        document.getElementById("projects").style.color="black";
        colorLinks("black");

    }
};


