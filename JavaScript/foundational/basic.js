// global scope
let var1 = "global variable";

// local scope
{
    let var2 = "loca variable";
}

console.log(var1); // works
console.log(var2); // ReferenceError: var2 is not defined
