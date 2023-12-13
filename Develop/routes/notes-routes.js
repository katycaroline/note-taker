const router = require("express").Router();
const fs = require("fs");
const id = require("uniqid");

router.get("/api/notes", (req, res) => {
    fs.readFile("db.json", "utf-8", (err, data) => {
        if (err) {
            throw err;
        } else {
            res.json(JSON.parse(data));
        }
    })
});

router.post("/api/notes", (req, res) => {
    const noteDb = JSON.parse(fs.readFileSync("db.json"));
    const newNote = req.body;
    newNote.id = id();
    noteDb.push(newNote);
    fs.writeFileSync("db.json", JSON.stringify(noteDb));
    res.json(noteDb);
});

module.exports = router;