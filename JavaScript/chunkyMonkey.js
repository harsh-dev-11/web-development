function chunkArrayInGroups(arr, num) {
    let resultArr = [];
    while (arr.length) resultArr.push(arr.splice(0, num));
    return resultArr;
}