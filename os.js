const os = require('os');
console.log("os.arch(): \n", os.arch());    // x64
console.log("os.cpus(): \n", os.cpus());
/* model: '12th Gen Intel(R) Core(TM) i7-1255U',
speed: 2973,
times: { user: 654380, nice: 1450, sys: 165160, idle: 9578760, irq: 0 } */
console.log("os.endianness(): \n", os.endianness());    // LE
console.log("os.freemem(): \n", os.freemem());  // 5834366976
console.log("os.homedir(): \n", os.homedir());  // /home/ashish
console.log("os.hostname(): \n", os.hostname());    // ashish-Inspiron-14-5420
console.log("os.loadavg(): \n", os.loadavg());  // [ 1.3, 1, 1.05 ]
//console.log("os.networkinterfaces(): \n", os.networkinterfaces()); error
console.log("os.platform(): \n", os.platform());    // linux
console.log("os.release(): \n", os.release());      // 5.19.0-35-generic
console.log("os.tmpdir(): \n", os.tmpdir());        // /tmp
console.log("os.totalmem(): \n", os.totalmem());    // 16448016384
console.log("os.type(): \n", os.type());            // Linux
console.log("os.uptime(): \n", os.uptime());        // 10529.14
//console.log("os.userinfo(): \n", os.userinfo());  // error