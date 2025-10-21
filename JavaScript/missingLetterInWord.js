import utilityModule from './modules/utils.js';
const { print } = utilityModule;

function fearNotLetter(str) {
    let strArr = str.split('');
    for (let i = 1; i < strArr.length; i++) {
        if (strArr[i].charCodeAt(0) != strArr[i - 1].charCodeAt(0) + 1) {
            return String.fromCharCode(strArr[[i - 1]].charCodeAt(0) + 1);
        }
    }
    return undefined;
}

print(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));