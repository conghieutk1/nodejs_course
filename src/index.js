require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const configViewEngine = require('./config/viewEngine.js');
const WebRoutes = require('./routes/web.js');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// HTTP loggers
app.use(morgan('combined'));

// Config template engine
configViewEngine(app);

//Khai bao Routes
app.use('/', WebRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
