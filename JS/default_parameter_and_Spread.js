function sum(a, b=9){
    return a*b;
}
sum(3);

// Spread operator with arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["parthyerawar","vedantmankar","yashpatil","yuglodha"];

let newarr =[...arr1];
console.log(...newarr);
console.log(arr2);

let even = [2, 4, 6, 8, 10];

let odd = [1, 3, 5, 7, 9];

let combined = [...even, ...odd];
console.log(combined);

// Spread operator with object
let data = {
    email : "parthyerawar@gmail.com",
    passwaord : "abcd",
};

let datacopy = {...data , id : 123 , country : "India"};
console.log(datacopy);

let obj1 = {...even};