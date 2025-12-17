let names = ["parth" , "vedant", "yash", "yug" , "kunal" , "rohan" , "swarup"];

let [runnerup , winner , secondrunnerup , ...rest] = names;

let obj = {
    name : "parth",
    age : 20,
    city : "pune",
    country : "India",
    username : "MeUnstoppable_07",
    password : "12345",
};

let {name : myname , age, city : place ="mumbai"} = obj;  //still in console place will be "pune".