var index = 0;
var images = [];
var time = 3000;

images[0] = '../images/Lofi2.gif';
images[1] = '../images/Lofi1.gif';
images[2] = '../images/Lofi3.webp';

function changeImage(){
 getElementsByTagName("body")[0].style.backgroundImage = "images[0];"
 console.log("tried to change wallpaper")

 if(index < images.length - 1){
   index++;
 } else {
   index = 0;
 }

}

window.onload= changeImage;