console.log('Process properties: ');
console.log(`Architecture: ${process.arch}, PID ${process.pid}, Platform ${process.platform}`);
console.log(`Version: ${process.version}, Versions ${process.versions.modules}, Env ${process.env}`);
console.log(`Env: ${process.env}, Release ${process.release}`);

process.argv.forEach((value, index, array) => {
    console.log(`${index}: ${value}`);
});
console.log(`Curr dir: ${process.cwd()}, Uptime ${process.uptime()}, `);
console.log(`hrtime ${process.hrtime()}, memory usage ${process.memoryUsage().heapTotal}`);

