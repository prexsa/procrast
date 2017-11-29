/***
  This file is used to insert article records into the postgres database
***/

import axios from 'axios';

const ROOT = 'http://localhost:3090';

export const hackerNewsArticleId = () => {
  axios.get(`${ROOT}/hackernews`)
    .then(response => {
      const ids = response.data;
      hackerNewsArticleDetails(ids);
    });
}

const hackerNewsArticleDetails = (ids) => {
  axios.post(`${ROOT}/insert`, { ids })
}


// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


// https://hacker-news.firebaseio.com/v0/item/15805076.json?print=pretty