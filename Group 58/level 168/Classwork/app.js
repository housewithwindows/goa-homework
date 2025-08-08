const express = require('express');
const app = express();

const cars = [
    { id: 1, name: 'bmw' },
    { id: 2, name: 'mercedes' },
    { id: 3, name: 'toyota' },
    { id: 4, name: 'honda' },
    { id: 5, name: 'renault' }
];

app.get('/cars', (req, res) => {
    res.json(cars);
});

app.get('/cars/:id', (req, res) => {
    const carId = parseInt(req.params.id); 
    const car = cars.find(c => c.id === carId);
    
    if (car) {
        return res.json(car);
    } else {
        return res.status(404).send('ID does not match any cars');
    }
});
app.delete('/cars/:id', (req,res) => {
    const carId = parseInt(req.params.id); 
    const filteredCars = cars.filter(c => c.id !== carId)
    return res.send(filteredCars)
})



app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
