// 41Z Animations JAVASCRIPT

/* To create an animation, we need to change the properties of an element at small intervals of time. We can achieve this by 
using the setInterval() method, which allows us to create a timer and call a function to change properties 
repeatedly at defined intervals (in milliseconds).
For example: */

var t = setInterval(move, 500); 

/* This code creates a timer that calls a move() function every 500 milliseconds. 
Now we need to define the move() function, that changes the position of the box. */ 

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
}

// The move() function increments the left property of the box element by one each time it is called.

// ALL SYNTAX