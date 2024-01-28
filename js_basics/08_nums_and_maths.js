const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance)
console.log(balance.toString())
console.log(balance.toString().length)

/**
 * num.toString(): converts the number to string so that we can apply the string methods on the number
 */

console.log(balance.toFixed(3))

/**
 * num.toFixed(number-of-digits): it is the number of decimal digits that needs to be displayed after the decimal point 
 */

const newNum = 23.8993
console.log(newNum.toPrecision(3));  // 23.9
const newNumOne = 123.8993
console.log(newNumOne.toPrecision(3)); // 124
const newNumTwo = 1123.8993
console.log(newNumTwo.toPrecision(3)); // 1.12 x 10^3

/**
 * num.toPrecision(number-of-digits): number-of-digits is the number of digits that needs to be displayed. Basically it rounds off the rest of the digits
 */

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // 10,00,000

/**
 * num.toLocaleString(): adds commas to very large numbers to increase their readability
 */


/***************************************MATHS************************************* */

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

/**
 * Math.random() returns values between 0 and 1
 */

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

/**
 * Formula to get numbers between a specific range of min and max
 */
