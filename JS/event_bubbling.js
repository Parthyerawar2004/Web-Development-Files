let div =document.querySelector("div");
let lis =document.querySelectorAll("li");
let ul =document.querySelector("ul");

div.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("Div clicked!");
});

for(li of lis){
li.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("List clicked!");
});
}

ul.addEventListener("click", function(event){
    event.stopPropagation();
    console.log("UnOrdered list clicked!");
});