// implement server
const express = require('express');
const helmet = require('helmet');
const server = express();
// middleware
server.use(express.json());
server.use(helmet());
// route imports
const zoosRoutes = require('./api/zoos/zoosRoutes');

// routes
server.use('/api/zoos', zoosRoutes);

// fallbacks
server.use('/', (req, res) => {
    res.status(404).send('<h1>Sorry, could not find that castle.</h1>')
});


module.exports = server;
