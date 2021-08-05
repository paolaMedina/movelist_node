const { response, request } = require('express');
const axios = require('axios');
const Movie = require('../models/movie');



const moviesLoad = async(req = request, res = response) => {

    const word = 'love';
    const year = '2020';
    try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.APIKEY_OMDB}&s=${word}&y=${year}`);
        const movies = response.data.Search;
        movies.forEach(async element => {
            const existElement = await Movie.findOne({
                where: {
                    imdbid: element.imdbID
                }
            });
            const { Title, Year, imdbID, Type, Poster } = element
            const body = {
                title: Title,
                year: Year,
                imdbid: imdbID,
                type: Type,
                poster: Poster
            }
            if (existElement == null) {
                let movie = new Movie(body);
                movie.save();
            }
        });
        res.status(201).json({
            msg: 'load actualizada'
        });


    } catch (error) {
        res.status(500).json({
            msg: 'error consumiento API OMDB'
        });

        console.log(error);
    }
};

const moviesShow = async(req = request, res = response) => {

    try {
        const movies = await Movie.findAll();
        if (movies) {
            res.json(movies);
        } else {
            res.status(404).json({
                msg: 'No hay datos'
            })
        }

    } catch (error) {
        res.status(500).json({
            msg: 'error al mostrar peliculas'
        });

        console.log(error);
    }
};

module.exports = {
    moviesLoad,
    moviesShow
}