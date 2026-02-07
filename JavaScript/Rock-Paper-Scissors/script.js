let uscore = 0;
let cscore = 0;
const msg = document.querySelector("#msg");
const user = document.querySelector("#uscore");
const comp = document.querySelector("#cscore");

const inputs = document.querySelectorAll(".input");

const gencompinput = () => {
    const options = ["rock", "paper", "scissor"];
    const rid = Math.floor(Math.random() * 3);
    // console.log(random);
    return options[rid];
}

const result = (uwin) => {
    if (uwin === true) {
        console.log("Winner is Human");
        msg.innerText = "YOU WON";
        uscore++;
    }
    else {
        console.log("Better Lukc Next Time You lost the game ");
        msg.innerText = "YOU LOSE";
        cscore++;
    }
    user.innerText = uscore;
    comp.innerText = cscore;
};

const draw = () => {
    console.log("Game was Tie");
    msg.innerText = "GAME TIE"
}

const game = (uinput) => {

    console.log("user input = ", uinput);
    const cinput = gencompinput();
    console.log("Computer Choose = ", cinput);


    if (uinput === cinput) {
        draw();
    }
    else {
        let uwin = true;

        if (uinput === "rock") {

            // if (cinput === "paper") {
            //     uwin = false;
            // }
            // else {
            //     uwin = true;
            // }
            uwin = cinput === "paper" ? false : true;
        }

        else if (uinput === "paper") {
            // if (cinput === "rock") {
            //     uwin = true;
            // }
            // else {
            //     uwin = false;
            // }
            uwin = cinput === "scissor" ? false : true;
        }

        else {
            // if (cinput === "rock") {
            //     uwin = false;
            // }
            // else {
            //     uwin = true;
            // }
            uwin = cinput === "rock" ? false : true;
        }
        result(uwin);
    }
};

inputs.forEach((input) => {
    input.addEventListener("click", () => {
        const uinput = input.getAttribute("id");
        console.log(uinput);
        console.log("clicked");
        game(uinput);
    });
});

