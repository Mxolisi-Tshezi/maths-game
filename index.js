// const {sum, sub, mult, div} = require("./math")

// console.log(mult(10,5)

import express from 'express';
const app = express();
import exphbs from 'express-handlebars'
// import public from "./public/index.js";
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
const PORT = process.env.PORT || 1967;
// app.get('/', (req, res) => res.send('Maths game!'));
app.use(express.static("public"));
app.get('/', function (req, res) {
    res.render('index')
 })

app.listen(PORT, function () {
    console.log('App starting on port', PORT);
  });