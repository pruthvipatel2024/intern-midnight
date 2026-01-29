let str = prompt("Enter a String:");

function vovel(str) {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }   
    }
    return count;
}

let vovels = vovel(str);

console.log(vovels);



const cntvow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }   
    }
    return count;
}