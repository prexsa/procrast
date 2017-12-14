const Sequelize = require('sequelize');
const sequelize = require('../dbConnection');

const HackerNews = sequelize.define('hackernews', {
  id: { 
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  score: { type: Sequelize.INTEGER },
  title: { type: Sequelize.STRING },
  url: { type: Sequelize.STRING },
  author: { type: Sequelize.STRING },
  time: { type: Sequelize.INTEGER },
  type: { type: Sequelize.STRING },
  kids: { type: Sequelize.ARRAY(Sequelize.INTEGER) }
});

module.exports = HackerNews;
