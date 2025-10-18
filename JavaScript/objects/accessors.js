let obj = {
    fName: 'Sourav',
    lName: 'Sharma',
    get fullName() {
        return `${this.fName} ${this.lName}`;
    },
    set fullName(name) {
        [this.fName, this.lName] = name.split(' ');
    }
};

console.log(obj.fullName);
obj.fullName = 'Ravi Kumar';
console.log(obj.fName);
console.log(obj.lName);