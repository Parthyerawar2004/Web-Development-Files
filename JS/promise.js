// function savetoDb(data, success, failure){
//     let InternetSpeed = Math.floor(Math.random()*10) + 1;
//     if (InternetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb("Bewakoof.com", () => {
//     console.log("Data saved successfully!");
//         savetoDb("`", () => {
//             console.log("Data saved successfully!");
//             savetoDb("Shaadi.com", () => {
//                 console.log("Data saved successfully!");
//             }, () => {
//                 console.log("Data not saved. Please try again later.");
//             });
//         }, () => {
//             console.log("Data not saved. Please try again later.");
//         });
// }, () => {
//     console.log("Data not saved. Please try again later.");
// });


function savetoDb(data){
    return new Promise((resolve, reject) => {
        let InternetSpeed = Math.floor(Math.random()*10) + 1;
        if (InternetSpeed > 4){
            resolve("Success : Data is Successfully stored");
        }else{
            reject("Failure : Weak Connection");
        }
    });
}

// savetoDb("Hello Hold Jenson")
//     .then(() => {
//         console.log("Promisde Resolves");
//     })
//     .catch(() =>{
//         console.log("Promise Rejeccted");
//     });


// Same code as in line from 10 to 24 using Callback hell , Here we are using Promises Chaining 
// Promise chaining maeans one .then after another .then and a single .catch at the end to handle all errors
// Promise Chaining is more compact and easy to read and maintainable

savetoDb("Hello Hold Jenson") 
    .then((result) => {
        console.log("Data 1 saved Successfully");
        console.log("Result of Data1 Promise: ", result);
        return savetoDb("Data 2");
    })
    .then((result) => {
        console.log("Data 2 saved Successfully");
        console.log("Result of Data2 Promise: ", result);
        return savetoDb("Data 3");
    })
    .then((result) => {
        console.log("Data 3 saved Successfully");
        console.log("Result of Data3 Promise: ", result);
    })
    .catch(() =>{
        console.log("Promise Rejeccted");
    });