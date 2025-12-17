//1st question(Check if all elements in an array are divisible by 10 or not)
num = [2,5,1,7,10,4,80,15,40,71];
let ans = num.every((el) => {
    return el%10 ==0;
});

//Find th eminimum value in an array
let arr5 = [201,35,63,27,110,40,80,75,60,71];
let result =arr5.reduce((mini , el) => {
    console.log(mini);
    if(mini < el){
        return mini;
    }else{
        return el;
    }
});