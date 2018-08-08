// 48Z Capturing vs. Bubbling JAVASCRIPT

/* The addEventListener() method allows you to specify the propagation type with the "useCapture" parameter.

addEventListener(event, function, useCapture)

The default value is false, which means the bubbling propagation is used; when the value 
is set to true, the event uses the capturing propagation.

//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);

This is particularly useful when you have the same event handled for multiple elements in the DOM hierarchy. */