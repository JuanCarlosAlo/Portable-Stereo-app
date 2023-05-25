const mongoose = require("mongoose");

const SongSchema = mongoose.Schema({
  _id: String,
  title: String,
  artist: String,
  cover: String,
  likes: Number,
  soundFile: String,
  artistId: String,
  replays: Number,
  date: Number,
  type: String,
});

const SongModel = mongoose.model("songs", SongSchema);

module.exports = SongModel;
