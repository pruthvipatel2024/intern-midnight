let heading = document.querySelector("h2");

console.dir(heading);

heading.innerText = heading.innerText + " From Apna College Student";


let div = document.querySelectorAll("div");
console.log(div[0]);
console.log(div[1]);
console.log(div[2]);

// div[0].innerText = "Unique value 1";
// div[1].innerText = "Unique value 2";
// div[2].innerText = "Unique value 3";

let idx = 1;
    
for (let d of div) {
    d.innerText = "value " + idx;
    idx++;
}