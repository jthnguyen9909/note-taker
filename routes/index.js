const express = require("express");

const noteRouter = require("./notes");
const htmlRouter = require("./html");

const app = express();

app.use("/notes", noteRouter);

module.exports = app;
