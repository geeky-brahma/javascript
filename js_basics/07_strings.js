const name = "Brahma"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello this is ${name}. My repoCount is ${repoCount}`);

/**
 * This is called String Interpolation which removes the use of using comma or plus symbols to concatinate strings.
 */


const gameName = new String("brahmass")

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); 
// If 'character' present then returns the index else returns -1

const newStr = gameName.substring(0,4)
console.log(newStr);
const anotherStr = gameName.slice(-7,4)
console.log(anotherStr);

/**
 * str.substring() method takes only positive start and end index. 
 * str.slice() method can take both +ve and -ve values as indexes just like python the -ve ones start from the end of the string
 */


const strNewOne = "    brahma     "
console.log(strNewOne);
console.log(strNewOne.trim());

/**
 * str.trim(): removes all white spaces in the string
 * str.trimStart(): removes all white spaces from the beginning of the string
 * str.trimEnd(): removes all white spaces from the end of the string
 */


const url = "https://google.com/hello??world"
console.log(url.replace('??','-'));

/**
 * str.replace('to-be-replaced', 'new-word'): replaces the to-be-splitted with the new-word
 */


const strNewTwo = "I am Brahma"
const arrStr = strNewTwo.split(' ')
console.log(arrStr);

/**
 * str.split('spliter'): splits the string based on the spliter and creates an array out of the splited components
 */