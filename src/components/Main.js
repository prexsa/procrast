import React from 'react';
import axios from 'axios';
import ListItem from './ListItem';

const ROOT = 'http://localhost:3090';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }

    this.getHackernews = this.getHackernews.bind(this);
    this.getHacksmozilla = this.getHacksmozilla.bind(this);
  }

  componentDidMount() {
    let that = this;
    axios.all([this.getHackernews(), this.getHacksmozilla()])
      .then(axios.spread(function (hackernews, hacksmozilla) {
        // console.log('hackernews: ', hackernews)
        //console.log('hacksmozilla: ', hacksmozilla)
        const news = hackernews.data;
        const mozilla = hacksmozilla.data.items;

        let sorted = news.concat(mozilla).sort((a,b) => {
          return a.time - (b.created / 1000);
        });

        // console.log("sorted: ", sorted)
        that.setState({ articles: sorted })

      }))
  }

  getHacksmozilla() {
    return axios.get(`${ROOT}/hacksmozilla`)
  }

  getHackernews() {
    return axios.get(`${ROOT}/articles`)
  }

  render() {
    if(this.state.articles.length !== 0) {
      const articles = this.state.articles;
      // console.log("ARTICLES: ", articles)
      return articles.map(article => {
        // console.log('article: ', article)
        const title = article.title;
        if(article.author !== undefined ) {
          const site = 'Hacker News';
          return <ListItem key={title} items={article} site={site} />
        }
        return <ListItem key={title} items={article} />
      })
    }
    return (
      <div>Main</div>
    )
  }
}

export default Main;

