const axios = require('axios');
const Feed = require('rss-to-json');
const { createArticleRecord, getArticles } = require('../models/hackernews.psql.js');
const { create, get } = require('../models/hacksmozilla.psql.js');


module.exports = (app) => {
  /*app.get('/article-id-list', (req, res) => {
    const topStories = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';
    axios.get(topStories)
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        console.error(err);
      })
  });
// create record for hackernews article
  app.post('/feed-hackernews', (req, res) => {
    const ids = req.body.ids;
    
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
          createArticleRecord(details);
          res.send('Records created');
        })
        .catch(err => {
          console.error(err);
        })  
    })
  });

  app.get('/hackernews', (req, res) => {
    getArticles().then(articles => {
      //console.log("ARTICLES: ", articles)
      res.send(articles);
    });
  });*/

  /*app.get('/feed-hackmozilla', (req, res) => {
    // get rss feed
    Feed.load('https://hacks.mozilla.org/feed/', function(err, rss) {
      // console.log('RSS: ', rss.items[0]);
      const articles = rss.items;
      articles.map(article => {
        create(article);
      })
      res.send('Hack Mozilla Article Record Created.')
    })
  });

  app.get('/hacksmozilla', (req, res) => {
      get()
        .then(articles => {
          //console.log('ARTICLES: ', articles)
          res.send(articles);
        });
  });*/
}

