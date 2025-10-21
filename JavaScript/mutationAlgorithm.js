import utilityModule from './modules/utils.js';
const { print } = utilityModule;

/**
 * Problem statement:
 * mutation should return true if the string in the first element of 
 * the array contains all of the letters of the string in the second 
 * element of the array, and false otherwise.
 */

function mutation(strArr) {
	let a = strArr[0].toLowerCase();
	let b = strArr[1].toLowerCase();

	for (let i = 0; i < b.length; i++) {
		if (a.indexOf(b[i]) < 0) {
			return false;
		}
	}
	return true;
}

print(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));