const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.post("/create-user", controller.createUser);
// usersRoutes.get("/", controller.getUsers);
usersRoutes.get("/:id", controller.getUserId);
usersRoutes.get("/", controller.getUsers);
usersRoutes.patch("/:id", controller.updateUser);
usersRoutes.patch("/recently-played/:id", controller.updateRecentlyListen);
usersRoutes.get("/user-data/:id", controller.getUserData);
usersRoutes.get("/mixtapes/:id", controller.getMixtapes);

usersRoutes.patch("/like/:id", controller.updateLikes);
usersRoutes.patch("/follow/:id", controller.updateFollow);
usersRoutes.patch("/create-mixtape/:id", controller.createMixtape);
usersRoutes.delete("/delete-mixtape/:id", controller.deleteMixtape);
usersRoutes.delete(
  "/delete-from-mixtape/:id",
  controller.deleteSongFromMixtape
);
usersRoutes.patch("/add-to-mixtape/:id", controller.addToMixtape);
usersRoutes.patch("/edit-mixtape/:id", controller.editMixtape);

module.exports = usersRoutes;
