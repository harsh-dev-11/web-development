function mutation(arr) {
	let result = true;
	let firstStr = arr[0].toLowerCase();
	let secondStr = arr[1].toLowerCase();
	let firstStrLen = firstStr.length;
	let secondStrLen = secondStr.length;
	// implementing the frequency array
	const freqArr = new Array(26).fill(0);
	for (let i = 0; i < firstStr.length; i++) {
		if (freqArr[firstStr.charCodeAt(i) - 'a'.charCodeAt(0)] == 1) {
			continue;
		}
		freqArr[firstStr.charCodeAt(i) - 'a'.charCodeAt(0)]++; // incrementing the frequency
	}
	for (let i = 0; i < secondStr.length; i++) {
		freqArr[secondStr.charCodeAt(i) - 'a'.charCodeAt(0)]--; // decrementing the frequency
	}

	for (let i = 0; i < 26; i++) {
		if (freqArr[i] > 0) {
			return false;
		}
	}
	return result;
}
let strArray = ["zyxwvutsrqponmlkjihgfedcba", "qrstu"];
print(mutation(strArray));

function print(value) {
	console.log(value);
}