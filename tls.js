//const { connected } = require('process');
var tls = require('tls');

function connected(stream) {
    if (stream)
        stream.write("GET / HTTP/1.0\n\rHost: encrypted.google.com:443\n\r\n\r");
    else
        console.log("TLS Connection failed");
}

var dummy = this;   // needed to keep socket variable in scope
// connect to the server
dummy.socket = tls.connect(443, 'encrypted.google.com', function() {
    // callback called only after successful socket connection
    dummy.connected = true;
    if (dummy.socket.authorized) {
        dummy.socket.setEncoding('utf-8');
        connected(dummy.socket);
    }
    else {
        console.log(dummy.socket.authorizationError);
        connected(null);
    }
});
dummy.socket.addListener('data', function(data) {
    console.log(data);
});
dummy.socket.addListener('error', function(error) {
    if(!dummy.connected) {
        connected(null);     // socket was not connected, notify callback
    }
    console.log("FAIL with below error: ");
    console.log(error);
});
/* FAIL with below error: 
Error: self signed certificate
    at TLSSocket.onConnectSecure (_tls_wrap.js:1515:34)
    at TLSSocket.emit (events.js:400:28)
    at TLSSocket._finishInit (_tls_wrap.js:937:8)
    at TLSWrap.ssl.onhandshakedone (_tls_wrap.js:709:12) {
  code: 'DEPTH_ZERO_SELF_SIGNED_CERT' */