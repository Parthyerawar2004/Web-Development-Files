/*console.log("Follwing are the Odd numbers :")
for(let i=1 ; i<=15 ; i=i+2){
    console.log(i );
}*/

/*console.log("Following are the Even from 2 to 10 :");
for(let i=2 ; i<=10 ; i=i+2){
   console.log(i);
}*/

/*console.log("Table for 5:");
for(let i=1 ; i<=10 ; i++)
{
    console.log("5 * "+ i +" = "+i*5);
}*/
let n = prompt("Enter the number :");
n = parseInt(n);

console.log("Table for "+n+" :");
for(let i=1 ; i<=10 ; i++)
{
    console.log(n +" * "+ i +" = "+i*n);
}