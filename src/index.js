//Importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routeHandler = require('./route/routeHandler');

//Defining express app
const app = express();
app.use(helmet());
//body-parser to parse JSON bodies to JS objects
app.use(bodyParser.json());
//enabling cors for all requests.
app.use(cors());
//morgan to log http requests
app.use(morgan('combined'));

// routing
app.use('/', routeHandler);

//PORT
const port = process.env.PORT||3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.export = app;
