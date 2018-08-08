// 42Z Animations JAVASCRIPT

// The following code defines a timer that calls the move() function every 10 milliseconds: 

var t = setInterval(move, 10);

/* However, this makes our box move to the right forever. To stop the animation when the box reaches 
the end of the container, we add a simple check to the move() function and use the clearInterval() method to stop the timer. */

function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}

/* When the left attribute of the box reaches the value of 150, the box reaches the end of the container, based on a container 
width of 200 and a box width of 50.
The final code: */

var pos = 0; 
//our box element
var box = document.getElementById("box");
var t = setInterval(move, 10);

function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}

// Congratulations, you have just created your first JavaScript animation!

// CODE PLAYGROUND SAME EXTRA JAVASCRIPT CODE