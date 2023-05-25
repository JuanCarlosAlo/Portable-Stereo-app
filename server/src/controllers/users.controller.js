const { v4 } = require("uuid");
const UserModel = require("../schemes/users.scheme");

const controller = {};

controller.getUserId = async (req, res) => {
  const autentifiedUser = await UserModel.findById(req.params.id);
  try {
    console.log(autentifiedUser, req.params.id);
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
  console.log(currentUser);
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
  console.log(currentUser);
  res.send(currentUser);
};

module.exports = controller;
