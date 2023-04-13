function greet(name) { console.log(`Hello ${name}`); }
function greetAshish(greetFn) {
    const name = 'Ashish'
    greetFn(name)
}
greetAshish(greet)