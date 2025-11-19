function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function calculate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Invalid operator";
    }
}

// Example usage
console.log("Add: 2 + 7 =", calculate('+', 2, 7));
console.log("Subtract: 10 - 4 =", calculate('-', 10, 4));
console.log("Multiply: 3 * 5 =", calculate('*', 3, 5));
console.log("Divide: 20 / 2 =", calculate('/', 20, 2));