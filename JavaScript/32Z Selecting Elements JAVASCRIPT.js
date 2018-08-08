// 32Z Selecting Elements JAVASCRIPT

/* All HTML elements are objects. And as we know every object has properties and methods.
The document object has methods that allow you to select the desired HTML element.
These three methods are the most commonly used for selecting HTML elements: */

//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)

// In the example below, the getElementById method is used to select the element with id="demo" and change its content:

var elem = document.getElementById("demo");
elem.innerHTML = "Hello World!";

// The example above assumes that the HTML contains an element with id="demo", for example <div id="demo"></div>.