// let odd = function(n){
//     console.log(!(n%2==0));
// }

// let even = function(n){
//     console.log(n%2==0);
// }

function OddOrEvenFactory(request){
    if(request =="odd"){
        let odd = function(n){
            console.log(!(n%2==0));
        }
    return odd;
    }
    else if(request =="even"){
        let even = function(n){
            console.log(n%2==0);
        }
    return even;
    }
}

let request = "odd";


function OddOrEvenFactory(request){
    if(request =="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request =="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
}