/*let btn = document.querySelector("button");
btn.onclick = function() {
    console.log('Button was clicked!');
};*/

/*let btn = document.querySelector("button");
function sayHello() {
    alert("hello world");
}
btn.onclick = sayHello;*/

let btns = document.querySelectorAll("button");

for(let btn of btns){
    btn.onclick = Helloworld;
    btn.onmouseover = function() {
        console.log("Mouse havoered over the button!");
    }
}
function Helloworld(){
    alert("Hello World");
}