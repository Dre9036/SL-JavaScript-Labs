// 11Z Methods JAVASCRIPT

// Call the method as usual.

function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}

var p = new person("A", 22);
document.write(p.yearOfBirth());

// Outputs 1994

// Call the method by the property name you specified in the constructor function, rather than the function name.