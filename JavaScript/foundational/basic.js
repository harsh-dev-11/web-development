// creating empty variable

let var1;
console.log("---- First output ----");
console.log(`value: ${var1}`);
console.log("data-type: " + typeof (var1));

// intitializing and printing 
console.log("---- Second output ----");
var1 = 10; // intitialized the variable
console.log(`value: ${var1}`);
console.log("data-type: " + typeof (var1));

// creating a constant variable
console.log("---- Third output ----");
const var2 = 20;
console.log(`value: ${var2}`);
console.log("data-type: " + typeof (var2));

// creating a null variable
let var3 = null;
console.log("---- Fourth output ----");
console.log(`value: ${var3}`);
console.log("data-type: " + typeof (var3));

var3 = 20;
console.log("---- Fifth output ----");
console.log(`value: ${var3}`);
console.log("data-type: " + typeof (var3));

// creating a big-int variable
let var4 = 2342n;
console.log("---- Sixth output ----");
console.log(`value: ${var4}`);
console.log("data-type: " + typeof (var4));