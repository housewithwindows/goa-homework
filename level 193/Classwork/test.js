const http  = require('http')  //დავაიმპორტე http

const server = http.createServer((req,res) => {   // დავჰოსტე სერვერი
    res.end("<h1>Hi</h1> <button>click</button> <p>hello</p>")
})

server.listen(3000,() => {
    console.log('Server is running...')
})