let str = "123"
console.log(typeof str);
console.log(typeof(str));

let valueInNumber = Number(str)
console.log(typeof valueInNumber);
console.log(valueInNumber);

/**
 * "22" => 22
 * "32abc" => NaN (Not a Number)
 * true => 1; false => 0
 */


let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/**
 * 1 => true; 0 => false
 * "" => false
 * "Brahma" => true
*/

let someNumber = 123
let stringOfNuber = String(someNumber)
console.log(stringOfNuber);
console.log(typeof stringOfNuber);