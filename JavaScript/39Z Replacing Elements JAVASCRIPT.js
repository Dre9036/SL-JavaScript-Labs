// 39Z Replacing Elements JAVASCRIPT

/* To replace an HTML element, the element.replaceChild(newNode, oldNode) method is used.
For example: 

<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

*/

<script>
var p = document.createElement("p");
var node = document.createTextNode("This is new");
p.appendChild(node);

var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.replaceChild(p, child);
</script>

// The code above creates a new paragraph element that replaces the existing p1 paragraph.

/* 
CODE PLAYGROUND SAME EXTRA JAVASCRIPT CODE
 //calling the function in window.onload to make sure the HTML is loaded
window.onload = function() { 
*/