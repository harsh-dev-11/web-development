function convertHTML(str) {
  let strArr = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === "&") {
      strArr.splice(i, 1, "&amp;");
    } else if (strArr[i] === "<") {
      strArr.splice(i, 1, "&lt;");
    } else if (strArr[i] === ">") {
      strArr.splice(i, 1, "&gt;");
    } else if (strArr[i] === '"') {
      strArr.splice(i, 1, "&quot;");
    }
    if (strArr[i] === "'") {
      strArr.splice(i, 1, "&apos;");
    }
  }
  return strArr.join("");
}

console.log(convertHTML("Harsh & Mohit"));
