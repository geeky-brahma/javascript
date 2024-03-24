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
console.log(map);

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
