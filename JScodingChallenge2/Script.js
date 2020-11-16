//If else statements

var firstName = 'John';
var civilstatus = 'Married';

if (civilstatus === 'Married1') {
    console.log('John is Married');
}
else {
    console.log('John is a loser and will never marry');
}

var ismarried = true;

if (ismarried) {
    console.log('John is Married');
}
else {
    console.log('John is a loser and will never marry');
}

var johnBMI = 200;
var markBMI = 300;

if (johnBMI > markBMI) {
    console.log('John\s BMI is higher than Mark\s');
} else {
    console.log('Mark\s BMI is higher that John\s');
}

//Boolean Logic
var firstName = 'John';
var age = 33;

if (age < 20) {
    console.log(firstName+' is still a boy');
} else if (age >= 20 && age < 30) {
    console.log(firstName+' is a man');

} else {
    console.log(firstName +' is an old man');
}

//Turnary operator
var  firstname = 'John';
var age = 15;

age >= 18 ? console.log(firstname + ' Drinks beer') : console.log(firstname + ' Drinks juice');

var drink = age >=18 ? 'Whisky' : 'Coke';
console.log(firstname + ' drinks '+drink);

//switch statements
var job = 'driver';

switch (job) {
    case 'teacher' : 
        console.log('The person gives lessons');
        break;
    case 'programmer' :
    case 'driver' :
        console.log('The person writes software for a respectable software company or driver around');
        break;   

    default :
        console.log('The person does not want to work');     
}

//Truthy and falsy values and equality operators
//falsy values = undefined, null, 0, '',NaN
//Truthy are all the other values

var height;

if (height || height === 0) {
    console.log('The value is defined')
} else {
    console.log('The value was not defined')
}

//Equality operator

height = 23;
if (height === '23') {
    console.log('The == operator does type coercion');
} else {
    console.log('The === does not do type coeercion');

}

//Coding Challenge 2

var johnAV = (89 + 120 + 103)/3;
var mikeAV = (400,370,400) / 3;
var maryAV = (97,134,105) / 3;

switch (true) {
    case (johnAV > mikeAV) && (johnAV > maryAV) :
    //case (johnAV > maryAV) :
        console.log('John has the highest average of ' + johnAV);
        break;
    case (mikeAV > johnAV) && (mikeAV > maryAV) :
    //case (mikeAV > maryAV) :
        console.log('Mike has the highest average of ' + mikeAV); 
        break;
    case (maryAV > johnAV) && (maryAV > mikeAV) :
    //case (maryAV > mikeAV) :
        console.log('Mary has the highest average of ' + maryAV); 
          

}

//Functions

function calculateage (birthyear) {
    return 2018 - birthyear;

}

console.log('Peter is '+calculateage(1990) +' years old.');
console.log('Anton is '+calculateage(2010) +' years old.');
console.log('Willie is '+calculateage(2003) +' years old.');

//Function expressions
//var job1 = 'teacher';
//var myname = 'tony';

var whatDoYouDo = function(myname,job1) {
    switch (job1) {
        case 'teacher' : 
            return myname + ' teaches to read and write';
        case 'police' :
            return myname +' Protects people from themselves';
        default : 
            return myname +' Not sure I know what they do hey';
    }
 
}
console.log(whatDoYouDo('karel','cleaner'));


//arrays

var names = ['Andries','Gert','Pieter'];
var jare = [1973,1975,1976,1977];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);


console.log(names);
names.push('willie');
console.log(names);
names.push('Renate');
console.log(names);
names.unshift('Douglas');
console.log(names);
names.shift('Douglas');
console.log(names);

console.log(names.indexOf('Pieter')+' Is the position of Pieter in the names array');

johnrestaurantBills = [124,48,268];
johnrestaurantTips = [0,0,0];

if (johnrestaurantBills[0] >= 50 && johnrestaurantBills[0] <= 200){
    johnrestaurantTips[0] = johnrestaurantBills[0] * (15/100); 
} 

else if (johnrestaurantBills[0] < 50){
    johnrestaurantTips[0] = johnrestaurantBills[0] * (15/100); 
} 

else  {
    johnrestaurantTips[0] = johnrestaurantBills[0] * (15/100); 
}


if (johnrestaurantBills[1] >= 50 && johnrestaurantBills[1] <= 200){
    johnrestaurantTips[1] = johnrestaurantBills[1] * (15/100); 
} 

else if (johnrestaurantBills[1] < 50){
    johnrestaurantTips[1] = johnrestaurantBills[1] * (15/100); 
} 

else  {
    johnrestaurantTips[1] = johnrestaurantBills[1] * (15/100); 
}


if (johnrestaurantBills[2] >= 50 && johnrestaurantBills[2] <= 200){
    johnrestaurantTips[2] = johnrestaurantBills[2] * (15/100); 
} 

else if (johnrestaurantBills[1] < 50){
    johnrestaurantTips[2] = johnrestaurantBills[2] * (15/100); 
} 

else  {
    johnrestaurantTips[2] = johnrestaurantBills[2] * (15/100); 
}

console.log(johnrestaurantBills);
console.log(johnrestaurantTips);