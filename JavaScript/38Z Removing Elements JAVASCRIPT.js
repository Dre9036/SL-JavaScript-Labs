// 38Z Removing Elements JAVASCRIPT

/* To remove an HTML element, you must select the parent of the element and use the removeChild(node) method.
For example: 

<div id="demo">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

*/

<script>
var parent = document.getElementById("demo");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>


/* This removes the paragraph with id="p1" from the page.
An alternative way of achieving the same result would be the use of the parentNode property to get the parent of the element we want to remove:
var child = document.getElementById("p1");
child.parentNode.removeChild(child); */

/* 
CODE PLAYGROUND SAME EXTRA JAVASCRIPT CODE
 //calling the function in window.onload to make sure the HTML is loaded
window.onload = function() { 
*/