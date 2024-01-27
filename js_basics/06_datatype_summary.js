/**
 * Return type of variables in JavaScript
1) Primitive Datatypes (7 types)
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
 */

const { name } = require("tar/lib/types");

// Arrays
let myArr = [1,2,3,4,5]
console.log(myArr);

// Object
let myObj = {
    name:"Brahma",
    age:18
}
console.log(myObj);

// Function
let myFun = function fun(){
    console.log("Hello World")
}
myFun()


/*--------------------------------------------------------------------------------------*/

// Stack and Heap Memory

// Stack -> All Primitive Data types. Call by Value. 
// Heap -> Non Primitive Data types. Call by Reference

// Stack Operation: When the new variable is changed its not reflected in the original variable

let nameOne = "Brahma"
let nameTwo = nameOne

nameTwo = "Sahoo"

console.log(nameOne)
console.log(nameTwo)


// Heap Operation: Here when the something in the new variable is changed then its reflected in the original variable

let myObj1 = {
    name:"Brahma",
    pwd:"Password"
}

let myObj2 = myObj1
myObj2.pwd = "pass"

console.log(myObj1);
console.log(myObj2);



