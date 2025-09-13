const express = require('express')
const morgan = require('morgan')
require('dotenv').config();//dotenv gamoiyeneba imashi rom expressma waikitxos .env


const app = express()


//gitignore gamoiyeneba imisatvis rom mivutitot mas ra atvirtos da ra ara



if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.listen(process.env.PORT,() => {
    console.log('hi')
})