const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"];

const image = images[Math.floor(Math.random()*images.length)] ;

//const bgImage = document.createElement("img");

//bgImage.src = `img/${image}` ;
//bgImage.id = "backgroundImg" ;

const body = document.querySelector("body");
body.style = `background-image:url("img/${image}")`;



//document.body.appendChild(bgImage)