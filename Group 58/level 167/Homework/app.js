const express = require('express')

const app = express()

app.get('/cars', (req,res) => {
    res.json([
        {
            id:1,
            name:'volkswagen'
        },
        {
            id:2,
            name:'buggati'
        }
    ])
})
app.listen(3000,() => {
    console.log('port running')
    console.log(app)
})