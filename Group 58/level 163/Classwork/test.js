const http = require("http")
const fs = require("fs")

const server = http.createServer((res,req) => {
    const html = fs.readFileSync('index.html',"utf-8")
    const register = fs.readFileSync('register.html','utf-8')
    if(req.url === '/' || req.url === '/home'){
        res.end(html)
    }
    else if(req.url === '/register'){
        res.end(register)
    }
    else{
        res.end("404 Not Found")
    }
})

server.listen(3000,() => {
    console.log("server is running")
})