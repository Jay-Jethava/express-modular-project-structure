const router = require("express").Router();
const { Router } = require("express");
const userController = require("./controller");

router.post("/add-new-user", userController.addUser);
router.get("/user-list", userController.getAllUsers);

module.exports = Router;
