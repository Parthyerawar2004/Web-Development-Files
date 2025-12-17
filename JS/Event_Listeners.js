console.log("Script started");
console.log("Paragraph found?", document.querySelector("p"));
console.log("Div found?", document.querySelector("div"));

let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("Paragraph was clicked!");
});

let Div = document.querySelector("div");
Div.addEventListener("mouseenter", function(){
    console.log("U Entered the Box!");
});