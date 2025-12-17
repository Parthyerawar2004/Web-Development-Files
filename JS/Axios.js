/*let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let output = await fetchdata();
    console.log(output); // Promise { <pending> } because fetchdata is async function it always returns a promise
    let p = document.querySelector("#result");
    p.innerText = output; // displaying the fetched data in the paragraph
});

let url = 'https://catfact.ninja/fact';

async function fetchdata(){
    try{
        let res = await axios.get(url); // using axios to fetch data from the url
        return res.data.fact;
    } catch(err){
        return "No Data Found";
    }
}*/


let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let link = await getImage();
    console.log(link); // Promise { <pending> } because fetchdata is async function it always returns a promise
    let img = document.querySelector("#dogimage");
    img.setAttribute("src", link) // dispaly the fetched data in the image format
});

let url = 'https://dog.ceo/api/breeds/image/random';

async function getImage(){
    try{
        let res = await axios.get(url); // using axios to fetch data from the url
        return res.data.message;
    } catch(err){
        return "No Data Found";
    }
}