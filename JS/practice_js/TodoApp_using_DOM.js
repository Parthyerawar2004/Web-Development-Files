let strick = document.querySelector("button");

strick.addEventListener("click", function(){
    let inp = document.querySelector("#todo");

    let task = document.querySelector("#list");
    task.innerText = inp.value;
});