//console.log('Hello World...!!!');

/* Coding challenge 1
var markHeight, markWeight, johnHeight, johnWeight, markBMI, johnBMI;
var markHeavierThanJohn;
  
markHeight = prompt('Please input the height of mark in mm');
markWeight = prompt('Please input the weight of mark in kg');

johnHeight = prompt('Please input the height of john in mm');
johnWeight = prompt('Please input the weight of john in kg');

markBMI = markWeight / (markHeight*markHeight);
johnBMI = johnWeight / (johnHeight*johnHeight);

markHeavierThanJohn = markBMI > johnBMI;

alert('The BMI of Mark is :'+ markBMI);
alert('The BMI of John is :'+ johnBMI);
alert('The fact that Mark\'s BMI is greater than that of john is '+ markHeavierThanJohn);

*/

//Coding challenge 2
/*
var johnScore1 = prompt('Please input the score for John\s first game');
var johnScore2 = prompt('Please input the score for John\s second game');
var johnScore3 = prompt('Please input the score for John\s third game');
var johnScoreAvg = johnScore1 +johnScore2 + johnScore3;

var mikeScore1 = prompt('Please input the score for Mike\s first game');
var mikeScore2 = prompt('Please input the score for Mike\s second game');
var mikeScore3 = prompt('Please input the score for Mike\s third game');
var mikeScoreAvg = mikeScore1 + mikeScore2 + mikeScore3;

var maryScore1 = prompt('Please input the score for Mary\s first game');
var maryScore2 = prompt('Please input the score for Mary\s second game');
var maryScore3 = prompt('Please input the score for Mary\s third game');
var maryScoreAvg = maryScore1 + maryScore2 + maryScore3;

if (johnScoreAvg > mikeScoreAvg && johnScoreAvg > maryScoreAvg) 
    {
        prompt('John has the highest score of :'+johnScoreAvg);
    }
else if (mikeScoreAvg > johnScoreAvg && mikeScoreAvg > maryScoreAvg) 
    {
         prompt('Mike has the highest score of :'+mikeScoreAvg);
    }
else 
    {
        prompt('Mary has the highest score of :'+maryScoreAvg);
    }

*/

//Coding challenge 3
/*
var untipped = [124,48,268];
var tips = [];
var finalAmounts = [];

/*
untipped[0] < 50 ? tips[0] = 20/untipped[0] : untipped[0] > 50 && untipped[1] <= 200 ? tips[0] = 15/untipped[2] : tips[0] = 10/untipped[0];
untipped[1] < 50 ? tips[1] = 20/untipped[1] : untipped[1] > 50 && untipped[1] <= 200 ? tips[1] = 15/untipped[1] : tips[1] = 10/untipped[0];
untipped[2] < 50 ? tips[2] = 20/untipped[2] : untipped[2] > 50 && untipped[2] <= 200 ? tips[2] = 15/untipped[2] : tips[2] = 10/untipped[2];
/*

function calculateTips(amountToBeTipped) {
    if (amountToBeTipped < 50) {
        return 20/amountToBeTipped;
        
    } 
    else if (amountToBeTipped > 50 && amountToBeTipped <= 200){
        return 15/amountToBeTipped;
        
    }
    else if (amountToBeTipped > 200) {
        return 10/amountToBeTipped;
       
    }
}


tips[0] = calculateTips(untipped[0]);
tips[1] = calculateTips(untipped[1]);
tips[2] = calculateTips(untipped[2]);

finalAmounts[0] = untipped[0] + tips[0];
finalAmounts[1] = untipped[0] + tips[1];
finalAmounts[2] = untipped[0] + tips[2];

 
//finalAmounts[0] = tipe[0]

console.log(untipped[0],untipped[1],untipped[2]);
console.log(tips[0],tips[1],tips[2]);
console.log(finalAmounts[0],finalAmounts[1],finalAmounts[2]);
//console.log(tips[0],tips[1]),tips[2]);


*/ //End excercise 3
//Objects and properties Excercise 4
/*

var john = {
    height : 1.6,
    weight : 80,
    calcBmi : function() {
        return this.weight / (this.height * this.height);
    }
}

var mark = {
    height : 1.6,
    weight : 80,
    calcBmi : function() {
        return this.weight / (this.height * this.height);
    }
}

//console.log(john.bmi);

console.log(john.height,john.weight);

console.log(john.calcBmi());

console.log('John has a BMI of :' + john.calcBmi());
console.log('Mark has a BMI of :' + mark.calcBmi());

var johnBmi = john.calcBmi();
var markBmi = mark.calcBmi();

//console.log(johnBmi,markBmi);


if (john.calcBmi() > mark.calcBmi()) {
 console.log('John has the highest BMI @ :' + john.calcBmi());
}
else if (john.calcBmi() < mark.calcBmi()) {
    console.log('Mark has the highest BMI @ :' + mark.calcBmi());
}
else if (john.calcBmi() === mark.calcBmi()) {
    console.log('John and Mark\'s BMI\'s is exactly the same');
}

console.log('Turnary operator test :');

//johnBmi > markBmi ?  console.log('John has the highest BMI @ :' + //john.calcBmi()) 

johnBmi === markBmi ? console.log('The BMIs for both guys are the same') : console.log('Unexplained');

*/ 
//End excercise 4
/*Begin excercise 5
var johnTipsCalculator = {
    restaurantBills : [],
    restaurantTips : [],
    restaurantTotals : [],
    calculateTips : function(bill) {
        if (bill <= 50) {
           return 20/bill; 
        } 
        else if (bill > 50 && bill <= 200){
            return 15/bill; 
        }
        else if (bill > 200) {
            return 10/bill; 
        },
     //return 1;
    },
    calculateTotals : function() {
        return 1;
    }
}

var markTipsCalculator = {
    restaurantBills : [],
    restaurantTips : [],
    restaurantTotals : [],
     calculateTips : function(bill) {
        if (bill <= 50) {
           return 20/bill; 
        } 
        else if (bill > 50 && bill <= 200){
            return 15/bill; 
        }
        else if (bill > 200) {
            return 10/bill; 
        },
    calculateTotals : function() {
        return 1;
    }
}

//Populating john's tips and totals into arrays

var johnRestaurantsCount = prompt('How many restaurants did John visit? :');


for (var i=0;i<johnRestaurantsCount; i++) {
    johnTipsCalculator.restaurantBills[i] = prompt('How much was John\'s bill for restaurant '+(i+1)+'? :');
    //johnTipsCalculator.restaurantTips[i] = 
    
    
}

console.log('Johns restaurant bills : '+johnTipsCalculator.restaurantBills);
console.log('Johns restaurant bill tips : '+johnTipsCalculator.restaurantTips);
console.log('Johns restaurant bill totals : ' + johnTipsCalculator.restaurantTotals);

var markRestaurantsCount = promp('How man restaurants did Mark visit? :');

for (var i=0;i<markRestaurantsCount,i++) {
    markTipsCalculator.restaurantBills[i] = prompt('How much was Marks\'s bill for restaurant '+(i+1)+'? :');
    //johnTipsCalculator.restaurantTips[i] = 
    
    
}

console.log('Marks restaurant bills : '+markTipsCalculator.restaurantBills);
console.log('Marks restaurant bill tips : '+markTipsCalculator.restaurantTips);
console.log('Marks restaurant bill totals : ' + markTipsCalculator.restaurantTotals);


End excercise 5
*/




