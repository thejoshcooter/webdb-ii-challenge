const express = require('express');
const helmet = require('helmet');
// import server
const server = require('./server');

// port setup ready for heroku
const port = process.env.PORT  || 5000;

// listen
server.listen(port, function() {
  console.log(`** SERVER MAGIC CASTING ON PORT ${port} **`);
});
