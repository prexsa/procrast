const axios = require('axios');
const sequelize = require('../schema/ids.mysql.js');

module.exports = (app) => {
  app.get('/hackernews', (req, res) => {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    axios.get(topStories)
      .then(response => {
        console.log('resp: ', response.data)
        res.send(response.data);
      })
      .catch(err => {
        console.error(err);
      })
  })
}
