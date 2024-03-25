// Scope

/**
 * let : Block scope
 * const : Block scope
 * var : Globe Scope
 */


if (true) {
    let a = 10;
    const b = 10;
    var c = 10;
}

// console.log(a);   // let was used to declare a so its scope ended in the if block
// console.log(b);   // const was used to declare b so its scope ended in the if block
// console.log(c);      // var was used to declare c so its scope didn't ended in the if block



// +++++++++++++++++++++++++++++++++++++ Hoisting in JS ++++++++++++++++++++++++++++++++++

console.log(addOne(5));  // No error: The functions in JS are hoisted on the top so they can be used before declaration (apparently)
function addOne(num){
    return num + 1;
}

// addTwo(3); // Error coz: Functions when declared as variables are not hoisted on the top only let and const name are hoisted on the top 
const addTwo = function(num){
    return num + 2;
}