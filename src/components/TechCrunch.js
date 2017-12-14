import React from 'react';
import axios from 'axios';
import { techCrunchFeed } from '../util/apiCalls';

class TechCrunch extends React.Component {
  componentDidMount() {
    techCrunchFeed().then(response => {
      //console.log("TechCrunch: ", response.data.items)
    })
  }

  render() {
    return (
      <div>TechCrunch</div>
    )
  }
}

export default TechCrunch;