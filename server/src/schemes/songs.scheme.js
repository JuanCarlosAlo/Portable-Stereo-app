const mongoose = require("mongoose");

const SongSchema = mongoose.Schema({
  _id: String,
  title: String,
  author: String,
  cover: String,
  likes: Number,
  soundFile: String,
});

const SongModel = mongoose.model("songs", SongSchema);

module.exports = { SongSchema, SongModel };
