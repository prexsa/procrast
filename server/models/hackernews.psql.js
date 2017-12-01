const Sequelize = require('sequelize');
const sequelize = require('../dbConnection').sequelize;

const Article = sequelize.define('article', {
  id: { 
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  articleId: { type: Sequelize.INTEGER }
});

const ArticleDetails = sequelize.define('details', {
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

module.exports = {
  addIds: function(num) {
    Article.findOrCreate({ where: { articleId: num }})
  },
  addArticleDetails: function(val) {
    ArticleDetails.sync().then(() => {
      return ArticleDetails.create({
        id: val.id,
        score: val.score,
        title: val.title,
        url: val.url,
        author: val.author,
        time: val.time,
        type: val.type,
        kids: val.kids || null
      });
    });
  }, 
  getArticles: function() {
    return ArticleDetails.findAll({ limit: 50 })
      .then(article => {
        return article;
      });
  }
}