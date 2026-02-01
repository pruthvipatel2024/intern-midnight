// Q-1

let btn = document.createElement("button");

btn.innerText = "Click Me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.body.prepend(btn);

console.log(btn);


// Q-2

let para = document.querySelector("p");

para.getAttribute("clsas");

para.classList.add("new"); //Add new class to an element without overwrite old class

// para.classList.remove("detail"); Remove a class from an element 