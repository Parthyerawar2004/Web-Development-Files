let gameSeq = [];
let playerSeq = [];

let buttons = ["red","blue","orange","yellowgreen"];

let started = false;
let Level = 0;

let h2 = document.querySelector("h2");
let box = document.querySelector(".box");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("Game Started");
        started = true;
    }
    nextLevel();
});

function gameFlash(box) {
    box.classList.add("gameflash");
    setTimeout(function() {
    box.classList.remove("gameflash");
    },250);
}

function userFlash(box) {
    box.classList.add("userflash");
    setTimeout(function() {
    box.classList.remove("userflash");
    },250);
}
function nextLevel() {
    playerSeq = [];
    Level++;
    h2.innerText = `Level ${Level}`;
    let randNum = Math.floor(Math.random() * 4);
    let randColor = buttons[randNum];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randNum);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    
    gameFlash(randBtn);
}

function checkAns(){

    let idx = playerSeq.length -1;
    // console.log("Checking Ans");
    if(playerSeq[idx] === gameSeq[idx]){
        if(playerSeq.length == gameSeq.length)
            {
            setTimeout( nextLevel(), 1000);
            }
            }else{
                h2.innerHTML = `Game Over! Your score is <b>${Level}</b><br>Press Any Key to Restart`;
                document.querySelector("body").style.backgroundColor = "red";
                setTimeout(function(){
                    document.querySelector("body").style.backgroundColor = "white";
                },200);
                resetGame();
            }
}

function boxpress(){
    let box = this;
    userFlash(box);

    userColor = box.getAttribute("id");
    playerSeq.push(userColor);
    console.log(playerSeq);

    checkAns();
}



let allboxes = document.querySelectorAll(".box");
for( box of allboxes){
    box.addEventListener("click", boxpress);
}

function resetGame(){
    started = false;
    Level = 0;
    gameSeq = [];
    playerSeq = [];
}