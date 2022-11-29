// const {sum, sub, mult, div} = require("./math")

// console.log(mult(10,5)

import express from 'express';
const app = express();

const PORT = process.env.PORT || 1967;

app.get('/', (req, res) => res.send('Maths game!'));

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
  });