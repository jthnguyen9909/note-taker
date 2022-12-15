const express = require("express");

const app = express();
// port for heroku deployment
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// get api routes from index and html pages from html in routes folder
app.use("/api", require("./routes/index"));
app.use("/", require("./routes/html"));

// listen on port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
