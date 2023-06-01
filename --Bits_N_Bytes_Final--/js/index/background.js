var index = 0;
var images = [];
var time = 3000;

images[0] = './images/Lofi1.gif';
images[1] = './images/Lofi2.gif';
images[2] = './images/Lofi3.webp';
/**
 *  Für die oberen File Pfade gehen wir vom HTML aus, da dieses JavaScript nur den src Attribut ändert und somit das HTML nach dem Image sucht.
 *  For the upper file paths we start from the HTML, because this JavaScript only changes the src attribute and thus the HTML searches for the image.
 */

function changeImage(){
 document.slide.src = images[index];
 if(index < images.length - 1){
   index++;
 } else {
   index = 0;
 }
}
/**
 * Die Bilder werden in der oberen Reihenfolge von 0 bis 3 durch gewechselt.
 * The pictures are changed in the upper order from 0 to 3.
 */


window.onload=changeImage; // Nachdem Landen des Fensters wird das Hintergrundbild inizial verändert. After the Window has loaded the Backgroundimage is iniziali changed to the first of the image array.