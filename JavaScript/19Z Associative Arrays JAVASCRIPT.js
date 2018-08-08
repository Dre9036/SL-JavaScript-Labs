// 19Z Associative Arrays JAVASCRIPT

/* While many programming languages support arrays with named indexes (text instead of numbers), called associative arrays, 
JavaScript does not.
However, you still can use the named array syntax, which will produce an object.
For example: */

var person = []; //empty array
person["name"] = "John";
person["age"] = 46;
document.write(person["age"]);
//Outputs "46"

/* Now, person is treated as an object, instead of being an array.
The named indexes "name" and "age" become properties of the person object.
As the person array is treated as an object, the standard array methods and properties will produce incorrect results. 
For example, person.length will return 0. */

//HTML CODE IS SAME