//let buf = new Buffer(256);      // Deprecated
let buf2 = Buffer.alloc(100);
let len = buf2.write("Ashish Modi");
console.log("Octets written: " + len);

let buf3 = Buffer.alloc(26);
for (let i = 0 ; i < 26 ; i++) {    buf3[i] = i + 97;   }
console.log( buf3.toString('ascii'));       // abcdefghijklmnopqrstuvwxyz
console.log( buf3.toString('ascii',0,5));   // abcde
console.log( buf3.toString('utf8',0,5));    // abcde
console.log( buf3.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde