const { v4 } = require("uuid");
const SongModel = require("../schemes/songs.scheme");
const UserModel = require("../schemes/users.scheme");

const controller = {};

controller.getAllSongsAndUsers = async (req, res) => {
  console.log("test");
  const allSongs = await SongModel.find();
  const allUsers = await UserModel.find();

  try {
    res.status(200).send({ allSongs, allUsers });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getAllSongsOfArtist = async (req, res) => {
  const allSongs = await SongModel.find({ artistId: req.params.id });
  const currentArtist = await UserModel.findById(req.params.id);
  try {
    res.status(200).send({ allSongs, currentArtist });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

// controller.newSong = async (req, res) => {
//   const newDate = Date.now();
//   const songArrayId = v4();
//   const {
//     title,
//     songTitle,
//     artist,
//     songCover,
//     cover,
//     likes,
//     songLikes,
//     soundFile,
//     artistId,
//     replays,
//     type,
//   } = req.body;
//   const songItem = {
//     _id: songArrayId,
//     date: newDate,
//     songTitle,
//     artist,
//     songCover,
//     songLikes,
//     soundFile,
//     artistId,
//     replays,
//     date: newDate,
//     type,
//   };

//   const newSong = new SongModel({
//     _id: v4(),
//     title,
//     artist,
//     cover,
//     likes,
//     artistId,
//     replays,
//     date: newDate,
//     songItem,
//   });

//   await newSong.save();
//   res.end();
// };

controller.newAlbum = async (req, res) => {
  const newDate = Date.now();
  const albumId = v4();
  const { title, artist, cover, likes, artistId, replays } = req.body;
  const currentUser = await UserModel.findById(artistId);

  const songItem = req.body.songItem.map((song) => {
    const songId = v4();
    currentUser.uploads.unshift(songId);

    return {
      _id: songId,
      date: newDate,
      songTitle: song.songTitle,
      artist: song.artist,
      songCover: song.songCover,
      songLikes: song.songLikes,
      soundFile: song.soundFile,
      artistId: song.artistId,
      replays: song.replays,
      date: newDate,
      type: song.type,
    };
  });

  const newAlbum = new SongModel({
    _id: albumId,
    title,
    artist,
    cover,
    likes,
    artistId,
    replays,
    date: newDate,
    type: song.type,
    songItem,
  });

  await currentUser.uploads.unshift(albumId);

  await newAlbum.save();
  await currentUser.save();
  res.send(newAlbum);
};

controller.getSearch = async (req, res) => {
  const keyWord = req.params.key;
  const searchAlbum = await SongModel.find({
    title: new RegExp(keyWord, "i"),
  });
  const searchBySongTitle = await SongModel.aggregate([
    { $unwind: "$songItem" },
    {
      $match: {
        "songItem.songTitle": new RegExp(keyWord, "i"),
      },
    },
    {
      $project: {
        _id: 0,
        songItem: 1,
      },
    },
  ]);

  const searchArtist = await UserModel.find({
    userName: new RegExp(keyWord, "i"),
  });

  const songItem = searchBySongTitle.map((item) => item.songItem);
  try {
    res.status(200).send({ songItem, searchAlbum, searchArtist });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.replays = async (req, res) => {
  const currentSong = await SongModel.aggregate([
    { $match: { "songItem._id": req.body.id } },
    { $unwind: "$songItem" },
    { $match: { "songItem._id": req.body.id } },
    { $project: { _id: 0, songItem: 1 } },
  ]);
  const songItem = currentSong[0].songItem;

  songItem.replays += 1;
  await SongModel.findOneAndUpdate(
    { "songItem._id": req.body.id },
    { $set: { "songItem.$": songItem } }
  );
};

module.exports = controller;
