const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const Feed = require('rss-to-json');
const TechCrunchAndroid = require('../models/techcrunch.psql.js');
const Articles = require('../models/articles.psql.js');
const CrawlDetails = require('../models/crawldetail.psql.js');

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
      const inSeconds = article.created / 1000;
      Articles.sync()
        Articles.findOrCreate({ where: {
          title: article.title,
          url: article.url,
          time: inSeconds,
          description: article.description,
          site: 'tech crunch',
        }});
    });

    res.send(rss);
  })
});

module.exports = router;
