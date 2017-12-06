const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const Feed = require('rss-to-json');
const { createRecord, getArticles } = require('../models/techcrunch.psql.js');

/*** 
  TechCrunch feed type links
  - Mobile - http://feeds.feedburner.com/Mobilecrunch
  - Social - http://feeds.feedburner.com/TechCrunch/social
  - Samsung - http://feeds.feedburner.com/TechCrunch/Samsung
  - Google - http://feeds.feedburner.com/TechCrunch/Google
  - Android - http://feeds.feedburner.com/TechCrunch/Android
***/



router.get('/scrape', (req, res) => {
  Feed.load('http://feeds.feedburner.com/TechCrunch/Android', function(err, rss) {
    const articles = rss.items;
    articles.map(article => {
      article.description = cheerio.load(article.description).text().trim();
      //console.log('article: ', article)
      createRecord(article);
    })
    res.send(rss);
  })
})

module.exports = router;