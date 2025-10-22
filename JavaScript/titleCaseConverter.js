/**
 * 
 *You should have a titleCase function that takes a string as an argument.
The titleCase function should return a string with the first letter of each word capitalized and the rest of the word in lower case.
titleCase("I like to code") should return "I Like To Code".
titleCase("javaScript is fun") should return "Javascript Is Fun".
 */

function titleCase(str) {
  let wordArr = str.split(" ");
  for (let i = 0; i < wordArr.length; i++) {
    let correctCase = new Array();
    for (let j = 0; j < wordArr[i].length; j++) {
      if (j == 0) {
        let letter = wordArr[i][j].toUpperCase();
        correctCase.push(letter);
      } else {
        let letter = wordArr[i][j].toLowerCase();
        correctCase.push(letter);
      }
    }
    wordArr[i] = correctCase.join("");
  }
  return wordArr.join(" ");
}
