const axios = require('axios');
const sequelize = require('../schema/ids.mysql.js');
const { addIds, addArticleDetails, getArticles } = require('../schema/ids.mysql.js');

module.exports = (app) => {
  app.get('/hackernews', (req, res) => {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    axios.get(topStories)
      .then(response => {
        // console.log('response: ', response.data)
        response.data.map(num => { 
          // addIds(num);
        })
        res.send(response.data);
      })
      .catch(err => {
        console.error(err);
      })
  })

  app.post('/insert', (req, res) => {
    const ids = req.body.ids;
    //const num = 15800082;
    // https://hacker-news.firebaseio.com/v0/item/15800082.json?print=pretty
    ids.map(num => {
      const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${num}.json?print=pretty`;
      axios.get(storyUrl)
        .then(resp => {
          //console.log('resp: ', resp.data)
          const details = {
            author: resp.data.by,
            id: resp.data.id,
            score: resp.data.score,
            title: resp.data.title,
            url: resp.data.url,
            time: resp.data.time,
            type: resp.data.type,
            kids: resp.data.kids
          }
          //console.log('details: ', details)
          addArticleDetails(details);
        })
        .catch(err => {
          console.error(err);
        })  
    })
  })

  app.get('/articles', (req, res) => {
    getArticles().then(articles => {
      //console.log("ARTICLES: ", articles)
      res.send(articles);
    });
  })


}

