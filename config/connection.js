// import sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our database, pass in your MYSQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
});
}

module.exports = sequelize;