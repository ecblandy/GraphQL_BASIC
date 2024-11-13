const { sequelize, Sequelize } = require("../config/mysql");

const UsersSchema = sequelize.define("usuarios", {
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

const makeTable = async () => {
  try {
    await userTable.sync({ force: false });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  makeTable,
  UsersSchema,
};
