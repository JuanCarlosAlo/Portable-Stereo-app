const express = require("express");
const songsRoutes = express.Router();
const controller = require("../controllers/songs.controller");

songsRoutes.post("/new-song", controller.newSong);
songsRoutes.get("/artist/:id", controller.getAllSongsOfArtist);
songsRoutes.post("/new-album", controller.newAlbum);
songsRoutes.get("/", controller.getAllSongs);
songsRoutes.get("/everything", controller.getAllSongsWithUsers);

module.exports = songsRoutes;
