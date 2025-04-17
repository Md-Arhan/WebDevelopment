let gameSeq = [];
let userSq = [];

let started = false;
let level = 0;

let btns = ['yellow', 'red', 'blue', 'green'];

let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx){
    // console.log("Curr level ", 
    // let idx = level -1;
    
    if(userSq[idx] === gameSeq[idx]){
        console.log("same value");
        if(userSq.length == gameSeq.length){
            levelUp();
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was <b> ${level} </b>.<br> press any key to start.`
        h3.innerText = "Press any key to start the Game"
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 100);
    }
}


function levelUp(){
    userSq = [];
    level++;
    h2.innerText = `Level ${level}`
    h3.innerText = "Game Started"
     
    //random btn choose
    let random = Math.floor(Math.random() *4);
    let randomColor = btns[random];
    let randbtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq)
    btnflash(randbtn);
    
}

function btnPress(){
    if(started == true){
        let btn = this;
        userflash(btn);
        let userColor = btn.getAttribute("id");
        userSq.push(userColor);
        console.log(userSq);
    
        checkAns(userSq.length-1);
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    gameSeq = [];
    userSq = [];
    level = 0;
    started = false;
}