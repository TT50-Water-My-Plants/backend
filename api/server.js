const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const plantsRouter = require('../plants/plants-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/plants', plantsRouter);

server.get("/", (req, res) => {
    res.status(200).json({ WELCOME: "Water My Plants API" })
})

module.exports = server;