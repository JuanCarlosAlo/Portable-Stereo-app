const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.post("/", controller.createSong);
usersRoutes.get("/", controller.getAllSongs);
usersRoutes.get("/:id", controller.songById);
usersRoutes.patch("/:id", controller.updateSong);

module.exports = usersRoutes;
