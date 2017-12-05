const Sequelize = require('sequelize');
const sequelize = require('../dbConnection');

const TechCrunch = sequelize.define('techcrunch', {
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
  createRecord: function(val) {
    const inSeconds = val.created / 1000;
    TechCrunch.sync().then(() => {
      return TechCrunch.findOrCreate({ where: {
        title: val.title,
        url: val.url,
        time: inSeconds,
        description: val.description
      }});
    })
  },
  getArticles: function() {
    return TechCrunch.findAll()
      .then(article => {
        return article;
      });
  }
}
