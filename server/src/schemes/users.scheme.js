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
      selfLikes: Array,
      othersLikes: Number,
    },
    follows: {
      selfFollows: Array,
      othersFollows: Number,
    },
    uploads: {
      tracksUploads: Array,
      albumsUploads: Array,
    },
    type: String,
  },
  {
    collection: "users",
  }
);

const UserModel = mongoose.model("users", UsersScheme);

module.exports = UserModel;
