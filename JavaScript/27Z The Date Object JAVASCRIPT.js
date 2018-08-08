// 27Z The Date Object JAVASCRIPT

/* The Date object enables us to work with dates.
A date consists of a year, a month, a day, an hour, a minute, a second, and milliseconds.

Using new Date(), create a new date object with the current date and time. */

var d = new Date();
//d stores the current date and time

// The other ways to initialize dates allow for the creation of new date objects from the specified date and time.

new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)

/* JavaScript dates are calculated in milliseconds from 01 January, 1970 00:00:00 Universal Time (UTC). 
One day contains 86,400,000 millisecond.

For example: */

//Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);

/* JavaScript counts months from 0 to 11. January is 0, and December is 11.
Date objects are static, rather than dynamic. The computer time is ticking, but date objects don't change, once created. */