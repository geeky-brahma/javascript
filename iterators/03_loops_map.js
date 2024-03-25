// ++++++++++++++++++++++++++++++++ map ++++++++++++++++++++++++
// The main difference between the two methods is that map() applies a function to each element of the array and returns a new array with the results, while filter() returns a new array containing only the elements of the original array that pass a specified test.

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => num + 10 )
// console.log(newNums);

//++++++++++++++++++++++++++++ Chaining +++++++++++++++++++++++++++
// Using multiple map filter with the same line

const newNums = myNums
    .map( (num) => num * 10 )
    .map((num)=>num+1)
    .filter( (num) => num > 40 )
console.log(newNums);

