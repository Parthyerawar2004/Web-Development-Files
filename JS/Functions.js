function hello() {
    alert("Hello my name is Parth!");
}

hello();

function Me() {
    console.log("My name is Parth.");
    console.log("I am 20 years old.");
    console.log("I am from Nagpur.");
    console.log("I am a B.Tech student at GHRCE.");
}

Me();

function print1to5() {
    for( let i=1 ; i<=7 ; i++)
    {
        console.log(i);
    }
}

print1to5();

function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("Parth",20);

function sum(a,b){
    return a+b;
}
console.log(sum(sum(1,2),4))

//Function Expressions

let sumofnumbers = function(a,b){
    return a+b;
}
let hellotou = function(){
    console.log("hello");
}

let helloto = function(){
    console.log("Namaste");
}

//Higher order Function

function multiplegreet(func, count){
    for(let i = 0 ; i<count ; i++)
    {
        func();
    }
    let greet = function(){
        console.log("hello");
    }
}multiplegreet(greet, 100)
multiplegreet(function() {console.log("namaste")}, 100)