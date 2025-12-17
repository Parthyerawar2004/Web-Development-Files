//Sebding header using axios
/*let url = "https://icanhazdadjoke.com/";

async function fetchJoke(){
    try{
        let config = {
            header :{ Accept : "application/json"}
        };
        let res = await axios.get(url, config);
        console.log(res.data);
    } catch(err){
        console.log("Error occured :", err);
    }
}*/


//Activity on query string using axios
let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country)
    let universitynames = await fetchUniversityByName(country);
    showcolleges(universitynames);
});

function showcolleges(universitynames){
    let output = document.querySelector("#output");
    output.innerText = "";
    for(college of universitynames){
        console.log(college.name);
        output.innerHTML += `<li>${college.name}</li>`;
    }
}

async function fetchUniversityByName(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    } catch(err){
        return err;
    }
}