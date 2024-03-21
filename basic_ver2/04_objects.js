// const User = new Object();      // Singleton Object
const User = {};        // Not singleton
User.id = 101;  
User.name = "Brahma";
User.IsLoggedIn = false;
// console.log(User);

const regularUser = {
    email : "abc@def.com",
    name: {
        userFullName : {
            fName : "Brahma",
            lName : "Sahoo"
        }
    }
}
// console.log(regularUser.name.userFullName.fName);


const obj1 = {1 : 'a', 2 : 'b'};
const obj2 = {3 : 'a', 4 : 'b'};


// const obj3 = {obj1, obj2}; //{{ '1': 'a', '2': 'b'}, {'3': 'a', '4': 'b'}}
// const obj3 = Object.assign({}, obj1, obj2); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = {...obj1, ...obj2};  // Spread operator (just like array)
console.log(obj3);

/**
 * Object.assign({}, obj1, obj2) here {} is the destination and obj1 & obj2 are the operands
 */

const users = [
    {
        id : 1,
        email : "a"
    },
    {
        id : 2,
        email : "b"
    },
    {
        id : 3,
        email : "c"
    }
]

console.log(users[1].email);

console.log(Object.keys(User));  // [ 'id', 'name', 'IsLoggedIn' ]
console.log(Object.values(User));  // [ 101, 'Brahma', false ]
console.log(Object.entries(User));  // [ [ 'id', 101 ], [ 'name', 'Brahma' ], [ 'IsLoggedIn', false ] ]
/**
 * Object.keys and Object.values return an array 
 */

console.log(User.hasOwnProperty("hello")); 
console.log(User.hasOwnProperty("name")); 


/**
 * ###################### OBJECT DESTRUCTURING ########################################
 */

const course = {
    cName : "C1",
    cInstructor : "ABC"
}
console.log(course.cInstructor);  // Normal Way (AAM ZINDAGI)

const {cInstructor} = course  // Object Destructuring (MENTOS ZINDAGI)
console.log(cInstructor);

const {cInstructor : Inst} = course  // Object Destructuring (Renaming Big VarNames) 
console.log(Inst);

/**
 * Object Destructing is used to avoid useless syntax like this: course.cInstructor and write cleaner code
 */






