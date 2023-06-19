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
    headerImg,
    bio,
    artist,
    recentlyListen,
    mixtapes,
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
    headerImg,
    bio,
    artist,
    recentlyListen,
    accountCreated: newDate,
    totalListeners: 0,
    mixtapes,
    likes: {
      _id: v4(),
      title: "Liked Mixtape",
      artist: userName,
      date: newDate,
      cover:
        "https://firebasestorage.googleapis.com/v0/b/portable-stereo.appspot.com/o/liked_mixtape.svg?alt=media&token=38e1c494-bdd7-458b-bc65-04cf5bf4d286&_gl=1*1wkblad*_ga*MTc1NDYwMDMzNy4xNjgzNjI5NjE1*_ga_CW55HF8NVT*MTY4NTc5NzYzOC4zNy4xLjE2ODU3OTc2NzkuMC4wLjA.",
      songItem: [],
    },
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

  await newUser.save();

  return res.status(409).send({ message: "Login successfull" });
};

controller.updateUser = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);
  currentUser.mixtapes.map((mixtape) => (mixtape.artist = req.body.userName));
  currentUser.likes.artist = req.body.userName;

  try {
    await UserModel.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    await currentUser.markModified("likes", "mixtapes");
    currentUser.save();
  } catch {
    return res.status(500).send({ error: "Error" });
  }

  res.send(currentUser);
};
controller.deleteUser = async (req, res) => {
  try {
    const currentUser = await UserModel.findById(req.params.id);

    // Eliminar las canciones asociadas al usuario
    if (currentUser.uploads.length > 0) {
      await SongModel.deleteMany({ artistId: currentUser._id });
    }
    // Eliminar al usuario
    await UserModel.findByIdAndRemove(currentUser._id);
    console.log(currentUser);
    res
      .status(200)
      .json({ message: "Usuario y canciones eliminadas correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar usuario y canciones" });
  }
};

controller.updateRecentlyListen = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);
  const albumListened = req.body.id;

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
  await currentUser.recentlyListen.unshift(albumListened);
  currentUser;
  currentUser.save();

  try {
    res.status(200).send({ message: "updated successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
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
  const userMixtapes = currentUser.mixtapes;

  const allMixtapes = await Promise.all(
    userMixtapes.map(async (mixtape) => {
      const songItems = await Promise.all(
        mixtape.songItem.map(async (song) => {
          const songItem = await SongModel.findOne({ "songItem._id": song });
          if (songItem) {
            const foundSongItem = songItem.songItem.find(
              (item) => item._id.toString() === song.toString()
            );
            return foundSongItem;
          }
        })
      );

      return {
        _id: mixtape._id,
        artist: currentUser.userName,
        artistId: currentUser._id,
        cover: mixtape.cover,
        date: mixtape.date,
        title: mixtape.title,
        songItem: songItems.filter((item) => item !== undefined),
      };
    })
  );

  const likedMusic = await Promise.all(
    currentUser.likes.songItem.map(async (song) => {
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
    title: currentUser.likes.title,
    artist: currentUser.likes.artist,
    date: currentUser.accountCreated,
    cover: currentUser.likes.cover,
    songItem: likedMusic.filter((item) => item !== undefined),
  };

  try {
    res.status(200).send({ likesData, allMixtapes });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.updateLikes = async (req, res) => {
  const songLiked = req.body.id;
  const currentUser = await UserModel.findById(req.params.id);
  const currentSong = await SongModel.aggregate([
    { $match: { "songItem._id": songLiked } },
    { $unwind: "$songItem" },
    { $match: { "songItem._id": songLiked } },
    { $project: { _id: 0, songItem: 1 } },
  ]);

  const songItem = currentSong[0].songItem;

  const alreadyLiked = currentUser.likes.songItem.find(
    (song) => song === req.body.id
  );
  if (alreadyLiked) {
    const index = currentUser.likes.songItem.indexOf(alreadyLiked);
    await currentUser.likes.songItem.splice(index, 1);
    songItem.songLikes -= 1;
  } else {
    await currentUser.likes.songItem.unshift(songLiked);
    songItem.songLikes += 1;
  }

  await SongModel.findOneAndUpdate(
    { "songItem._id": songLiked },
    { $set: { "songItem.$": songItem } }
  );
  currentUser.save();
  try {
    res.status(200).send({ message: "updated successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.updateFollow = async (req, res) => {
  const artistFollow = await UserModel.findById(req.body.id);
  const currentUser = await UserModel.findById(req.params.id);
  const alreadyFollow = currentUser.follows.selfFollows.find(
    (artist) => artist === req.body.id
  );

  if (alreadyFollow) {
    const index = currentUser.follows.selfFollows.indexOf(alreadyFollow);
    await currentUser.follows.selfFollows.splice(index, 1);
    artistFollow.follows.othersFollows -= 1;
  } else {
    await currentUser.follows.selfFollows.unshift(req.body.id);
    artistFollow.follows.othersFollows += 1;
  }
  artistFollow.save();
  currentUser.save();
  try {
    res.status(200).send({ message: "updated successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.createMixtape = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);
  const { songToAdd } = req.body;

  const defaultMixtape = {
    _id: v4(),
    date: Date.now(),
    ...req.body,
  };
  if (songToAdd) {
    await defaultMixtape.songItem.unshift(songToAdd);
  }
  try {
    await currentUser.mixtapes.unshift(defaultMixtape);
    currentUser.save();
    res.status(200).send({ message: "updated successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.deleteMixtape = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);

  const mixtapeToDelete = currentUser.mixtapes.find(
    (mixtape) => mixtape._id === req.body.id
  );

  try {
    const index = currentUser.mixtapes.indexOf(mixtapeToDelete);
    await currentUser.mixtapes.splice(index, 1);
    await currentUser.markModified("mixtapes");
    currentUser.save();
    res.status(200).send({ message: "updated successfully" });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};

controller.addToMixtape = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);
  const { songToAdd, mixtape } = req.body;

  const alreadyAdded = currentUser.mixtapes[mixtape].songItem.find(
    (song) => song === songToAdd
  );

  if (alreadyAdded) {
    const index = currentUser.mixtapes[mixtape].songItem.indexOf(alreadyAdded);
    await currentUser.mixtapes[mixtape].songItem.splice(index, 1);
  }
  try {
    await currentUser.mixtapes[mixtape].songItem.unshift(songToAdd);
    await currentUser.markModified("mixtapes");
    currentUser.save(currentUser);

    res.status(200).send({ message: "Canción agregada exitosamente" });
  } catch (error) {
    res.status(500).send({ error: "Error al leer la base de datos" });
  }
};
controller.editMixtape = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);
  const { mixtapeId, title, cover } = req.body;
  const mixtapeIndex = currentUser.mixtapes.findIndex(
    (mixtape) => mixtape._id === mixtapeId
  );

  if (mixtapeIndex === -1) {
    return res.status(404).send({ error: "Mixtape no encontrada" });
  }

  const mixtapeToPatch = currentUser.mixtapes[mixtapeIndex];
  mixtapeToPatch.title = title;
  mixtapeToPatch.cover = cover;

  currentUser;
  await currentUser.markModified("mixtapes");
  try {
    await currentUser.save();
    res.status(200).send({ message: "Mixtape editada exitosamente" });
  } catch (error) {
    res.status(500).send({ error: "Error al guardar en la base de datos" });
  }
};

controller.deleteSongFromMixtape = async (req, res) => {
  const currentUser = await UserModel.findById(req.params.id);
  const { songId, mixtapeId } = req.body;

  const mixtapeIndex = currentUser.mixtapes.findIndex(
    (mixtape) => mixtape._id === mixtapeId
  );

  if (mixtapeIndex === -1) {
    return res.status(404).send({ error: "Mixtape not found" });
  }

  const mixtapeToPatch = currentUser.mixtapes[mixtapeIndex];
  const SongToDeleteIndex = mixtapeToPatch.songItem.indexOf(songId);
  if (SongToDeleteIndex > -1)
    mixtapeToPatch.songItem.splice(SongToDeleteIndex, 1);
  try {
    await currentUser.markModified("mixtapes");
    await currentUser.save();
    res.status(200).send({ message: "Mixtape editada exitosamente" });
  } catch (error) {
    res.status(500).send({ error: "Error al guardar en la base de datos" });
  }
};

module.exports = controller;
