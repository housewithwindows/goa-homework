const express = require('express');
const app = express();

const tours = [
    { id: 1, name: 'foest' },
    { id: 2, name: 'winter' },
    { id: 3, name: 'summer hike' },
    { id: 4, name: 'adventure' },
    { id: 5, name: 'exploration' }
];

app.get('/tours', (req, res) => {
    res.json(tours);
});

app.get('/tours/:id', (req, res) => {
    const tourId = parseInt(req.params.id); 
    const tour = tours.find(t => t.id === tourId);
    
    if (tour) {
        return res.json(tour);
    } else {
        return res.status(404).send('ID does not match any tours');
    }
});
app.delete('/tours/:id', (req,res) => {
    const tourId = parseInt(req.params.id); 
    const filteredTours = tours.filter(t => t.id !== tourId)
    return res.send(filteredTours)
})



app.listen(3000, () => {
    console.log('Server is running at port 3000');
});