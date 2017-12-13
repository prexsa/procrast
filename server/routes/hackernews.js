const express = require('express');
const router = express.Router();
const axios = require('axios');
const HackerNews = require('../models/hackernews.psql.js');

router.get('/article-id-list', (req, res) => {
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
router.post('/feed-hackernews', (req, res) => {
  const ids = req.body.ids;
  
  ids.map(num => {
    const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${num}.json?print=pretty`;
    axios.get(storyUrl)
      .then(resp => {
        //HackerNews.sync()
          HackerNews.findOrCreate({ where: {
            id: resp.data.id,
            score: resp.data.score,
            title: resp.data.title,
            url: resp.data.url,
            author: resp.data.author,
            time: resp.data.time,
            type: resp.data.type,
            kids: resp.data.kids
          }});
        res.send('Records created');
      })
      .catch(err => {
        console.error(err);
      })  
  })
});

router.get('/', (req, res) => {
  HackerNews.findAll({ limit: 50 })
    .then(article => {
      res.send(article);
    });
});

module.exports = router;