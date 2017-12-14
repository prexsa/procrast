const Sequelize = require('sequelize');
const sequelize = require('../dbConnection');

const Articles = sequelize.define('articles', {
  id: { 
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  site_id: { type: Sequelize.INTEGER },
  score: { type: Sequelize.INTEGER },
  title: { type: Sequelize.STRING },
  url: { type: Sequelize.STRING },
  author: { type: Sequelize.STRING },
  time: { type: Sequelize.INTEGER },
  type: { type: Sequelize.STRING },
  kids: { type: Sequelize.STRING(1234) },
  description: { type: Sequelize.TEXT },
  site: { type: Sequelize.STRING },
});

module.exports = Articles;


const HacksMozilla = sequelize.define('hacksmozilla', {
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


// 15850359
// https://hacker-news.firebaseio.com/v0/item/15850359.json?print=pretty