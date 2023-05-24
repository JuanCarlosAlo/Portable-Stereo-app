const express = require("express");
const songsRoutes = express.Router();
const controller = require("../controllers/songs.controller");

songsRoutes.post("/", controller.createSong);
songsRoutes.get("/", controller.getAllSongs);

module.exports = songsRoutes;
