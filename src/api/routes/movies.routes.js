const express = require('express');
const {getMovies, getMoviesId, getMoviesTitle, getGener, getYear2010} = require('../controllers/movies.controller');
const router = express.Router();

router.get("/", getMovies)

router.get("/id/:id", getMoviesId)

router.get("/title/:title", getMoviesTitle)

router.get("/gener/:genre",getGener)

router.get("/yearNext2010/:year",getYear2010)


module.exports = router;