const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
})

const onFulfillment = (result) => {
    console.log(result);
}
const onRejection = (error) => {
    console.log(error);
}
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Got Tacos")   // Got Tacos
    }, 5000)
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Cook Pasta")   // found truck
    }, 5000)
});

promise.then(onFulfillment);
promise.catch(onRejection);