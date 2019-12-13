const express = require("express");

const server = express();

server.use(express.json());

const projectsRouter = require("./projects/projectsRouter");

server.get("/", (req, res) => {
  res.send("<h1> Welcome to Project Page");
});

server.use("/projects", projectsRouter);

module.exports = server;
