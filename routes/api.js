const router = require("express").Router()
const fs = require("fs")
const path = require("path")
const { v4: uuidv4 } = require('uuid');


router.get("/notes", (req, res) => {
    const saveNotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"))
    res.json(saveNotes)
})

router.post("/notes", (req, res) => {
    const saveNotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"))
    saveNotes.push({ title: req.body.title, text: req.body.text, id: uuidv4()})
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(saveNotes))
    res.json(saveNotes)
})

router.delete("/notes/:id", (req, res) => {
    const deleteNotes = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"))
    const updatedNotes = deleteNotes.filter(note => note.id !== req.params.id)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(updatedNotes))
    console.log(updatedNotes)
    res.json(updatedNotes)
})

module.exports = router 