const fs = require('fs')

process.stdin.on('data', (data) =>{
    const input = data.toString().trim();

    console.log(input)

    if(input==='exit'){
        console.log('file saved')
        process.exit()
        
    }

    fs.appendFile('./text.txt', input , 'utf-8', (err) => {
        if(err){
            console.log("Error in the system")
        }
        else{
            console.log('Written successfully')
        }
    })

    
})
