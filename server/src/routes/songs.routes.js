const express = require("express");
const songsRoutes = express.Router();
const controller = require("../controllers/songs.controller");

// songsRoutes.post("/new-song", controller.newSong);
songsRoutes.get("/artist/:id", controller.getAllSongsOfArtist);
songsRoutes.post("/new-album", controller.newAlbum);
songsRoutes.get("/", controller.getAllSongsAndUsers);
songsRoutes.get("/get-search:key", controller.getSearch);
songsRoutes.patch("/replays", controller.replays);

module.exports = songsRoutes;
