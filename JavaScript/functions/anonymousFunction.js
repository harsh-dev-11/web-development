// creating anonymous function and assigning it to a variable
const anonymousFunction = function () {
    return "Hi!, this is an anonymous function";
}

try {
    console.log(anonymousFunction());
}
catch (error) {
    console.log("An error occurred while trying to access the anonymous function:");
    console.log("-------- ERROR DETAILS --------");
    console.log("Name: " + error.name);
    console.log("Message: " + error.message);
}
