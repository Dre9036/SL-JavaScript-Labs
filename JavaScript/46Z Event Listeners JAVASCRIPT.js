// 46Z Event Listeners JAVASCRIPT

/* The addEventListener() method attaches an event handler to an element without overwriting existing event handlers. 
You can add many event handlers to one element.
You can also add many event handlers of the same type to one element, i.e., two "click" events.
element.addEventListener(event, function, useCapture);

The first parameter is the event's type (like "click" or "mousedown").
The second parameter is the function we want to call when the event occurs.
The third parameter is a Boolean value specifying whether to use event bubbling or event capturing. 
This parameter is optional, and will be described in the next lesson.
Note that you don't use the "on" prefix for this event; use "click" instead of "onclick".

Example:
element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}

This adds two event listeners to the element.
We can remove one of the listeners:
element.removeEventListener("mouseover", myFunction);

Let's create an event handler that removes itself after being executed: */

<button id="demo">Start</button>

<script>
var btn = document.getElementById("demo");
btn.addEventListener("click", myFunction);

function myFunction() {
  alert(Math.random());
  btn.removeEventListener("click", myFunction);
}
</script>

*/

/* After clicking the button, an alert with a random number displays and the event listener is removed.
Internet Explorer version 8 and lower do not support the addEventListener() and removeEventListener() methods.
 However, you can use the document.attachEvent() method to attach event handlers in Internet Explorer. */
 
 // CODE PLAYGROUND SAME EXTRA JAVASCRIPT CODE