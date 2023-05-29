const express = require("express");
const usersRoutes = express.Router();
const controller = require("../controllers/users.controller");

usersRoutes.post("/create-user", controller.createUser);
usersRoutes.get("/", controller.getUsers);
usersRoutes.get("/:id", controller.getUserId);
usersRoutes.patch("/:id", controller.updateUser);
usersRoutes.patch("/recently-played/:id", controller.updateRecentlyListen);

module.exports = usersRoutes;
