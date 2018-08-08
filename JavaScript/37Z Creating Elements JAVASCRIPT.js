// 37Z Creating Elements JAVASCRIPT

/* Use the following methods to create new nodes:
element.cloneNode() clones an element and returns the resulting node.
document.createElement(element) creates a new element node. 
document.createTextNode(text) creates a new text node.

For example: 

var node = document.createTextNode("Some new text");

This will create a new text node, but it will not appear in the document until you append it to an existing element with one of the following methods:
element.appendChild(newNode) adds a new child node to an element as the last child node.
element.insertBefore(node1, node2) inserts node1 as a child before node2.

Example: */

<div id ="demo">some content</div>

<script>
  //creating a new paragraph
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");
  //adding the text to the paragraph
  p.appendChild(node);

  var div = document.getElementById("demo");
  //adding the paragraph to the div
  div.appendChild(p);
</script>

// This creates a new paragraph and adds it to the existing div element on the page.

/* 
CODE PLAYGROUND SAME EXTRA JAVASCRIPT CODE
 //calling the function in window.onload to make sure the HTML is loaded
window.onload = function() { 
*/