const router = require("express").Router();
const userController = require("./controller");

router.post("/add-new-user", userController.addUser);
router.get("/user-list", userController.getAllUsers);

module.exports = router;
