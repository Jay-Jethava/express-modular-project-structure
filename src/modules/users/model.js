const { DataTypes } = require("sequelize");
const CryptoJS = require("crypto-js");
const sequelize = require("../../utils/db"); // Import the database connection

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      authIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM(["Male", "Female", "Other"]),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    paranoid: true,
    hooks: {
      // Hook to hash the password before creating the user
      beforeCreate: (user, options) => {
        if (user.password) {
          user.password = User.hashPassword(user.password); // Using the static method
        }
      },
      // Hook to hash the password before updating the user
      beforeUpdate: (user, options) => {
        console.log("user", user);
        console.log("options", options);
        if (user.password) {
          user.password = User.hashPassword(user.password); // Using the static method
        }
      },
    },
  }
);

// Adding a static method for password hashing
User.hashPassword = function (password) {
  return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
};

// Adding a static method for password verification
User.verifyPassword = function (inputPassword, hashedPassword) {
  const hashedInputPassword = CryptoJS.SHA256(inputPassword).toString(
    CryptoJS.enc.Hex
  );
  return hashedInputPassword === hashedPassword;
};

module.exports = User;
