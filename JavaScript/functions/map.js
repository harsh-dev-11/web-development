// 1. map() method is a powerful function in JS which usally performs on arrays.
// 2. This method returns a new array after applying a certain operation on each
// element to the calling array.
// 3. This method does not mutate the original array, it just returns a new array.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((number) => number * 2));
