let originalArray = [1, 2, 3];
// let copyArray = [].concat(originalArray);
let copyArray = originalArray;

originalArray.push(4);

console.log(copyArray);
console.log(originalArray);