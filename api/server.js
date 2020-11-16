const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('../users/users-router');
const authRouter = require('../auth/auth-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/account", userRouter);
server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
    res.status(200).json({ WELCOME: "Water My Plants API" })
})

module.exports = server;