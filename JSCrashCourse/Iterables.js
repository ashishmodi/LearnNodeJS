const str = 'Ashish'
for (let i = 0; i < str.length; i++) {  console.log(str.charAt(i));     }
for (const char of str)              {  console.log(char);              }
const arr = ['A', 's', 'h', 'i', 's', 'h']
for (let i = 0; i < arr.length; i++) {  console.log(arr[i]);            }
for (const item of arr)              {  console.log(item);              }

const obj = {
    [Symbol.iterator]: function() {
        let step = 0;
        const iterator = {
            next: function() {
                ++step;
                if (step == 1) {
                    return { value: 'Hello', done: false }
                } else if (step == 2) {
                    return { value: 'World', done: false }
                }
                return { value: undefined, done: true }
            }
        }
        return iterator
    }
}
for (const word of obj)
    console.log(word);
