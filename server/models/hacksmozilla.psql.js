const Sequelize = require('sequelize');
const config = require('../../config');
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

const Testing = sequelize.define('test', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  }
})


module.exports = {
  create: function(val) {
    /*Testing.sync().then(() => {
      return Testing.create();
    })*/
    // console.log("VALUE: ", val.title)
    const inSeconds = val.created / 1000;
    HacksMozilla.sync().then(() => {
      return HacksMozilla.create({
        title: val.title,
        url: val.url,
        time: inSeconds,
        description: val.description
      });
    })
  },
  get: function() {
    HacksMozilla.findAll()
      .then(article => {
        return article
      })
  }
}
