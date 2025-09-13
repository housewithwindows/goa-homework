

const Movies = [
    { id: 1, title: "First Movie", },
    { id: 2, title: "Second Movie", },
    { id: 3, title: "Third Movie",  },
    { id: 4, title: "Fourth Movie",  },
    { id: 5, title: "Fifth Movie",  }
];

const getMovies = (req, res) => {
    res.json(Movies);
}

const getMovie = (req, res) => {
    const MovieId= parseInt(req.params.id);
    const Movie = Movies.find(m => m.id === MovieId);

    if (!Movie) {
        return res.status(404).json({ status: 'fail', message: 'Movie not found!' });
    }

    res.json(Movie)
}

const createMovie = (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ status: 'fail', message: 'Title is required!' });
    }

    const newMovie = {
        id: Movies.length > 0 ? Movies[Movies.length - 1].id + 1 : 1,
        title,
    };

    Movies.push(newMovie);
    res.status(201).json(newMovie);
}

const deleteMovie = (req, res) => {
    const MovieId = parseInt(req.params.id);
    const index = Movies.findIndex(m => m.id === MovieId);

    if (index === -1) {
        return res.status(404).json({ status: 'fail', message: 'Movie not found!' });
    }

    MovieId.splice(index, 1);
    res.status(204).send();
}
const updateMovie = (req, res) => {
    const MovieId = Number(req.params.id);
    const { title } = req.body;
    const existingMovie = Movies.find(m => m.id === MovieId);

    if (!existingMovie) {
        return res.status(404).json({ status: 'fail', message: 'Movie not found!' });
    }

    if (title !== undefined) existingMovie.title = title;
    

    res.json(existingMovie);
}

module.exports = {getMovies, getMovie, createMovie, deleteMovie, updateMovie};