// this code will return true if the value is exactly true or false
// otherwise it will return false

let num1 = true;
let num2 = 10;

function booleanChecker(value) {
    if (typeof (value) === 'boolean') {
        return true;
    }
    else {
        return false;
    }
}

console.log(booleanChecker(num1));
console.log(booleanChecker(num2));