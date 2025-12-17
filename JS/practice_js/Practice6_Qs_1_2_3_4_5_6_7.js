//Question 1
function printapoem(){
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky.");
}
printapoem();

//Question 2
function diceroll(){
    num = Math.floor(Math.random()*6+1);
    console.log("The number on Dice after rolling is "+num);
}
diceroll();

//Question 3
function Average(a,b,c) {
    num=(a+b+c)/3;
    console.log(`Average of 3 numbers is : ${num}`)
}
Average(5,12,95);

//Question 4
function CreateTable(num) {
    console.log("Table of "+num+" :");
    for(let i=1 ; i<=10 ; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
CreateTable(14);

//Question 5
function sumofnumbers(n){
    let sum = 0;
    for(let i =0 ; i<=n ; i++)
        {
            sum+=i;
        }
    // console.log(`The sum of ${n} is : ${sum}`);
    return sum;
}
// sumofnumbers(12); call it in console

//Question 6
let arr = ["Hey! ","What ","are ","you ","doing ","there?"];
function concatstring(arr){
    let result ="";
    for(let j =0 ; j<=arr.length ; j++)
        {
            result+=arr[j];
        }
        return result;
}

//Question 7
let greet ="hello";

function changegreet(){
    let greet ="Namaste";
    console.log(greet);
    function innergreet(){
        console.log("greet");
    }
}
console.log(greet)
changegreet();