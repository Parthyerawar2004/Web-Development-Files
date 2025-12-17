let form = document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let user = document.querySelector("#user");
    let email = document.querySelector("#email");
    let pass = document.querySelector("#pass");
    console.log("User:", user.value);
    console.log("Email:", email.value);
    console.log("Password:", pass.value);
    let input = document.querySelector("input");
    console.dir(input);
    // console.log(input.value);
    console.log("Form submitted!");
});

let user = document.querySelector("#user");

user.addEventListener("change", function() {
    console.log("Input change and Final value :", this.value);
});

let email = document.querySelector("#email");

email.addEventListener("Input", function(){
    console.log("Input event triggered and value :",this.value)
});