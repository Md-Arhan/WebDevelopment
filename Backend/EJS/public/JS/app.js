const btn = document.querySelectorAll("button");



for(let btns of btn){
    btns.addEventListener("click", () => {
        console.log("Clicked")
    });
}