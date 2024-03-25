const myObj = {
    username : "Brahma",
    price : 1000,

    welcomeMessage : function () {
        console.log(`${this.username}, Welcome to the class`);
        console.log(this);  
        /** {
                username: 'newUser',
                price: 1000,
                welcomeMessage: [Function: welcomeMessage]
            }*/
    }

}

// myObj.welcomeMessage();
// myObj.username = "newUser"
// myObj.welcomeMessage();  

// console.log(this);  // {}

/**
 * this keyword: it is used to refer to the current context
 * 
 * It has certain implications:
 * 1. When we are in a local scope if use console.log(this), then we get the description of the scope as shown above.
 * 2. When we are in the global scope if use console.log(this), then it depends where its executed:
 * 2.a. if the global scope is local code terminal then it returns '{}'
 * 2.b. if the global scope is broswer terminal then it returns 'Window'.
 */


function name(params) {
    let username = "brahma";
    console.log(this.username);  // undefined 
}
// name();
/**
 * The above code explains that 'this' keyword can only be used in the objects. If its used in the functions then it returns 'undefined'
 */


// +++++++++++++++++++++++++++ Arrow Functions +++++++++++++++++++++++++++++++++

const arrFun = (num1, num2) => {
    return num1+num2;
}
// console.log(arrFun(1, 2));



// Implicit return type arrow functions

const arrFun2 = (num1, num2) => num1+num2;  // here it is assumed that num1+num2 is to be returned
// console.log(arrFun2(1, 2));

const arrFun3 = (num1, num2) => (num1+num2); // same as the previous one expect that it helps in better readability

// Returning Objects in Arrow Functions
const arrFun4 = () => ({username:"brahma"});  
console.log(arrFun4());  // { username: 'brahma' }

