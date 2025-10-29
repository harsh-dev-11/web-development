// first class function are those functions that can be assigned to variables (assignment, passed as argument, return value etc)

function wrapper(userName) {
  function greet() {
    console.log(`Hello ${userName}, welcome to JS`);
  }
  return greet;
}

const output = wrapper("Harsh Dhiman");

output();
