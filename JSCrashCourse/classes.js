class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    sayMyName() { return this.firstName + ' ' + this.lastName; }
}
const p1 = new Person('Ashish', 'Modi');
console.log(p1.sayMyName());

class SuperHero extends Person {
    constructor(fName, lName) { super(fName, lName); }
}
const batman = new SuperHero('bat', 'man');
console.log(batman.sayMyName());