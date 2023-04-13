async function greet() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello"), 3000)
    });
    let result = await promise;
    console.log(result);
}
//greet()

function resolveHello() {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve('Hello')
        }, 2000)
    });
}

function resolveWorld() {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve('World')
        }, 1000)
    });
}

async function sequentialExecution() {
    const hello = await resolveHello();
    console.log(hello);     // logs after 2 seconds
    const world = await resolveWorld();
    console.log(world);     // logs after 1 second
}
//sequentialExecution()

async function concurrentExecution() {
    const hello = resolveHello();
    const world = resolveWorld();
    console.log(await hello);   // logs after 2 seconds
    console.log(await world);   // logs after 2 seconds
}
//concurrentExecution()

function parallelExecution() {
    Promise.all([
        (async () => console.log(await resolveHello()))(),  // logs after 2 seconds
        (async () => console.log(await resolveWorld()))()   // logs after 1 second
    ])
}
//parallelExecution()

async function parallelConcurrentExec() {
    await Promise.all([
        (async () => console.log(await resolveHello()))(),  // logs after 2 seconds
        (async () => console.log(await resolveWorld()))()   // logs after 1 second
    ])
    console.log('Finally');
}
parallelConcurrentExec()