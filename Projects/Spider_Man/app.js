let smallImages = document.getElementsByClassName("oldImg");

for(let i = 0 ; i < smallImages.length ; i++){
    console.dir(smallImages[i].src);   //This will log the full URL of the image 
}

console.dir(document.querySelectorAll("div a"));

let links = document.querySelectorAll(".box a")
for(let i = 0 ; i < links.length ; i++){
    console.log(links[i].style.color = 'Purple'); //This will change the color of all links inside elements with class 'box' to purple
}