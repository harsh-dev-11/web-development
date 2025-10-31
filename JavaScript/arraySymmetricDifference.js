function diffArray(arr1, arr2) {
  let result = [];
  let temp1 = arr1.filter((element) => arr2.indexOf(element) == -1);
  result.push(...temp1);

  let temp2 = arr2.filter((element) => arr1.indexOf(element) == -1);
  result.push(...temp2);
  return result;
}
