console.log('========== Binary to Decimal Conversion Program ==========');

let b = 10011;
let b_backup = b;
console.log(`Binary number is: ${b}`);
console.log(`Backup saved as: ${b_backup}`);

console.log('Estimating the length of binary number...');
let numLength = 0;
while (b > 0) {
    b = Math.floor(b / 10);
    numLength++;
}
console.log('Length estimated successfully!');
console.log(`Original binary number is: ${b}`);
console.log(`Backup binary number is: ${b_backup}`);

console.log('Calculating frequency of 1\'s in binary number...');
// frequency array to store frequency of 1's
let freq = new Array(6).fill(0);
for (let i = 0; i < numLength; i++) {
    let digit = b_backup % 10;
    if (digit == 1) {
        freq[i]++;
    }
    b_backup = Math.floor(b_backup / 10);
}
console.log('Frequency calculated successfully!');
console.log('Frequency array is: ');
console.log(freq);

console.log('Calculating decimal value from binary number...');
let decimalValue = 0;
for (let i = numLength - 1; i >= 0; i--) {
    if (freq[i] == 1) {
        let power = Math.pow(2, i);
        decimalValue += power;
    }
}

console.log('Decimal value calculated successfully!');
console.log(`Decimal value of binary number is: ${decimalValue}`);