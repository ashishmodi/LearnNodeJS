// http://192.0.2.10:3000
console.log("test node js");
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello NodeJS!')
});
app.listen(port, () => {
    console.log("Example Listening at http://localhost:", port);
});