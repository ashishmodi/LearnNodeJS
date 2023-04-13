export class Person {
    constructor(name) {
        this.name = "";
        this.name = name;
        console.log(this.name + " Person ctor");
    }
    greet1() { console.log(`Hello from Person ${this.name}`); } // prototype method
    static staticMethod() { console.log("Static method"); }
}
class Employee extends Person {
    constructor(name) {
        super(name);
        console.log(`${name} from Employee ctor`);
    }
    greet1() {
        console.log(`Hello from Employee ${this.name}`);
        super.greet1(); // Base class overriden method
    }
}
export let p2 = new Person("Ashish"); // constructor init
console.log(typeof Person); // function
Person.staticMethod();
p2.greet1();
console.log(p2.greet1 === Person.prototype.greet1); // true
let e = new Employee("Modi");
e.greet1(); // inheritance
let obj = { sName: "Ashish" };
export let testModule = "Module_Ashish";
let b = 20;
export { b, e, obj }; // use this syntax to export multiple variables
//# sourceMappingURL=Classes.js.map