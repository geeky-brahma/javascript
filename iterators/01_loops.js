// for of

const number = [1,2,3,4,5]
for (const num of number) {
    // console.log(num);
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set("1","a")
map.set("2","b")
map.set("3","c")
// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const [key, value] of myObject) {
    // console.log(`${key} :- ${value}`);      // Error: This doesnt work on Objects
// }

// For Objects we use : for in
for (const key in myObject) {
    // console.log(`${key} is for ${myObject[key]}`);
}


// In arrays:
const arr = [1,2,3,4,5]
for (const key in arr) {
    // console.log(`${key} : ${arr[key]}`);
}

// But we cant use for...in loop in maps as they are not iterable

// ++++++++++++++++++++ forEach ++++++++++++++++++++++
/**
 * array.forEach(<callback-function>)
 * forEach() takes a callback function as input and does some operation but does not return any value. Which seems the biggest drawback.
 * The drawback wud be resolved by array.filter()
 */
const coding = ["js", "python", "cpp"];
coding.forEach( function (item) {
    // console.log(item);   // js, python, cpp 
} )

coding.forEach( (item) => {
    // console.log(item);   // // js, python, cpp 
} )

function printMe(item) {
    console.log(item);   
}
// coding.forEach(printMe);    // js, python, cpp 

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
} )


// For each is useful in arrays containing objects as its elements: 
const myCoding =[
    {
        language : "Javascript",
        fileName : "js"
    },
    {
        language : "Java",
        fileName : "java"
    },
    {
        language : "Python",
        fileName : "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.language);
} );