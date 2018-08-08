// 36Z Changing Style JAVASCRIPT 

/* The style of HTML elements can also be changed using JavaScript.
All style attributes can be accessed using the style object of the element. 
For example: */

<div id="demo" style="width:200px">some text</div>
<script>
  var x = document.getElementById("demo");
  x.style.color = "6600FF";
  x.style.width = "100px";
</script>

/* The code above changes the text color and width of the div element.
All CSS properties can be set and modified using JavaScript. Just remember, that you cannot use dashes (-) in the 
property names: these are replaced with camelCase versions, where the compound words begin with a capital letter. 
For example: the background-color property should be referred to as backgroundColor. */

//CODE PLAYGROUND DIFFERENT CODE: JAVASCRIPT

/*

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    x.style.width = '100px';
};

*/