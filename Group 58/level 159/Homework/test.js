const os = require('os')

const server = {
    type: os.type(),
    arch: os.arch(),
    homedirectory:os.homedir(),
    Interface: os.networkInterfaces(),
    hostname: os.hostname(),
    uptime: os.uptime()
}

console.log(server)