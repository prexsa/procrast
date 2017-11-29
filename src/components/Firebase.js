import React from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react';
import ListItem from './ListItem';
//import { fetchGet } from '../../util/fetchHelper';
// story uri: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
// top stories uri: https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

const ROOT = 'http://localhost:3090';

class FirebaseAccess extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      articles: [],
    }
  }

  componentDidMount() {
    //const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    /*axios.get(`${ROOT}/hackernews`)
      .then(response => {
        console.log('response: ', response)
        this.setState({ ids: response.data });
      })*/

      axios.get(`${ROOT}/articles`)
        .then(response => {
          console.log('RESPONSE: ', response);
          this.setState({ articles: response.data });
        })

  }

  componentDidUpdate(nextProps, nextState) {
    /*console.log('nextProps: ', nextProps)
    console.log('nextState: ', nextState)
    console.log('this.state: ', this.state);*/
    if(this.state.ids.length !== 0 ) {
      const ids = this.state.ids;
      axios.post(`${ROOT}/insert`, { ids })
        .then(response => {
          console.log('response: ', response)
        })
    }
  }

  render() {
    // console.log('this.state: ', this.state);
    if(this.state.articles.length !== 0) {
      const articles = this.state.articles;
      return articles.map(article => {
        // const details = articles[i];
        const id = article.id;
        
        return (
          <div key={id}>
            <ListItem items={article} />
          </div>
        )
      })
    }

    return (
      <div>
      FirebaseAccess
      </div>
    )
  }
}

export default FirebaseAccess;
