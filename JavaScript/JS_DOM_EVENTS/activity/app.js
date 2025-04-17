

let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let h1 = document.querySelector("h1");
   let generate = random();
   h1.innerText = generate;

   let div = document.querySelector("div");
   div.style.backgroundColor = generate; 

});

function random (){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    return `rgb${red}, ${green}, ${blue}`;
}