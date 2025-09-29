// copying nested arrays and objects

let arr1 = [1, 2, 3, [4, 5]];
let arr2 = arr1.slice(); // shallow copy using slice
arr2[3][0] = 99; // modifying nested array in arr2
arr2[0] = 100; // modifying primitive value in arr2
console.log(arr1); // arr1 is affected due to shallow copy
console.log(arr2); // arr2 reflects the change