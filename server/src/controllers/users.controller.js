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
    selfLikes,
    othersLikes,
    selfFollows,
    othersFollows,
    tracksUploads,
    albumsUploads,
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
    likes: {
      selfLikes,
      othersLikes,
    },
    follows: {
      selfFollows,
      othersFollows,
    },
    uploads: {
      tracksUploads,
      albumsUploads,
    },
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
  const songToUpload = await SongModel.findById(req.body.id);
  const currentUser = await UserModel.findById(req.params.id);
  const alreadyListened = currentUser.recentlyListen.find(
    (song) => song._id === req.body.id
  );
  if (alreadyListened) {
    const index = currentUser.recentlyListen.indexOf(alreadyListened);
    currentUser.recentlyListen.splice(index, 1);
  }
  if (currentUser.recentlyListen.length === 10) {
    currentUser.recentlyListen.pop();
  }
  await currentUser.recentlyListen.unshift(songToUpload);
  try {
    await UserModel.updateOne(
      { _id: req.params.id },
      { $set: { ...currentUser } }
    );
  } catch {
    return res.status(500).send({ error: "Error" });
  }

  res.send(currentUser);
};

module.exports = controller;
