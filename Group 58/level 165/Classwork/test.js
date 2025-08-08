const http = require('http')
const fs = require('fs')
const url = require('url')

const cars = fs.readFileSync('cars.json','utf-8')

const server = http.createServer((req,res) => {
    const urlParts = new URL(req.url,`http://localhost3000/`)
    const id = parseInt(urlParts.searchParams.get('id'))
    const car = cars.find(el => el.id === id)

    if(!id){
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(cars)
    }
    else if (!car){
        res.writeHead(404)
        return res.end('Car not Found')
    }
    else{
        res.writeHead(200,{ 'content-type': 'application/json' })
        res.end(cars)
    }
})

server.listen(3000,() => {
    console.log("server running at port 3000")
})