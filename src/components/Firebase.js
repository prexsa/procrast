import React from 'react';
import axios from 'axios';
import ListItem from './ListItem';
import { List } from 'semantic-ui-react';
//import { fetchGet } from '../../util/fetchHelper';
// story uri: https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
// top stories uri: https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty

class FirebaseAccess extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      articles: [],
    }
  }

  componentDidMount() {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    const ROOT = 'http://localhost:3090';

    axios.get(`${ROOT}/hackernews`)
      .then(response => {
        console.log('response: ', response)
        this.setState({ ids: response.data });
      })
  }

  componentDidUpdate() {
    // console.log('this.state: ', this.state)
    const ids = this.state.ids;

    for(let i = 0; i < 20 ; i++) {
      const storyUrl = `https://hacker-news.firebaseio.com/v0/item/${ids[i]}.json?print=pretty`;

      axios.get(storyUrl)
        .then(response => {
          console.log("respon: ", response.data.title)
          const title = response.data.title;
          // this.setState({ articles: title });
        })
    }

  }

  render() {
    console.log('this.state: ', this.state);
    
    return (
      <div>
      FirebaseAccess
      </div>
    )
  }
}

export default FirebaseAccess;
