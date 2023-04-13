function Person(fName, lName) { this.firstName = fName; this.lastName = lName; }
const p1 = new Person('Ashish', 'Modi');
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
}
console.log(p1.getFullName());

function SuperHero(fName, lName) {
    Person.call(this, fName, lName);
    this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function() {
    console.log('Fighting crime')
}
// to access getFullName
SuperHero.prototype = Object.create(Person.prototype)
const batman = new SuperHero('Ashish', 'Modi');
console.log(batman.getFullName());