// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Null Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10;  // 5
val1 = null ?? 10;  // 10
val1 = undefined ?? 10;  // 10
val1 = null ?? 5 ?? 10;  // 5


console.log(val1);



// Terniary Operator
// condition ? true : false

const check = 0;
check ? console.log("True") : console.log("False");;