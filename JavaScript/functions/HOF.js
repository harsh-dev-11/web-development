function executeOperation(array, operation) {
  let tempArr = [];
  for (let number of array) {
    tempArr.push(operation(number));
  }
  return tempArr;
}
const numbers = [1, 2, 3, 4, 5];
function double(number) {
  return number * 2;
}
const result = executeOperation(numbers, double);

console.log(result);
