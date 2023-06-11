const express = require('express');
const dotenv = require('dotenv');
const routerMovies = require('./src/api/routes/movies.routes');

dotenv.config();
const {connect}  = require('./src/utils/db');

const app = express();
const PORT = process.env.PORT || 5000;
connect();
app.use(express.json());

app.use("/movies", routerMovies);


app.listen(PORT, () => console.log('server listening on port', PORT));