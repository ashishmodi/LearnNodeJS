import {testModule, p2, Person, obj} from './Classes.js';
// import {fname as f, lname as l } from './moduleB.js'

let message : string = "Hello TypeScript!";
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
console.log(getValue(15));   // 50
console.log(typeof getValue);

// lexical this
var employee = {
    id: 5,
    greet: function() {
        let self = this;
        // setTimeout(function() { console.log(self.id) }, 2000);
        setTimeout(() => { console.log(this.id)}, 2000);
    }
};
employee.greet();

let percent = () => 0.1;
let getVal = function(val = 10, bonus = val * percent()) { console.log(val + bonus); }
getVal();		// o/p: 40

let colors = function() {
    for (let s in arguments) {
        console.log(arguments[s]);
    }
}
//colors('Red', 'Blue');

let displayColors = function(message, ...colors) {
    console.log(message);
    for (let i in colors)   console.log(colors[i]);
}
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
        isSeniorOldWay: function() { return age > 60; },
        isSenior() { return age > 60; } 
    }
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
for (let i in arrColors) { console.log(arrColors[i]); }
for (let color of arrColors) { console.log(color); }
let letters = "ABC";
for (let letter of letters)  { console.log(letter); }

console.log(testModule + " " + p2.greet1());    // p2.greet is undefined
let p3 = new Person("Mukesh");
console.log(testModule + " " + p3.greet1());
obj.sName = "Modi";
console.log(`Modified property value: ${obj.sName}`);

