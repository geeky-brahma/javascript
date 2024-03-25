function myFun() {
    console.log("First Function!!");
}

// myFun();

// function addTwoNumbers(num1, num2) {     // num1 and num2 are Parameters here
//     console.log(num1 + num2);    
// }
// addTwoNumbers(2,3);      // 2,3 are Arguments
function addTwoNumbers(num1, num2) {     // num1 and num2 are Parameters here
    return (num1 + num2);    
}
const res = addTwoNumbers(2,3);      // 2,3 are Arguments
// console.log("Result: ", res);

function isLoggedIn(username){
    if(!username){
        console.log("Enter a valid username");
        return
    }
    return `${username} is Logged In`
}
// console.log(isLoggedIn("Brahma"));
// console.log(isLoggedIn());

function isLoggedIn2(username = "testUser"){    // Passing default parameters i.e., if there is nothing passed to the function parameters then this default value will be used
    if(!username){
        console.log("Enter a valid username");
        return
    }
    return `${username} is Logged In`
}
// console.log(isLoggedIn2());


//################################ Passing Objects into Functions ####################### 
let my_obj = {
    username : "brahma",
    price : 100
};
function objOperator(obj) {
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
} 
// objOperator(my_obj);
// objOperator({
//     username : "Dora",
//     price : 1000
// });


//################################ Passing Arrays into Functions ####################### 

const arr = [1,2,3,4]
function arrayOperator(array) {
    console.log(`Second element is: ${array[1]}`);
}
// arrayOperator(arr);
// arrayOperator([100, 200, 300, 400]);


/**
 * Rest Operator 
 * function fName(...theArgs){
 * }
 * in ...theArgs, ... is the spread operator which enables the fName() to take in as many number of arguments as possible and stores them in an array.
 * 
 */

function cartPriceAdder(...params) {
    return params;
}
// console.log(cartPriceAdder(1,2,3,4));    // [ 1, 2, 3, 4 ]
// console.log(cartPriceAdder(10,20,30));   // [ 10, 20, 30 ]

function cartPriceAdder2(val1, val2, ...params) {
    return params;
}
// console.log(cartPriceAdder2(1,2,3,4));      // [ 3, 4 ]
// console.log(cartPriceAdder2(10,20,30));     // [ 30 ]

// Here the 1st 2 values are taken up by the val1 and val2 and the rest are sent to the params