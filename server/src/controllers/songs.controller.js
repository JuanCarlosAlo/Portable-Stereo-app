const { v4 } = require("uuid");
const SongModel = require("../schemes/songs.scheme");
const UserModel = require("../schemes/users.scheme");

const controller = {};

controller.getAllSongs = async (req, res) => {
  const autentifiedUser = await SongModel.find();
  try {
    console.log(autentifiedUser, req.params.id);
    res.status(200).send(autentifiedUser);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};
controller.getAllSongsWithUsers = async (req, res) => {
  const allSongs = await SongModel.find();
  const allUsers = await UserModel.find();
  try {
    res.status(200).send({ allSongs, allUsers });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.newSong = async (req, res) => {
  const newDate = Date.now();
  const songArrayId = v4();
  const {
    title,
    songTitle,
    artist,
    songCover,
    cover,
    likes,
    songLikes,
    soundFile,
    artistId,
    replays,
    type,
  } = req.body;
  const songItem = {
    _id: songArrayId,
    date: newDate,
    songTitle,
    artist,
    songCover,
    songLikes,
    soundFile,
    artistId,
    replays,
    date: newDate,
    type,
  };

  const newSong = new SongModel({
    _id: v4(),
    title,
    artist,
    cover,
    likes,
    artistId,
    replays,
    date: newDate,
    songItem,
  });

  await newSong.save();
  res.end();
};

module.exports = controller;
