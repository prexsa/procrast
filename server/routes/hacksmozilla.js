const express = require('express');
const router = express.Router();
const axios = require('axios');
const Feed = require('rss-to-json');
const { createRecord, getArticles } = require('../models/hacksmozilla.psql.js');

router.get('/', (req, res) => {
  getArticles()
    .then(articles => {
      //console.log('ARTICLES: ', articles)
      res.send(articles);
    });
});

router.get('/feed-hackmozilla', (req, res) => {
  // get rss feed
  console.log("RSS FEED")
  Feed.load('https://hacks.mozilla.org/feed/', function(err, rss) {
    // console.log('RSS: ', rss.items[0]);
    const articles = rss.items;
    articles.map(article => {
      createRecord(article);
    })
    res.send('Hack Mozilla Article Record Created.')
  })
});

module.exports = router;
