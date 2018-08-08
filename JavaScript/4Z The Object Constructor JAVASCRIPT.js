// 4Z The Object Constructor JAVASCRIPT

/* In the previous lesson, we created an object using the 
object literal (or initializer) syntax.

var person = {
name: "John", age: 42, favColor: "green"
};

This allows you to create only a single object.
Sometimes, we need to set an "object type" that can be used to 
create a number of objects of a single type.
The standard way to create an "object type" is to use an object constructor function.

/* SYNTAX:

function person(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

*/

/* The above function (person) is an object constructor, which takes parameters
 and assigns them to the object properties. 
The this keyword refers to the current object.

Note that this is not a variable. It is a keyword, and its value cannot be changed.

*/

// HTML CODE IS SAME 