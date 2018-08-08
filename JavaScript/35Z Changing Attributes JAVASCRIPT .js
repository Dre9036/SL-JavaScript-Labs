// 35Z Changing Attributes JAVASCRIPT 

/* Once you have selected the element(s) you want to work with, you can change their attributes. 
As we have seen in the previous lessons, we can change the text content of an element using the innerHTML property.
Similarly, we can change the attributes of elements.
For example, we can change the src attribute of an image: 

<img id="myimg" src="orange.png" alt="" /> 
<script>
var el = document.getElementById("myimg");
el.src = "apple.png";
</script>

We can change the href attribute of a link: */

<a href="http://www.example.com">Some link</a>
<script>
var el = document.getElementsByTagName("a");
el[0].href = "http://www.sololearn.com";
</script>

// Practically all attributes of an element can be changed using JavaScript.

/* CODE PLAYGROUND DIFFERENT CODE: JAVASCRIPT

//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var el = document.getElementsByTagName('a');
    el[0].href= 'http://www.sololearn.com';
};

*/