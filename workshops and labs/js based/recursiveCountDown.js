function countdown(n) {
  if (n < 1) {
    return []; // Base case
  } else {
    const countArray = countdown(n - 1); // Recursive call
    countArray.unshift(n); // Add current n to the start
    return countArray;
  }
}
