const mongoose = require("mongoose");

const SongItemSchema = mongoose.Schema({
  _id: String,
  songTitle: String,
  artist: String,
  songCover: String,
  songLikes: Number,
  soundFile: String,
  artistId: String,
  replays: Number,
  date: Number,
  type: String,
});
const SongSchema = mongoose.Schema({
  _id: String,
  title: String,
  artist: String,
  cover: String,
  likes: Number,
  artistId: String,
  replays: Number,
  date: Number,
  songItem: [SongItemSchema],
});

const SongModel = mongoose.model("songs", SongSchema);

module.exports = SongModel;
