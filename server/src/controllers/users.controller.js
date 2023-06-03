const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");
const SongModel = require("../schemes/songs.scheme");

const controller = {};

controller.getUserId = async (req, res) => {
  const autentifiedUser = await UserModel.findById(req.params.id);
  try {
    res.status(200).send(autentifiedUser);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createUser = async (req, res) => {
  const {
    _id,
    email,
    userName,
    profileImg,
    bio,
    artist,
    recentlyListen,
    mixtapes,
    likes,
    selfFollows,
    othersFollows,
    uploads,
    type,
  } = req.body;

  const newDate = Date.now();

  const newUser = new UserModel({
    _id,
    email,
    userName,
    profileImg,
    bio,
    artist,
    recentlyListen,
    accountCreated: newDate,
    totalListeners: 0,
    mixtapes,
    likes,
    follows: {
      selfFollows,
      othersFollows,
    },
    uploads,
    type,
  });

  const userExist = await UserModel.findById(req.body._id);
  if (userExist)
    return res.status(409).send({ error: "User Already has a profile" });

  const currentUser = await newUser.save();

  res.send(currentUser);
};

controller.updateUser = async (req, res) => {
  try {
    await UserModel.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
  } catch {
    return res.status(500).send({ error: "Error" });
  }

  const currentUser = await UserModel.findById(req.params.id);

  res.send(currentUser);
};

controller.updateRecentlyListen = async (req, res) => {
  const songToUpload = req.body.id;
  const currentUser = await UserModel.findById(req.params.id);

  const alreadyListened = currentUser.recentlyListen.find(
    (song) => song === req.body.id
  );
  if (alreadyListened) {
    const index = currentUser.recentlyListen.indexOf(alreadyListened);
    currentUser.recentlyListen.splice(index, 1);
  }
  if (currentUser.recentlyListen.length === 10) {
    currentUser.recentlyListen.pop();
  }
  await currentUser.recentlyListen.unshift(songToUpload);
  console.log(currentUser);
  currentUser.save();

  res.end();
};

controller.getUserData = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);
  const allUsers = await UserModel.find();
  const allSongs = await SongModel.find();
  const followinArtist = currentUser.follows.selfFollows.map(
    async (artist) => await UserModel.findById(artist)
  );
  const recentlyListen = currentUser.recentlyListen.map(
    async (song) => await SongModel.findById(song)
  );
  const recentlyListenPromises = await Promise.all(recentlyListen);
  const followinArtistPromises = await Promise.all(followinArtist);

  try {
    res.status(200).send({
      recentlyListenPromises,
      followinArtistPromises,
      allUsers,
      allSongs,
    });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.getMixtapes = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);
  const likedMusic = await Promise.all(
    currentUser.likes.map(async (song) => {
      const songItem = await SongModel.findOne({ "songItem._id": song });
      if (songItem) {
        const foundSongItem = songItem.songItem.find(
          (item) => item._id === song
        );
        return foundSongItem;
      }
    })
  );

  const likesData = {
    title: "Liked Mixtape",
    artist: currentUser.userName,
    date: currentUser.accountCreated,
    cover:
      "https://firebasestorage.googleapis.com/v0/b/portable-stereo.appspot.com/o/liked_mixtape.svg?alt=media&token=38e1c494-bdd7-458b-bc65-04cf5bf4d286&_gl=1*1wkblad*_ga*MTc1NDYwMDMzNy4xNjgzNjI5NjE1*_ga_CW55HF8NVT*MTY4NTc5NzYzOC4zNy4xLjE2ODU3OTc2NzkuMC4wLjA.",
    songItem: likedMusic.filter((item) => item !== undefined),
  };

  try {
    res.status(200).send({ likesData });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.updateLikes = async (req, res) => {
  const songLiked = req.body.id;
  const currentUser = await UserModel.findById(req.params.id);

  const alreadyLiked = currentUser.likes.find((song) => song === req.body.id);
  if (alreadyLiked) {
    const index = currentUser.likes.indexOf(alreadyLiked);
    await currentUser.likes.splice(index, 1);
  } else {
    await currentUser.likes.unshift(songLiked);
  }

  console.log(currentUser);
  currentUser.save();

  res.end();
};

module.exports = controller;
