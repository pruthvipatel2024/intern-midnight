let marks = [85, 97, 44, 37, 76, 60];
let i = 0;
let sum = 0;
for (let mark of marks) {
    sum = sum + mark;
    i++
}

let avg = sum / i;
console.log("Total of Marks: ", sum);
console.log("Average of Marks: ", avg);
