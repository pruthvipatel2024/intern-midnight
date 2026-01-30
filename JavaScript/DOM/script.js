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

