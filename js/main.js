
/*this is one way to change background color from css*/
var myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "silver";

/*how to create an element*/
var newDiv = document.createElement("div");
newDiv.id = "shots"


/*this is how you create an H1*/
var headTag = document.createElement("h1")
headTag.textContent = "Hopefully this works!!!";
document.getElementById("myDiv2").appendChild(headTag);

function getInfo(){
var newTag = document.createElement("h1")
newTag.textContent = "Alright im getting this now!";
document.getElementById("myDiv3").appendChild(newTag);

/*this is how to add an image*/

var img = document.createElement("img");
img.setAttribute("src", "img/Labpic.jpg");
img.setAttribute("width", "450");
img.setAttribute("height", "450");
document.getElementById("myDiv3").appendChild(img);
}

