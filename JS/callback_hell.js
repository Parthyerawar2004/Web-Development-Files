h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange){
//             nextColorChange();
//         }
//     },delay);
// }

// changeColor("blue", 1000, () => {
//     changeColor("yellow", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("orange", 1000, () => {
//                 changeColor("red", 1000);
//             });
//         });
//     });
// });

//Converting the Above Callback Hell into Promise Chaining
function changeColor(color, delay){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
        h1.style.color = color;
        let num = Math.floor(Math.random() * 10) + 1;
        if(num > 1){
            console.log(`Color Chnaged to ${color}`);
            resolve("Color Changed");
        }else{
            reject("Error: Color not changed");
        }
        
    },delay);
    });
}

//Promise Chaining
// changeColor("blue", 1000)
// .then(() => {
//     console.log("Color changed to Blue");
//     return changeColor("yellow", 1000)})
// .then(() => {
//     console.log("Color changed to Yellow");
//     return changeColor("Orange", 1000)
// })
// .then(() => {
// console.log("Color changed to Orange");
//     return changeColor("Pink", 1000)
// })
// .then(() => {
//     console.log("Color changed to Pink");
//     return changeColor("Red", 1000)
// })
// .then(() => {
//     console.log("Color changed to Red");
//     return changeColor("Black", 1000)
// })

//Converting the Above Promise Chaining into Async & Await
/*async function colorchange(){
    await changeColor("blue", 1000)
    await changeColor("yellow", 1000)
    await changeColor("Orange", 1000)
    await changeColor("Pink", 1000)
    await changeColor("Red", 1000)
    await changeColor("Black", 1000)
}*/

//In our code after execution of the promise there can be other lines of code also could be there then,
//If we get error in any of the awaited promise then the remaining code will not be executed
//To handle that we can use try & catch block in async function
async function colorchange(){
    try{
    await changeColor("blue", 1000)
    await changeColor("yellow", 1000)
    await changeColor("Orange", 1000)
    await changeColor("Pink", 1000)
    await changeColor("Red", 1000)
    await changeColor("Black", 1000)
    }catch(err){
        console.log("Error is :",err);
    }

    let a = 7;
    console.log(a);
    console.log("Value of a is :",a + a);
}