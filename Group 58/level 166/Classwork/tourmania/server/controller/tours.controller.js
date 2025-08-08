const { readFile } = require('../utils/dataMethods.js');

const getTours = async (req, res) => {
    const tours =  readFile('tours.json', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(tours);
};

module.exports = {
    getTours
};
