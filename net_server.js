const net = require('net');
var server = net.createServer((socket) => {
    socket.end('goodbye!\n');
}).on('error', (err) => {
    console.error(err.message);
    throw err;
});
// grab a random port
server.listen(() => {
    address = server.address(); // opened server on {"address":"::","family":"IPv6","port":45519}
    console.log('opened server on %j', address);
});