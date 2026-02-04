let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst-btn");
let nwbtn = document.querySelector("#new-btn");
let msgc = document.querySelector(".announce");
let msg = document.querySelector(".announce").innerText;


let pO = true;  //playerO and playerX

const wp = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

rstbtn.addEventListener("click", () => {
    alert("Game Reset");
    location.reload(true);
})

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Clicked");
        if (pO === true) {
            box.innerText = "O";
            pO = false;
        }

        else {
            box.innerText = "X";
            pO = true;
        }
        box.disabled = true;

        checkwinner();
    })
});

const showresult = (winner) => {
    msgc.innerText = `Congratulations! 
    Winner is ${winner} `;
    msgc.classList.remove("hide");
    for (box of boxes) {
        box.disabled = true;
    }
}

const checkwinner = () => {
    for (let pattern of wp) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );


        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 === p2 && p2 === p3) {
                console.log("Winner is " + p1);
                showresult(p1);
            }
        }
    }
}


