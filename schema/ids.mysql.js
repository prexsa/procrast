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

// id model
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
    /*Article.sync().then(() => {
      return Article.create({
        articleId: num
      });
    });*/
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
        // console.log('Article: ', article)
        return article;
      });
  }
}