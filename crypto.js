const crypto = require('crypto');
// const secret = 'abcdefg';
// const hash = crypto.createHmac('sha256', secret)
//                     .update('Welcome to crypto')
//                     .digest('hex');
// console.log("Hash is: ", hash)

const key = crypto.randomBytes(32);
const iv  = crypto.randomBytes(16);

const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
var encrypted = cipher.update('Hello Node', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
var decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);