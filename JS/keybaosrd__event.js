let input = document.querySelector("input");

// input.addEventListener("keyup", function(event){
//     console.log("Key: ",event.key)
//     console.log("Code: ",event.code)
//     console.log("Key was Clicked");
// });

input.addEventListener("keydown", function(event){
    console.log("event.code: ", event.code);
    if(event.code =="KeyW"){
    console.log("Character moves Up");
    }else if(event.code =="KeyS"){
    console.log("Character moves Down");
    }else if(event.code =="KeyA"){
    console.log("Character moves Left");
    }else if(event.code =="KeyD"){
    console.log("Character moves Right");
    }
});