let btns = document.querySelectorAll("button");

for(let btn of btns){
    btn.addEventListener("dblclick", function(){
        alert("U double clicked the button!");
    });
}