let marks = [97, 64, 32, 49, 99, 96, 85];


console.log("All Marks of Marksheet");
for (let mark of marks) {
    
    console.log(mark);
}

let nmarks = marks.filter((val) => {
    return val > 90;
});


console.log("Marks which is Greaterthan '90' ...");
for (let nmark of nmarks) {
    
    console.log(nmark);
}