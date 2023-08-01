import { testModule, p2, Person, obj } from './Classes.js';
// import {fname as f, lname as l } from './moduleB.js'
let message = "Hello TypeScript!";
console.log(message);
var a = 1, b = 2;
if (a === 1) {
    var a = 10;
    let b = 20;
    console.log(a + " " + b);
}
console.log(a + " " + b);
for (let i = 1; i <= 3; ++i) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
const getValue = (m) => 20 * m;
console.log(getValue(15)); // 50
console.log(typeof getValue);
// lexical this
var employee = {
    id: 5,
    greet: function () {
        let self = this;
        // setTimeout(function() { console.log(self.id) }, 2000);
        setTimeout(() => { console.log(this.id); }, 2000);
    }
};
employee.greet();
let percent = () => 0.1;
let getVal = function (val = 10, bonus = val * percent()) { console.log(val + bonus); };
getVal(); // o/p: 40
let colors = function () {
    for (let s in arguments) {
        console.log(arguments[s]);
    }
};
//colors('Red', 'Blue');
let displayColors = function (message, ...colors) {
    console.log(message);
    for (let i in colors)
        console.log(colors[i]);
};
message = "list of colors";
//displayColors(message, 'Green', 'Blue');
// spread operator
let colorArr = ['Orange', 'Indigo'];
displayColors(message, ...colorArr);
// Object literals
let fname = "Ashish";
let sname = "Modi";
let person = { fname: fname, sname: sname };
function createPerson(name, age) {
    return {
        name,
        isSeniorOldWay: function () { return age > 60; },
        isSenior() { return age > 60; }
    };
}
let p = createPerson("Ashish", 62);
console.log(p.name + " " + p.isSenior());
let ln = "last name";
let person1 = { "first name": "Ashish", [ln]: "Modi" };
console.log(person1["first name"] + " " + person1["last name"]);
// Destructure array
let emp = ["Ashish", "Modi", "Male"];
let [fname1, lname, gender] = emp;
console.log(fname1 + " " + lname + " " + gender);
let emp2 = { fname2: "Ashish", lname2: "Modi", gender2: "Male" };
let { fname2, lname2, gender2: g } = emp2;
console.log(fname2 + " " + lname2 + " " + g);
let nobacktick = "Welcome " + fname1 + " to TS";
let backtick = `Welcome ${fname1} to TS`;
let backtick2 = `Welcome 'single' "double" ${fname1} to TS
    2nd line. Whitespace is significant`;
let arrColors = ['Red', 'Blue', 'Green'];
for (let i in arrColors) {
    console.log(arrColors[i]);
}
for (let color of arrColors) {
    console.log(color);
}
let letters = "ABC";
for (let letter of letters) {
    console.log(letter);
}
console.log(testModule + " " + p2.greet1()); // p2.greet is undefined
let p3 = new Person("Mukesh");
console.log(testModule + " " + p3.greet1());
obj.sName = "Modi";
console.log(`Modified property value: ${obj.sName}`);
// Maps and Set
let mySet1 = Object.create({ id: null });
if (mySet1.id)
    console.log(mySet1.id);
let myMap = Object.create(null);
myMap.name = "Ashish";
let val = myMap.name;
console.log(`Map key name, value ${val}`);
myMap[100] = "Hundred";
console.log(myMap["100"]); // key is always string
let ob1 = {};
let ob2 = {};
myMap[ob1] = "World"; // TS error: Type '{}' cannot be used as an index type
console.log(myMap[ob1]); // World
console.log(myMap[ob2]); // still o/p is World bcoz string representation of ob1 & ob2 is same
console.log(ob1.string); // [object Object] coming as undefined??
let mySet = new Set();
mySet.add("Hello");
mySet.add(2);
mySet.add(2); // ignore the duplicate value
mySet.add(ob1);
mySet.add(ob2); // size 4. Bcoz 2 objects are not converted to string, they are unique
console.log(`Set size = ${mySet.size}`);
let newSet = new Set([1, 2, 3, 4, 4, 4]); // size 4 only
let chainSet = new Set().add("Hi").add("Ashish"); // size 2 only
console.log(newSet.has(3)); // true
console.log(newSet.delete(1)); // true, size will be 3
// Weak sets
let setPblm = new Set();
let key = {};
setPblm.add(key); // size 1
key = null; // size is still 1
// Even though key was set to null, a ref to the key obj still exist in the set
key = [...setPblm][0];
console.log(key); // Object { }
console.log(setPblm.size); // 1
// for garbage collector, a reference in a set should disappear when all other refs disappear.
let weakSet = new WeakSet();
let key2 = {};
weakSet.add(key2);
console.log(weakSet.has(key2)); // true
key2 = null;
console.log(weakSet.has(key2)); // false
// Maps
let myMap2 = new Map();
myMap2.set("city", "Mumbai");
myMap2.set("state", "Maharashtra");
console.log(myMap2.get("city"));
let ob5 = {};
let ob6 = {};
myMap2.set(ob5, 10);
myMap2.set(ob6, 20);
console.log("Map has key state? " + myMap2.has("state"));
console.log(`Is city key deleted from Map? ${myMap2.delete("city")}`);
console.log(`Map size: ${myMap2.size}`); // 3
myMap2.clear(); // removes all eles. New size = 0;
let myMap3 = new Map([
    ["car", "XUV500"],
    ["type", "4 wheeler"]
]);
for (let key of myMap3.keys()) {
    console.log(key);
}
for (let value of myMap3.values()) {
    console.log(value);
}
for (let entry of myMap3.entries()) {
    console.log(`${entry[0]} -> ${entry[1]}`);
}
for (let [key, value] of myMap3.entries()) {
    console.log(`${key} -> ${value}`);
}
let nos = [2, 4, 6, 8];
nos.forEach(arrFun);
function arrFun(ele, index, array) {
    console.log(`Element = ${ele}, index = ${index}`); // 2 0  
    //console.log(`${array[index]} = ${ele}`);    
    console.log(`array[${index}] = ${ele}`); // array[0] = 2
}
//# sourceMappingURL=Basics.js.map