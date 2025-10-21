import utilityModule from './modules/utils.js';
const { print } = utilityModule;

let contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(userName, prop) {
    for (let person of contacts) {
        if (person["firstName"] == userName && person.hasOwnProperty(prop)) {
            return person[prop];
        }
        else if (person["firstName"] == userName && !person.hasOwnProperty(prop)) {
            return "No such property";
        }
    }
    return "No such contact";
}
print(lookUpProfile("Akira", "address"));