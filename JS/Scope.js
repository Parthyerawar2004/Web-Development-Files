//Lexical Scope
function outFunc(){
    let x = 5;
    let y = 10;
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    innerFunc();
} //Call outFunc();
//Hoisting Concept
function outFunc(){
    function innerFunc(){
        console.log(x);
        console.log(y);
    }
    let x = 5;
    let y = 10;
    innerFunc();
}//Call outFunc(); in console
