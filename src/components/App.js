import React from 'react';
import Sidebar from './Sidebar';
import { hackerNewsArticleId, hackMozillaFeed, techCrunchFeed } from '../util/apiCalls';

export default class App extends React.Component {
  componentDidMount() {
    // make all api calls from here
    //hackerNewsArticleId();
    //hackMozillaFeed();
    techCrunchFeed();
  }

  render() {
    return (
      <div>
        <h1>Articles!!!!</h1>
        <Sidebar />
      </div>
    );
  }
}
