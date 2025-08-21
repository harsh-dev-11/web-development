/*
    -- String manipulation in JavaScript --
    in JS, we can manipulate strings using various methods.
    1. String concatenation

*/

// string concatenation
let firstName = "John";
let lastName = "Doe";

// Using the + operator
let fullName = firstName + " " + lastName; // spacing is important here
console.log("Using + operator"); 
console.log(fullName); // Output: John Doe

// using concat() method
let fullNameConcat = firstName.concat(" ", lastName);
console.log("Using concat() method"); 
console.log(fullNameConcat); // Output: John Doe