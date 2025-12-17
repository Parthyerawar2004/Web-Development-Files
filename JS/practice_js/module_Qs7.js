const square = (n) => n*n; 

let id = setInterval(() => {
    console.log("Hello World!");
},2000);
setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval ran!");
},10000);