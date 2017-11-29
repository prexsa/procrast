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
        this.setState({ articles: response.data.items })
      })
  }

  render() {
    if(this.state.articles.length !== 0) {
      console.log('this.state: ', this.state.articles)
      const articles = this.state.articles;

      return articles.map(article => {
        let time = article.created / 1000;
        // console.log("TIME ", time)
        time = moment.unix(time).format("ddd, MMM D YYYY");
        const title = article.title;
        const url = article.url;
        const description = article.description;

        return (
          <a key={title} className="item-container" href={url} target="_blank">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{time}</p>
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


/*return (
    <a className="item-container" href={url} target="_blank">
      <h2>{title}</h2>
      <p>{site} by <span>{author}</span> {time}</p>
    </a>
  )*/