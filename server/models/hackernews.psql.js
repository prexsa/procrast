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

/*module.exports = {
  createRecord: function(val) {
    HackerNews.sync().then(() => {
      return HackerNews.findOrCreate({ where: {
        id: val.id,
        score: val.score,
        title: val.title,
        url: val.url,
        author: val.author,
        time: val.time,
        type: val.type,
        kids: val.kids
      }});
    });
  }, 
  getArticles: function() {
    return HackerNews.findAll({ limit: 50 })
      .then(article => {
        return article;
      });
  }
}*/
