'use strict';

console.log(`Hello ek is gereed`);

let maxTempAr = [];
let tempCount;

tempCount = prompt('Please input the amount of max temps');

if (tempCount > 0) {
  for (let i = 0; i<=tempCount;i++) {
    maxTempAr[i] = prompt(`Please input maxTemp no ${i} : `);
  }

}

function printForecast (maxTempAr) {
let outString
for(let i = 0;i<=maxTempAr.length;i++) {
  outString += `${maxTempAr[i]} in ${i+1} day/s ... `;
  }

  console.log(outString);
}

printForecast(maxTempAr);
