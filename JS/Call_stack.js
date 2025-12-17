function hello(){
    console.log("Hello Call Stack!");
}
function next(){
    hello();
    console.log("Next Function in Call Stack");
}
console.log("Checking Call stack");
next();
console.log("checking completed!");

function first(){
    return 2;
}
function second(){
    return first() + first();
}
function third(){
    let ans = second() + first();
    console.log(ans);
}
third();