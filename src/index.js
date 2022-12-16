const path = require('path');
const express = require('express');
const morgan = require('morgan');
//const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

// HTTP loggers
app.use(morgan('combined'));

//Template engine

//app.engine('handlebars', handlebars.engine);
app.set('view', path.join(__dirname, 'resources/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // res.send("Hello World!");
  res.render('sample.ejs');
});
//localhost - 127.0.0.1

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
