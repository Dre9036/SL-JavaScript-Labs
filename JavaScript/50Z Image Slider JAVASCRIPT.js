// 50Z Image Slider JAVASCRIPT

/* Now we need to handle the Next and Prev button clicks and call the corresponding functions to change the image.
HTML:
<div>
  <button onclick="prev()"> Prev </button>
  <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg" 
    width="200px" height="100px"/>
  <button onclick="next()"> Next </button>
</div>

JS: */

  var images = [
  "http://www.sololearn.com/uploads/slider/1.jpg", 
  "http://www.sololearn.com/uploads/slider/2.jpg", 
  "http://www.sololearn.com/uploads/slider/3.jpg"
  ];
  var num = 0;

function next() {
  var slider = document.getElementById("slider");
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  }

function prev() {
  var slider = document.getElementById("slider");
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
}

/* The num variable holds the current image. The next and previous button clicks are handled by 
their corresponding functions, which change the source of the image to the next/previous image in the array.
We have created a functioning image slider! */