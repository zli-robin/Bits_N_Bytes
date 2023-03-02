var index = 0;
var images = [];
var time = 30000;

images[0] = '../images/Lofi2.gif';
images[1] = '../images/Lofi1.gif';
images[2] = '../images/Lofi3.webp';

function changeImage() {
    var html = document.getElementsByTagName("HTML")[0];
        html.style.backgroundImage = "url('" + images[index] + "')";
   if (index < images.length - 1) {
      index++;
   } else {
      index = 0;
   }
   //setTimeout(changeImage, time);
}

window.onload = changeImage;
