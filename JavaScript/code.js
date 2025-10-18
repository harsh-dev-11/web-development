const person = {
    name: 'John',
    age: '30'
};

person.city = 'New York';
person.job = 'Developer';

const readlineSync = require('readline-sync');
const userName = readlineSync.question('What you want to know about the person? ');

console.log(person[userName]);