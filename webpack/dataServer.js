const express = require('express');
const server = express();
const morgan = require('morgan');
const parser = require('body-parser');

const TEMP_DATA = require('../data');
const PORT = 3001;


// HTTP Request Logger middleware for node.js

server.use(morgan('tiny'));
server.use(parser.json());
server.use(parser.urlencoded({extended: true }));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');

    next();
});

server.get('/', (req, res) => {
  res.send('SafetyCulture Data Server!!!!');
});

server.get('/temperatures', (req, res) => {
  return res.send({
    status: 'ok',
    temperatureData: TEMP_DATA,
  });
});

server.listen(PORT, 'localhost', err => {
  if(err) {
    console.info(err);
  }

  console.info(`Listening for request at: http://localhost:${PORT}`);
})
