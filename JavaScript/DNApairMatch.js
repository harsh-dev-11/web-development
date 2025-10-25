function pairElement(str) {
  let pairResult = [];
  for (let i = 0; i < str.length; i++) {
    let pairBase = [];
    if (str[i] === "A") {
      pairBase.push(str[i]);
      pairBase.push("T");
      pairResult.push(pairBase);
    } else if (str[i] === "T") {
      pairBase.push(str[i]);
      pairBase.push("A");
      pairResult.push(pairBase);
    } else if (str[i] === "C") {
      pairBase.push(str[i]);
      pairBase.push("G");
      pairResult.push(pairBase);
    } else if (str[i] === "G") {
      pairBase.push(str[i]);
      pairBase.push("C");
      pairResult.push(pairBase);
    }
  }
  return pairResult;
}

console.log(pairElement("ATCGA"));
