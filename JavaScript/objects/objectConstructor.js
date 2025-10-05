function toObject(value) {
    if (value === null || value === undefined) {
        return {};
    }

    if (typeof value === "object") {
        return value;
    }

    return Object(value);
}

console.log(toObject(null));

console.log(toObject(true));

console.log(toObject([1, 2, 3]));
