// 33Z Selecting Elements JAVASCRIPT

/* The getElementsByClassName() method finds all elements by class name and returns them as an array.
For example, if our HTML page contained three elements with class="demo", the following code would return all those elements as an array: */

var arr =  document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML = "Hi";

/* Similarly, the getElementsByTagName method returns all of the elements of the specified tag name as an array.
The following example gets all paragraph elements of the page and changes their content: */

<p>hi</p>
<p>hello</p>
<p>hi</p>
<script>
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
</script>

// The script will result in the following HTML:

<p>Hi there</p>
<p>Hi there</p>
<p>Hi there</p>

// We used the length property of the array to loop through all the selected elements in the above example.
