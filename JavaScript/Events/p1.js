let btn = document.querySelector("#theme");
let theme = "light";
btn.addEventListener("click", () => {
    if (theme == "light") {
        theme = "dark";
        // let body = document.querySelector("body");
        // body.style.backgroundColor = "black";
        // body.style.color = "white";
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");

    }
    else {
        theme = "light";
        // let body = document.querySelector("body");
        // body.style.backgroundColor = "white";
        // body.style.color = "black";
        document.querySelector("body").classList.add("light");
    }
    // console.log(theme);
    console.log("Theme was changed to " + theme);
})