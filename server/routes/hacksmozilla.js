const express = require('express');
const router = express.Router();
const axios = require('axios');
const Feed = require('rss-to-json');
const HacksMozilla = require('../models/hacksmozilla.psql.js');


router.get('/feed-hackmozilla', (req, res) => {
  // get rss feed
  console.log("RSS FEED")
  Feed.load('https://hacks.mozilla.org/feed/', function(err, rss) {
    // console.log('RSS: ', rss.items[0]);
    const articles = rss.items;
    articles.map(article => {
      const inSeconds = article.created / 1000;
      // HacksMozilla.sync()
      HacksMozilla.findOrCreate({ where: {
        title: article.title,
        url: article.url,
        time: inSeconds,
        description: article.description
      }});
    });
    res.send('Hack Mozilla Article Record Created.')
  })
});

router.get('/', (req, res) => {
  HacksMozilla.findAll()
    .then(article => {
      res.send(article);
    });
});

module.exports = router;
