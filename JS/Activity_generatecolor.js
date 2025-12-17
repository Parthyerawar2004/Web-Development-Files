let btn =document.querySelector("button");

btn.addEventListener("click", function(){
let h1 = document.querySelector("h1");
let randomcoloring = randomcolor();
h1.innerText = randomcoloring;

let div = document.querySelector("div");
div.style.backgroundColor = randomcoloring;

console.log("Color Updated");
});

function randomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue =  Math.floor(Math.random()*255);
    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}
