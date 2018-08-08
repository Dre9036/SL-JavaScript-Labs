// 45Z Events JAVASCRIPT

/* The onload and onunload events are triggered when the user enters or leaves the page. These can be useful 
when performing actions after the page is loaded.

<body onload="doSomething()">

Similarly, the window.onload event can be used to run code after the whole page is loaded.

window.onload = function() {
   //some code
}

The onchange event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.
For example: */

<input type="text" id="name" onchange="change()">
<script>
function change() {
 var x = document.getElementById("name");
 x.value= x.value.toUpperCase();
}
</script>