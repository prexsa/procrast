const Sequelize = require('sequelize');
const sequelize = require('../dbConnection').sequelize;

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

module.exports = {
  create: function(val) {
    const inSeconds = val.created / 1000;
    HacksMozilla.sync().then(() => {
      return HacksMozilla.findOrCreate({ where: {
        title: val.title,
        url: val.url,
        time: inSeconds,
        description: val.description
      }});
    })
  },
  get: function() {
    return HacksMozilla.findAll()
      .then(article => {
        return article;
      });
  }
}
