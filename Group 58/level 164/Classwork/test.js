const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const carArr = fs.readFileSync('cars.json','utf8')
    const pathName = req.url
    const method = req.method
    const cars = []
    const data = ''

    req.on('data', (chunk) => {
    data += chunk;
    });

   req.on('end', () => {
      cars.push((data))
      res.end('received');
   });

    if(pathName === "/cars" && method === "GET"){
        res.writeHead(200,{'Content-type': 'application/json'})
        res.end(carArr)
    }
    else if(pathName === "/cars" && method === "POST"){
        res.end("Added a new car")
    }

    
    
})

server.listen(3000,() => {
    console.log('Server running at port 3000...')
})