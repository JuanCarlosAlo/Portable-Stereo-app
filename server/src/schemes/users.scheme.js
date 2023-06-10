const mongoose = require("mongoose");

const UsersScheme = mongoose.Schema(
  {
    _id: String,
    email: String,
    userName: String,
    profileImg: String,
    bio: String,
    artist: Boolean,
    recentlyListen: Array,
    accountCreated: Number,
    totalListeners: Number,
    mixtapes: Array,
    likes: {
      _id: String,
      title: String,
      artist: String,
      date: Number,
      cover: String,
      songItem: Array,
    },
    follows: {
      selfFollows: Array,
      othersFollows: Number,
    },
    uploads: Array,
    type: String,
  },
  {
    collection: "users",
  }
);

const UserModel = mongoose.model("users", UsersScheme);

module.exports = UserModel;
