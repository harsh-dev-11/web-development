/**
 * 
 *In this lab, you will create a function that takes an initial array as its
  first argument, followed by one or more additional arguments representing 
  the values to remove.
 */

function destroyer(...args) {
  let array = args[0];
  let unwantedElements = args;
  unwantedElements.shift();
  function removeValues(num) {
    if (unwantedElements.indexOf(num) == -1) {
      return true;
    }
    return false;
  }

  return array.filter(removeValues);
}
