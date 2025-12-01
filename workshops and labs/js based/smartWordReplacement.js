function myReplace(str, word, new_word) {
  let regex = new RegExp(word, "g");
  // if the first character is uppercase
  if (word[0] === word[0].toUpperCase()) {
    new_word = new_word[0].toUpperCase() + new_word.slice(1);
  } else if (word[0] === word[0].toLowerCase()) {
    new_word = new_word[0].toLowerCase() + new_word.slice(1);
  }
  return str.replace(regex, new_word);
}
