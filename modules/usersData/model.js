"use strict";
const Sequelize = require("sequelize");
const sequelize = require("../../config/db");

const UserData = sequelize.define("userDataInfo", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    isEmail: true,
  },
  phone_no: {
    type: Sequelize.BIGINT,
    unique: true,
    allowNull: false,
    validate: {
      not: {
        args: ["[a-z]", "i"],
        msg: "Please enter a valid number",
      },
      len: {
        args: [10, 10],
        msg: "length of the phone number is 10",
      },
    },
  },
  company_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = UserData;
