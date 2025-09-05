function confirmEnding(string1, string2) {
    let $logicVar = string1.length - string2.length;

    // slicing the ending part
    let endString = string1.slice($logicVar, string1.length);
    if (string2 == endString) {
        return true;
    }
    else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n"));