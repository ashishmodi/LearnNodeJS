function* generatorFun() {
    yield 'Hello'
    yield 'World'
}
const generatorObj = generatorFun()
for (const word of generatorObj) { console.log(word); }