let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let div = document.querySelector("div");

function ChangeOnClick(){
    console.dir(this);
    this.style.backgroundColor = "green";
}

btn.addEventListener("click",ChangeOnClick);
h1.addEventListener("click",ChangeOnClick);
p.addEventListener("click",ChangeOnClick);
div.addEventListener("click",ChangeOnClick);