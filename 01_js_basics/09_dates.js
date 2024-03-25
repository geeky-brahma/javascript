let myDate = new Date()
console.log(myDate)  // 2024-01-28T18:20:33.771Z
console.log(myDate.toString())  // Sun Jan 28 2024 23:50:33 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString())  // 28/1/2024, 11:50:33 pm
console.log(myDate.toDateString())  // Sun Jan 28 2024
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(typeof myDate);  // object


let newDate = new Date(2023, 0, 1)
console.log(newDate.toLocaleString());
let newDateOne = new Date(2023, 0, 1, 5, 3)
console.log(newDateOne.toLocaleString());
let newDateTwo = new Date("2023-12-02")
console.log(newDateTwo.toLocaleString());

/**
 * We can define dates and times in the Date() constructor as arguments
 ** the month here starts from 0 i.e., month = 0 -> Jan
 * We can also give custom date formats in form of strings "yyyy-mm-dd" or "mm-dd-yyyy" or others
 */


let timeStamp = Date.now()
console.log(timeStamp)
console.log(newDateTwo.getTime())
console.log(`So time elapsed is ${timeStamp} - ${newDateTwo.getTime()} = ${timeStamp-newDateTwo.getTime()} seconds`);

/**
 * Date.now() gives the current seconds counting from January 1, 1970, UTC 
 */

let newDateThree = new Date()
console.log(newDateThree.getMonth());
console.log(newDateThree.getMinutes());

console.log(newDateThree.toLocaleString('default',{
    weekday : "long",
    day : "numeric"
}))

/**
 * date.toLocaleString() has some parameters as dicussed above
 */
