console.log(process.argv)
console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]))
console.log(process.memoryUsage())

// 1MB = 1,000,000B
// 29241344 + 5763072 + 4437088 + 1490134 + 10515 = 40942153
// 40942153B =  40.94MB

