// Immediately Invoked Function Expressions (IIFE)
/**
 * An Immediately Invoked Function Expression (IIFE) is a function that is executed immediately after it is defined. It is a combination of a function expression, a closure, and immediate execution. 
 * IIFEs are used to create a scope for variables, preventing them from polluting the global scope.
 */

// (function_declaration)()


// Named IIFE
( function name() {
    console.log("IIFE1");
} )();

( () => {
    console.log("IIFE2");
} )();


// Parameter Passing
( (name) => {
    console.log(`IIFE2 ${name}`);
} )("Brahma");