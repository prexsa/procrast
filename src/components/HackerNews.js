import React from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react';
import ListItem from './ListItem';
import { hackerNewsArticleId } from '../util/apiCalls';
// story uri: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
// top stories uri: https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

const ROOT = 'http://localhost:3090';

class HackerNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      articles: [],
    }
  }

  componentDidMount() {
    hackerNewsArticleId();
    axios.get(`${ROOT}/hackernews`)
      .then(response => {
        // console.log('RESPONSE: ', response);
        this.setState({ articles: response.data });
      })
  }

  render() {
    // console.log('hackernews: ', this.state.articles);
    if(this.state.articles.length !== 0) {
      const articles = this.state.articles;

      return articles.map(article => {
        const id = article.id;
        
        return (
          <ListItem key={id} items={article} site={'Hacker News'} />
        )
      })
    }

    return (
      <div>
      HackerNews
      </div>
    )
  }
}

export default HackerNews;
