let arr = [1, 2, 3, 4, 5];

let print =(function(el){
    console.log(el);
});
arr.forEach(print);

//OR in below we are accessing each element of the array using a function defination
arr.forEach(function(el){
    console.log(el);
});

//oR by Arrow function
arr.forEach((el)=>{
    console.log(el);
});


let arr2 = [
    {
        name : "Parth",
        marks : 89.3,
    },
    {
        name : "Vedant",
        marks : 93,
    },
    {
        name : "Yug",
        marks : 96,
    },
];
arr2.forEach((student) => {
    console.log(student.name + " had scored " + student.marks + " marks.");
});

//Map array method 
let num = [1,2,3,4];

let double = num.map((el) =>{
    console.log(el);
    return el;
});

//sgpa and cgpa calculation below are code are same
let sgpa =arr2.map(function(el){
    return el.marks/10;
});
let cgpa =arr2.map((el) => {
    return el.marks/10;
});

//filer array method
let num2 = [2,5,7,1,3,11,9,12,6,8,10,4];
let ans = num2.filter((el) => {
    return el%2 !=0 ;
});

//Reduce array method
let digit = [2,3,4,5,6,7];
let finalval = digit.reduce((result, el) => (result + el));

//Maximum number in an array using reduce array method
let arr4 = [7,4,9,2,10,3,1,5,8];

let max = arr4.reduce((max ,el) => {
    if(max < el){
        return el;
    }else {
        return max;
    }
});

//finding maximum value in JS
let num11 = [31,51,23,82,94,99,75,43,64,21,17];
let maxi = -1;
for(let i = 0 ; i <num11.length ; i++){
    if(num11[i] > maxi ){
        maxi =num11[i];
    }
}
console.log(maxi);