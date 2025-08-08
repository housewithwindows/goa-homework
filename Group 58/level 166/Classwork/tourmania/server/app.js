const http = require('http')
const { router } = require('./router/tours.router')


const server = http.createServer((req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return router(req,res)
})

server.listen(3000,() => {
    console.log("Server is running on port 3000")
})