function whatIsInAName(arr, obj) {
  function matchKey(element) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      if (
        !element.hasOwnProperty(keys[i]) ||
        element[keys[i]] != obj[keys[i]]
      ) {
        return false;
      }
    }
    return true;
  }
  return arr.filter((element) => matchKey(element));
}

let result = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
console.log(result);
