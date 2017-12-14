const express = require('express');
const router = express.Router();
const axios = require('axios');
const Feed = require('rss-to-json');
const HacksMozilla = require('../models/hacksmozilla.psql.js');
const Articles = require('../models/articles.psql.js');

router.get('/feed-hackmozilla', (req, res) => {
  // get rss feed
  console.log("RSS FEED")
  Feed.load('https://hacks.mozilla.org/feed/', function(err, rss) {
    // console.log('RSS: ', rss.items[0]);
    const articles = rss.items;
    articles.map(article => {
      const inSeconds = article.created / 1000;
      Articles.sync()
      Articles.findOrCreate({ where: {
        title: article.title,
        url: article.url,
        time: inSeconds,
        description: article.description,
        site: 'hacksmozilla',
      }});
    });
    res.send('Hack Mozilla Article Record Created.')
  })
});

module.exports = router;
