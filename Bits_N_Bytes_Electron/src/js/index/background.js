var index = 0;
var images = [];
var time = 3000;

images[0] = '../../images/Lofi1.gif';
images[1] = '../../images/Lofi1.gif';
images[2] = '../../images/Lofi1.gif';

function changeImage(){
 document.slide.src = images[index];

 if(index < images.length - 1){
   index++;
 } else {
   index = 0;
 }

}

window.onload=changeImage;