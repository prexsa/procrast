const Sequelize = require('sequelize');
const config = require('../config');

const user = config.postgres.user;
const pw = config.postgres.pw;
const db = 'news' || config.postgres.db;
const host = config.postgres.host;

const sequelize = new Sequelize(`postgres://${user}:${pw}@${host}:5432/${db}`);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;