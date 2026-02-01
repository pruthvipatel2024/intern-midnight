// console.log(window.document);

console.dir(document.body);
console.log(document.head);


console.log(document.body);
// document.body.childNodes[1].innerText = hello;
console.dir(document.body.childNodes[1]);

// Get Element by Class and Id and TagName
console.dir(document.getElementById("about_us"));
console.log(document.getElementById("about_us"));

console.dir(document.getElementsByClassName("container"));
console.log(document.getElementsByClassName("container"));

console.dir(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("div"));



// Query Selector

let el = document.querySelector("div");  //Select using TagName
let elall = document.querySelectorAll(".header");  //Select using Class Name
console.log(el);
console.log(elall);


// DOM Properties

console.log(el.tagName); //tagname property

let fc = document.querySelector("div").firstChild;
console.log(fc);


let it = document.body.innerText;
console.log(it);

console.log(document.body.innerHTML);


// it.innerText = "This is for Example";





//Get Attribute


let div = document.querySelector("div");

let atr = div.getAttribute("class");

console.log(atr);

div.setAttribute("class", "cont");


//Style Property

// div.style;

// div.style.backgroundColor = 'Black';


//Element insert and Delete using DOM

let nbtn = document.createElement("button");
nbtn.innerText = "Click!";
console.log(nbtn);

// div.append(nbtn);   Add element in document at the end of the node...

// div.prepend(nbtn);  Add element in document at the start of the node...

// div.before(nbtn);    Add element in document before start selected node...

// div.after(nbtn);     Add elemnt in document after end of selected node...

let span = document.querySelector("span");

// span.remove();  Remove an element ;