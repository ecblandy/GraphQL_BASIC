require("dotenv").config();
const Sequelize = require("sequelize");
const $user = process.env.DB_USER;
const $password = process.env.DB_PASSWORD;
const $host = process.env.DB_HOST;
const $dbName = process.env.DB_NAME;

const sequelize = new Sequelize($dbName, $user, $password, {
  host: $host,
  dialect: "mysql",
});

const connectSql = async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectSql,
  sequelize,
  Sequelize,
};
