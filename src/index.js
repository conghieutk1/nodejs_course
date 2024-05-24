require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const configViewEngine = require('./config/viewEngine.js');
const WebRoutes = require('./routes/web.js');
const connection = require('./config/database.js');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// HTTP loggers
app.use(morgan('combined'));

// Config template engine
configViewEngine(app);

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Khai bao Routes
app.use('/', WebRoutes);

// connection.query('SELECT * FROM Users u', function (err, results, fields) {
//     console.log('>>>>>>>>> results =', results); // results contains rows returned by server
//     console.log('>>>>>>>>> fields =', fields); // fields contains extra meta data about results, if available
// });

app.listen(port, hostname, () => {
    console.log(`Node app listening on port ${port}`);
    console.log(`Local: http://localhost:${port}`);
});
