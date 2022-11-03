"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const UserEmail = sequelize.define("userEmail", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    isEmail: true,
  },
});

module.exports = UserEmail;
