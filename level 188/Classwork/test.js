const events = require('events')


const myEmitter = new events.EventEmitter()

myEmitter.on('start', () => {
    console.log("hi")
})

setTimeout(() =>{
   myEmitter.emit("hello")
},50000)