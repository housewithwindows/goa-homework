

let sports = []

process.stdin.on('data', (userInput) => {
    let sport = userInput.toString().trim()


    if (sport === 'exit') {
        console.log('Shutting down...')
        process.exit()
    }

    sports.push(sport)


    
    console.log(sports)

})