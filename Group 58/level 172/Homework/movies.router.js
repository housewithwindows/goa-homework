const express = require('express');
const { getMovies, getMovie, createMovie, deleteMovie, updateMovie } = require('./controllers/movie.controllers');
const router = express.Router();


router
    .route('/')
    .get(getMovies)
    .post(createMovie);
router
    .route('/:id')
    .get(getMovie)
    .delete(deleteMovie)
    .patch(updateMovie);




router.get('/', getMovies);


router.get('/:id',getMovie);


router.post('/', createMovie);


router.delete('/:id', deleteMovie);


router.patch('/:id', updateMovie);

module.exports = router;
