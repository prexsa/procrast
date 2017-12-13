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

/*{
  createRecord: function(val) {
    const inSeconds = val.created / 1000;
    TechCrunchAndroid.sync().then(() => {
      return TechCrunchAndroid.findOrCreate({ where: {
        title: val.title,
        url: val.url,
        time: inSeconds,
        description: val.description
      }});
    })
  },
  getArticles: function() {
    return TechCrunchAndroid.findAll()
      .then(article => {
        return article;
      });
  }
}*/
