// Object Literals -> Not SINGLETON!!


const mySym = Symbol("var1")
const JsUser = {
    name : "Brahma",
    age : 18,
    [mySym] : "Hello",
    location : "BBSR",
    email : "sahoobns29@gmail.com",
    isLoggedIn : false,
    lastLogIn : ["Monday", "Saturday"] 
}
// console.log(JsUser.name)
// console.log(JsUser['email']);

// console.log(JsUser[mySym]);  
/*
Only way of access a Symbol() based key in a object JsUser.mySym is invalid
*/

JsUser.email = "hello@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser);
JsUser.email = "hello@yahoo.co.in";   // This will reflect in the JsUser still no ERROR is raised
// console.log(JsUser);

/**
 * So Object.freeze(obj_var) freezes the object such that we can't change the values assigned to any of the keys. ALthough attempting to do it like in the above example will not give any error
 */


JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/**
 * Object elements can have functions as their values.
 */