const path = require('path');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
//const handlebars = require('express-handlebars');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// HTTP loggers
app.use(morgan('combined'));

//Template engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
console.log(path.join(__dirname + '/views'));

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.render('sample.ejs');
});
//localhost - 127.0.0.1

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
