const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const messages = []
    const method = req.method
    const path = req.url


    
    
    if(path === '/messages' && method === 'POST'){
        req.on('data', (chunk) => {
             data += chunk;
        });

        req.on('end', () => {
          messages.push(data)
          res.end('Message has been received');
        });
    }
})