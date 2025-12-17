let max = prompt("Enter the maximum number :");
max = parseInt(max);
let random = Math.floor(Math.random()*max+1);
let a = prompt("Enter the number you want to guess :");
while(random != a)
{
    if(a == "quit")
    {
        alert("You have Quit the Game.");
        break;
    }
    else if(a < random)
    {
        a = alert("Too Low! Try Again .");
    }
    else if(a > random)
    {
        a = alert("Too High! Try Again .");
    }
    a = prompt("Enter the number you want to guess :");
}
if(a == random)
   {
     alert("Congrats! You have guessed the correct number! Random number was "+random);
   }