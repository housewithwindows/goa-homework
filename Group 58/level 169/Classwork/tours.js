const express = require('express');

const app = express();
const tours = [
    { id: 1, name: 'City Tour', price: 50 },
    { id: 2, name: 'Mountain Adventure', price: 120 },
    { id: 3, name: 'Beach Relaxation', price: 80 },
    { id: 4, name: 'Desert Safari', price: 150 },
    { id: 5, name: 'Forest Hike', price: 90 }
];

app.get('/tours', (req, res) => {
    const sort = req.query.sort;
    let sortedTours = [...tours];
    const limit = req.query * 1 || tours.length;
   



    

    if (sort === 'price') {
        sortedTours.sort((a, b) => a.price - b.price);
    } else if (sort === '-price') {
        sortedTours.sort((a, b) => b.price - a.price);
    }

    if (!isNaN(limit) && limit > 0) {
        sortedTours = sortedTours.slice(0, limit);
    }
    

    res.json(sortedTours);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
