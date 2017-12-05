import React from 'react';
import axios from 'axios';
import moment from 'moment';
const ROOT = 'http://localhost:3090';

class HacksMozilla extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    axios.get(`${ROOT}/hacksmozilla`)
      .then(response => {
        //console.log('REPONSE: ', response.data.items)
        this.setState({ articles: response.data })
      })
  }

  render() {
    // console.log('this.state: ', this.state.articles)
    if(this.state.articles.length !== 0) {
      //console.log('hacksmozilla: ', this.state.articles)
      const articles = this.state.articles;

      return articles.map(article => {
        const time = moment.unix(article.time).format("ddd, MMM D YYYY");
        const title = article.title;
        const url = article.url;
        const description = article.description;

        return (
          <a key={title} className="item-container" href={url} target="_blank">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Hacks Mozilla {time}</p>
          </a>
        )
      })
    }

    return (
      <div>
        HacksMozilla
      </div>
    )
  }
}

export default HacksMozilla;
