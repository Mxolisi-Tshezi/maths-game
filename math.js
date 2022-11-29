// const sum = (a,b) =>{
//   return a + b
// }

// const sub = (a,b) =>{
//   return a - b
// }

// const mult = (a,b) =>{
//   return a * b
// }

// const div = (a,b) =>{
//   return a/b
// }

// module.export = {sum, sub, mult, div}

import express from 'express';

const app = express();

const PORT = process.env.PORT || 1967;

app.get('/', (req, res) => res.send('Maths game!'));

app.listen(PORT, () => console.log(`App started : ${PORT}`))