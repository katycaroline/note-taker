const express = require("express");
const noteRoute = require("./routes/notes-routes.js");
const indexRoute = require("./routes/index-routes.js");

// Creates an instance of express and makes a port for the application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(indexRoute);
app.use(noteRoute);

app.listen(PORT, () => {
    console.log(`App listening at PORT ${PORT}`);
});