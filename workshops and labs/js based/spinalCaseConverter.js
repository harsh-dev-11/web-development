function spinalCase(str) {
  // adding a space between lowercase and uppercase letters
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  let regex = /\s+|_+/g;
  return str.replaceAll(regex, "-").toLowerCase();
}
