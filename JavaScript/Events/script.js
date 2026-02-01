// Event  Handlers

let btn = document.querySelector("#fbtn");

// btn.onclick = () => {
//     console.log("Button Was Clicked");
//     console.log(event.type);
//     console.log(event.target);
// }

let box = document.querySelector("#box");

box.onmouseover = () => {
    console.log("You are inside the Box");
    console.log(event.clientX, event.clientY);
}


// Event Listeners

btn.addEventListener("click", (event) => {    //Add Event Listener
    console.log("Button Was Clicked");
    console.log(event.type);
}); 