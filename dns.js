const dns = require('dns');
//const { hostname } = require('os');
dns.lookup('www.javatpoint.com', (err, address, family) => {
    console.log('address:', address);   // 104.21.23.133
    console.log('family:', family);     // 4
});

dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
    console.log(hostname, service);     // localhost ssh
});

dns.resolve4('www.javatpoint.com', (err, addresses) => {
    if (err)    throw err;
    console.log(`address: ${JSON.stringify(addresses)}`);
    addresses.forEach((a) => {
        dns.reverse(a, (err, hostnames) => {
            if (err) { throw err; }     // getHostByAddr ENOTFOUND 172.67.211.76
            console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
        });
    });
});