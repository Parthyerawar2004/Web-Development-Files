let url = 'https://catfact.ninja/fact';

/* fetch(url)
    .then((res) => {
        res.json().then((data) => {
            console.log(data);
    })
    })
        .catch ((err) => {
        console.log("Error occured :",err);
    }) */

/*fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
            console.log(data.fact);
            return fetch(url); // returning another fetch promise, I left it and error occured that no return for next response to fetch
    })
    .then((res) => {
        return res.json()
    })
    .then((data1) => {
            console.log(data1.fact);
    })
    .catch ((err) => {
        console.log("Error occured :",err);
    })
    console.log("This log is printed before fetch response is received");*/



//Fetching multiple data using async await function
async function fetchdata(){
    try{
        let res = await fetch(url);
        let info = await res.json();
        console.log(info.fact);
    } catch(err){
        console.log("Error occured :",err);
    }
}