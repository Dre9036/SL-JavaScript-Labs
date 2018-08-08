// 26Z setInterval JAVASCRIPT 

/* The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
It will continue calling the function until clearInterval() is called or the window is closed.

For example: */

function myAlert() {
   alert("Hi");
}
setInterval(myAlert, 3000);

/* This will call the myAlert function every 3 seconds (1000 ms = 1 second).
Write the name of the function without parentheses when passing it into the setInterval method. */