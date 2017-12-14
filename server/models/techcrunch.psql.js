const Sequelize = require('sequelize');
const sequelize = require('../dbConnection');

const TechCrunchAndroid = sequelize.define('techcrunch_android', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: { type: Sequelize.STRING },
  url: { type: Sequelize.STRING },
  time: { type: Sequelize.BIGINT },
  description: { type: Sequelize.TEXT }
});

module.exports = TechCrunchAndroid;
