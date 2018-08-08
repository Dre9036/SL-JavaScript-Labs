// 10Z Methods JAVASCRIPT

// You can also define the function outside of the constructor function and associate it with the object.

function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}

/* As you can see, we have assigned the object's yearOfBirth property to the bornYear function.
The this keyword is used to access the age property of the object, which is going to call the method.

Note that it's not necessary to write the function's parentheses when assigning it to an object. */