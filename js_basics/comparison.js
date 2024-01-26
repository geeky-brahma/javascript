// Normal Comparisons between same data types work as expected 
// but when the data types are different then it can be confusing


// here the data type of both are converted to number
console.log("2">1);
console.log("02">1);

console.log(null>0);  // false
console.log(null==0); // false
console.log(null>=0); // true


/**
 * == equality check. It checks only for the value not the data type
 * === strict equality check. It checks for the value as well the data type
 */