// import sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to our database, pass in your MYSQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
const sequelize = new Sequelize('just_tech_news_db', 'root', '678999', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
}

module.exports = sequelize;