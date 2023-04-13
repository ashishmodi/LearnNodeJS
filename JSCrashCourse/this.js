const person = {
    name: 'Ashish',
    sayMyName: function() {
        console.log(`My name is ${this.name}`)
    },
}
person.sayMyName()  // implicit binding