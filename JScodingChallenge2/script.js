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

/*

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
*/

//Objects and properties
//Object literal
/*
var john = {
        firstName : 'Abraham',
        lastname : 'Poggenpoel',
        birthyear : '1975',
        family : ['Susan','Willemien','Cleopatra'],
        job : 'Teacher',
        salary : 40000,
        ismarried : false

}

console.log('My eerste naam is : '+john.firstName);

console.log('John se familie lede is :'+john.family[2]);
//Mutate object data
john.job = 'senator';

console.log(john.job);

john['salary'] = 50500;
console.log(john['salary']);

//Another way of declaring the object new object
jane = new Object;
jane.name = 'Jane';

console.log(jane.name);
//Objects and methods
*/

//Coding challenge 4

mark = {
    fullName : 'Mark Spark',
    height : 1.70,
    weight : 160,
    bmi : 0,
    markbmi : function (height,weight) {
        return weight / (height * height);
    }

}

john = {
    fullName : 'John Wayne',
    height : 1.95,
    weight : 220,
    bmi : 0,
    johnbmi : function (height,weight) {
        return weight / (height * height);
    }

}
//var johnbmi = john.johnbmi(1.7,160);

mark.bmi = mark.markbmi(mark.height,mark.weight);
john.bmi = john.johnbmi(john.height,john.weight);

console.log(mark.fullName +' BMI is at :'+ mark.markbmi(mark.height,mark.weight));
console.log(john.fullName +' John\s BMI is at :'+ john.johnbmi(john.height,john.weight));

mark.bmi > john.bmi ? console.log('The BMI of '+mark.fullName+' is higher than that of '+john.fullName):
                          console.log('The BMI of '+mark.fullName+' is lower  that that of '+john.fullName);


//Loops and iterations

var johnRestaurantCount,markRestaurantCount;

//johnRestaurantCount = prompt('How many restaurants did john and his family visit when they were on holiday ? :');
//markRestaurantCount = prompt('How many restaurants did mark and his family visit when they were on holiday ? :');

//console.log(johnRestaurantCount);
//console.log(markRestaurantCount);


var john = {
    restaurantCount : 0,
    restaurantBills : [],
    restaurantTips : [],
    restaurantTotalBills : [],
    tipaverage : 0
}

var mark = {
    restaurantCount : 0,
    restaurantBills : [],
    restaurantTips : [],
    restaurantTotalBills : []
}

//Reading number of restaurants John visited
john.restaurantCount = prompt('How many restaurants did john and his family visit when they were on holiday ? :');

for (i=0;i<john.restaurantCount;i++) {
    john.restaurantBills[i] = prompt('Please enter John\'s bill amount for restaurant :'+(i+1));
}

for (i=0;i<john.restaurantBills.length;i++) {
    //console.log(john.restaurantBills[i]);
    if (john.restaurantBills[i] < 50){
        john.restaurantTips[i] = john.restaurantBills[i] * (20/100);
    }
    else if (john.restaurantBills[i] >= 50 && john.restaurantBills[i] <= 200){
        john.restaurantTips[i] = john.restaurantBills[i] * (15/100);
    }
    else if (john.restaurantBills[i] > 200) {
        john.restaurantTips[i] = john.restaurantBills[i] * (10/100);
    }
}

console.log(john.restaurantBills);
console.log(john.restaurantTips);

//Calculate the tip average

for (i=0;i<john.restaurantBills.length;i++){
    john.tipaverage = john.tipaverage + john.restaurantTips[i];
}
john.tipaverage = john.tipaverage/john.restaurantTips.length;

console.log('The average tips for John was :'+john.tipaverage);


//Reading number of restaurants Mark visited
mark.restaurantCount = prompt('How many restaurants did Mark and his family visit when they were on holiday ? :');

for (i=0;i<mark.restaurantCount;i++) {
    mark.restaurantBills[i] = prompt('Please enter Mark\'s bill amount for restaurant :'+(i+1));
}

for (i=0;i<mark.restaurantBills.length;i++) {
    //console.log(mark.restaurantBills[i]);
    if (mark.restaurantBills[i] < 50){
        mark.restaurantTips[i] = mark.restaurantBills[i] * (20/100);
    }
    else if (mark.restaurantBills[i] >= 50 && mark.restaurantBills[i] <= 200){
        mark.restaurantTips[i] = mark.restaurantBills[i] * (15/100);
    }
    else if (mark.restaurantBills[i] > 200) {
        mark.restaurantTips[i] = mark.restaurantBills[i] * (10/100);
    }
}



//Calculate the tip average for Mark

for (i=0;i<mark.restaurantBills.length;i++){
    mark.tipaverage = mark.tipaverage + mark.restaurantTips[i];
}
mark.tipaverage = mark.tipaverage/mark.restaurantTips.length;

console.log('The average tips for Mark was :'+mark.tipaverage);
