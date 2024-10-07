const userService = require("./service");

exports.addUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);

    res.status(200).json({
      status: "success",
      message: "user created successfully.",
      data: {
        newUser,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers(req.query);

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    const affected = await userService.updateUser(req.body, {
      where: {
        id: req.params.id,
      },
      // returning: true, // PostgreSQL
      individualHooks: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        affected,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
