const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const auth_router = require('../auth/auth_router');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', auth_router);

server.get('/', (req, res) => {
  res.send("hi from server")
})

module.exports = server;

