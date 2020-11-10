//Noter

//Math operators
/*
var thisYear = 2020;
var MarkAge = prompt('Please input age of Mark');
var JohnAge = prompt('Please input age of John');

console.log('Mark is '+MarkAge+' years old');
console.log('John is '+JohnAge+' years old');


console.log('Mark is '+(MarkAge - JohnAge)+' years older than john');

console.log(thisYear + 50);
console.log(thisYear - 50);
console.log(thisYear / 50);
*/
//Logical Operators
/*
console.log(MarkAge < JohnAge);
var johnOlder = MarkAge < JohnAge;
console.log(johnOlder);
*/
//Operator Type
/*
console.log(typeof MarkAge);
console.log(typeof JohnAge);
console.log(typeof johnOlder);

var x;
console.log(typeof a);
*/
//Operar precedence
/*
var now = 2018;
var yearJohn = 1980;
var fullAge = 21;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
*/
//Excersize
var markHeight,markWeight,markBMI, johnHeight, johnWeight,johnBMI;

markHeight = prompt("Please enter the Height of Mark in meters");
markWeight = prompt("Please enter the Weight of Mark in kilograms");
johnHeight = prompt("Please enter the Height of John in meters");
johnWeight = prompt("Please enter the Weight of John in kilograms");

markBMI = markWeight / (markHeight^2);
johnBMI = johnWeight/(johnHeight^2);

console.log('The BMI for Mark is :'+markBMI);
console.log('The BMI for John is :'+johnBMI);

var markBMIgreaterthanJohn = markBMI >= johnBMI;

alert('Is the BMI of Mark greater than that of john ... ? '+markBMIgreaterthanJohn);










