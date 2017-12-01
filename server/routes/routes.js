const axios = require('axios');
const Feed = require('rss-to-json');
// const sequelize = require('../models/hackernews.psql.js');
const { addIds, addArticleDetails, getArticles } = require('../models/hackernews.psql.js');
const { create, get } = require('../models/hacksmozilla.psql.js');
console.log('create: ', create)
module.exports = (app) => {
  app.get('/hackernews', (req, res) => {
    const topStories = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
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
          res.send('Records created');
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

  app.get('/hacksmozilla', (req, res) => {
      get()
        .then(articles => {
          console.log('ARTICLES: ', articles)
          res.send(articles);
        });
  })

  app.get('/feed-hackmozilla', (req, res) => {
    // get rss feed
    Feed.load('https://hacks.mozilla.org/feed/', function(err, rss) {
      // console.log('RSS: ', rss.items[0]);
      const articles = rss.items;
      articles.map(article => {
        create(article);
      })
      res.send('Hack Mozilla Article Record Created.')
    })
  })


}

