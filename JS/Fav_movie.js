let favmovie = "baghban";
let guess = prompt("Guess my favourite movie :");
while((guess != favmovie) ){
        if(guess =="quit")
        {
            console.log("You have quit the game!");
            break;
        }
    prompt("Not the Right one! Guess Again : ");
}
if( guess == favmovie)
{
    console.log("Congrats! You got the correct name.");
}
