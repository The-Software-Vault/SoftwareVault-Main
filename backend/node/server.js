require('dotenv').config()
const cors = require('cors');
const mysql = require('mysql');
const express = require('express');
const mysqlConnect = require('./connection');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

var path = require('path');

// Set up some configs for express.
const config = {
  name: 'SWVault API',
  port: 8000,
  host: '0.0.0.0',
};

var app = express();

// Create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false, label: config.name });

// Specify middleware to use
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

const user = require('./routes/user')
const doctor = require('./routes/doctors')
const message = require('./routes/message')
const appointment = require('./routes/appointments')

user(app, logger);
message(app, logger);

app.get('/', (req, res) => {
  res.status(200).send(`SWVault API - ${config.host}:${config.port}.`);
});

// connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e)
    throw new Error('Internal Server Error');
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});
