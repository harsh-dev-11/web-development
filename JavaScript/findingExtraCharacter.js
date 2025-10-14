let firstString = "abcd";
let secondString = "abcde";

function printStringsCharacters(s1, s2) {
    // Initializing frequency array and trace array
    let freq = new Array(256).fill(0);
    let traceArr = new Array();

    // fetching characters from string 1
    for (let i = 0; i < s1.length; i++) {
        freq[s1.charCodeAt(i)]++;
    }

    for (let i = 0; i < 256; i++) {
        if (freq[i] > 0) {
            traceArr.push(String.fromCharCode(i));
        }
    }
    console.log("ASCII coded characters founded in string 1: ");
    console.log(traceArr);

    // clearing the arrays
    traceArr = [];
    freq = new Array(256).fill(0);

    // fetching characters from string 2
    for (let i = 0; i < s2.length; i++) {
        freq[s2.charCodeAt(i)]++;
    }

    for (let i = 0; i < 256; i++) {
        if (freq[i] > 0) {
            traceArr.push(String.fromCharCode(i));
        }
    }
    console.log("Characters founded in string 2: ");
    console.log(traceArr);

    return;
}

function getExtraCharacter(s1, s2) {
    // let's create the frequency array
    let freq = new Array(256).fill(0);

    for (let i = 0; i < s1.length; i++) {
        freq[s1.charCodeAt(i)]++; // incrementing the frequency of character found in string 1
    }

    for (let i = 0; i < s2.length; i++) {
        freq[s2.charCodeAt(i)]--; // decrementing the frequency of character found in string 2
    }

    // returning the character whose frequency is 1
    for (let i = 0; i < 256; i++) {
        if (freq[i] === -1) {
            return String.fromCharCode(i);
        }
    }
}

console.log(getExtraCharacter(firstString, secondString));