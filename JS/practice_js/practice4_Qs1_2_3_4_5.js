//Question 1
let arr1 = [1,2,3,4,5,6,7,8,9,10];
num = 2;
for(i=1 ; i<10 ; i++)
{
    if(arr1[i] == num)
    {
        arr1.splice(i,1)
    }
}

console.log(arr1);

//Question 2
let number = 287152;
let count = 0;
let copy =number;
while(copy>0)
    {count++;
        copy=Math.floor(copy/10);
    }
console.log(count);

//Question 3
let numbers = 287152;
let sum = 0;
let a = number;
while(a>0)
    {
        digit=a%10;
        sum+=digit;
        a=Math.floor(a/10);
    }
console.log(sum);