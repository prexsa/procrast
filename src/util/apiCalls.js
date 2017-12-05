/***
  This file makes api calls to grab data from news mediums
***/

import axios from 'axios';

const ROOT = 'http://localhost:3090';

// Hacker News
export const hackerNewsArticleId = () => {
  axios.get(`${ROOT}/hackernews/article-id-list`)
    .then(response => {
      const ids = response.data;
      hackerNewsArticleDetails(ids);
    });
}

const hackerNewsArticleDetails = (ids) => {
  axios.post(`${ROOT}/hackernews/feed-hackernews`, { ids })
}

// Hacks Mozilla 
export const hackMozillaFeed = () => {
  axios.get(`${ROOT}/hacksmozilla/feed-hackmozilla`)
}

export const techCrunchFeed = () => {
  return axios.get(`${ROOT}/techcrunch/scrape`)
}


// https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty


// https://hacker-news.firebaseio.com/v0/item/15805076.json?print=pretty