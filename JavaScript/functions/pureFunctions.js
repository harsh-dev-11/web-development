/**
 * Calculates and returns double the value of the input number.
 * * This function adheres to the principles of a **pure function**:
 * 1. Takes input as an argument (`num`).
 * 2. Returns a value (`num * 2`).
 * 3. Does not use or modify outside variables (like `x`).
 * 4. Does not mutate the original argument (numbers are immutable in JS, but it holds true for objects too).
 */

let x = 4;
function getDoubleValue(num) {
  return num * 2;
}
console.log(getDoubleValue(x));
