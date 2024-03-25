const myArr = [1,2,3,4,5]
// console.log(myArr[0]);

/**
 * In arrays shallow copies are made i.e., when arr2 = arr1 then if some changes are made in the arr2 then changes appear in the arr1 also.
 */

const myName = ["Brahma", "Dora", "Bora"]
const arr = new Array(1,2,3,4)
// console.log(arr);
const myArr2 =[1,2,3,4,5,6]
myArr2.push(10)   // Adds element to the end of the array
// console.log(myArr2);
myArr2.pop()  // Removes element from the end of the array
// console.log(myArr2);
myArr2.unshift(9)  // Adds elememt to the start of the array
// console.log(myArr2)  
myArr2.shift()  // Removes elements from starting
// console.log(myArr2)

const newArr = myArr2.join()  // Converts the array into a string
// console.log(newArr);



// slice and splice 

console.log("A ", myArr)

const n1 = myArr.slice(1,3)
console.log(n1);
console.log("B ", myArr)

const n2 = myArr.splice(1,3)
console.log(n2);
console.log("C ", myArr)

/**
 * 2 key differces between slice and splice 
 * slice excludes the end index while splice takes into consideration both the starting and ending index
 * slice doesnt modify the original array while splice removes those elements from the original array
 */
