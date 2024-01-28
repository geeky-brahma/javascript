const arr1 = ["Dora", "Gora", "Bora"]
const arr2 = ["Brahma", "Nanda", "Sahoo"]

// arr1.push(arr2)
// console.log(arr1);

/**
 * arr1.push(arr2): adds arr2 as an element in arr1
 */


const nArr = arr1.concat(arr2)
// console.log(nArr);

/**
 * arr1.concat(arr2): Combines two or more arrays. 
 * This method returns a new array without modifying any existing arrays.
 */


//Spread Operator (Imp.)

const newArr = [...arr1, ...arr2]
// console.log(newArr);

/**
 * The spread operator basically does the same thing ass the concat method except that its more beautiful
 */


const arr3 = [1,2, [3,4,6], [10, [11, 22, 33]]]
const nArr3 = arr3.flat(Infinity)
// console.log(nArr3);

/**
 * arr3.flat(depth): Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 * set the depth = Infinity for universal purpose
 */


// Question type methods

console.log(Array.isArray("Brahma")); // false coz its a string
console.log(Array.from("Brahma"));
console.log(Array.from({name : "Brahma"})); 
/**
 * console.log(Array.from({name : "Brahma"})); is a special case where we need to specify where the key or the value has to be made into an array element
 */


const ele1 = 100
const ele2 = 200
const ele3 = 300

const arr4 = Array.of(ele1, ele2, ele3)
console.log(arr4);

/**
 * Array.of(elements): A set of elements to include in the new array object. Returns a new array from a set of elements.
 */
