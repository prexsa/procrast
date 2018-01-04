const express = require('express');
const router = express.Router();
const Articles = require('../models/articles.psql.js');

router.get('/', (req, res) => {
  Articles.findAll({
    where:{ site: ['hacksmozilla', 'tech crunch']},
    order: [['time', 'DESC']]})
    .then(article => {
      // console.log('response: ', article)
      res.send(article)
    })
    .catch(error => {
      console.error('Articles Error: ', error);
    })
});

router.get('/drop', (req, res) => {
  Articles.drop();
})

module.exports = router;
