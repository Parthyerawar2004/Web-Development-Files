async function hello() {
    return "Hello Jenson!";
}


async function helloworld() {
    // throw "Error 404 Page Not Found";
    return "Hello Jenson!";
}


let helloanimeworld = async () => {
    return "Hello Shinobo!";
}

helloworld()
    .then((result) => {
        console.log("Message was Successfully fetched :",result);
    })
    .catch((err) => {
        console.log("Weak Connection :",err);
    });

function getNum (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log("Random Number:", num);
            resolve();
        },1000);
    });
}

async function Result(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}