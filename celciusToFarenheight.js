function convertCtoF(tempInC) {
    return (tempInC * (9 / 5) + 32);
}

let tempInC = 32;
let tempInF = convertCtoF(tempInC);

console.log(tempInF);