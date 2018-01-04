import React from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react';
import ListItem from './ListItem';

const ROOT = 'http://localhost:3090';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    }
    
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    let that = this;
    this.getArticles()
      .then(response => {
        this.setState({ articles: response.data })
      })
  }

  getArticles() {
    return axios.get(`${ROOT}/articles`)
  }

  render() {
    // console.log('state: ', this.state.articles)
    if(this.state.articles.length !== 0) {
      const articles = this.state.articles;
      return (
        <List selection>
          {
            articles.map((article, i) => {
              return <ListItem key={i} items={article} />
            })
          }
        </List>
      )
    }
    return (
      <div>Main</div>
    )
  }
}

export default Main;

