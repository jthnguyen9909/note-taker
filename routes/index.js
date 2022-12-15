const express = require("express");

const noteRouter = require("./notes");

const app = express();

// for api will use /api/notes
app.use("/notes", noteRouter);

module.exports = app;
