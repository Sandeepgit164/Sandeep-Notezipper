const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  const note = notes.find((note) => note._id === id);
  res.json(note);
});

const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  console.log(`server stared on port ${PORT}`);
});
