const Sequelize = require("sequelize");
require("dotenv").config();
const env = process.env.NODE_ENV;
const config = require("./config.json")[env];
console.log("config",config)
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,{
    host:config.host,
    dialect:config.dialect,
  }
);

module.exports = sequelize;
