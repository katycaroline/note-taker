const express = require("express");
const fs = require("fs");
const api = require("./public/assets/js/index.js");

// Creates an instance of express and makes a port for the application
var app = express();
var PORT = process.env.PORT || 3001

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.listen(PORT, function() {
    console.log(`App listening at PORT ${PORT}`);
});