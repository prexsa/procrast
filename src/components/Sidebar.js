import React from 'react';
import { Sidebar, Segment, Menu, Image, Header } from 'semantic-ui-react';
import ListItem from './ListItem';
import HackerNews from './HackerNews';
import HacksMozilla from './HacksMozilla';
import Main from './Main';
import TechCrunch from './TechCrunch';

class SidebarLeft extends React.Component {
  softWareList() {
    const sites = [
      'Hacker News -', 
      'Smashing Magazine', 
      'Tech Crunch -', 
      'Slashdot', 
      'Medium', 
      'Life Hacker', 
      'scotch.io', 
      'Hacks Mozilla -', 
      'CSS-Tricks'];
    return sites.map(name => {
      return (
        <Menu.Item key={name}>{name}</Menu.Item>
        )
      })
  }

  hardWareList() {
    const sites = ['Engadget', 'AnandTech']
    return sites.map(name => {
      return (
        <Menu.Item key={name}>{name}</Menu.Item>
      )
    })
  }
  
  render() {
    return (
      <div>
        <Sidebar as={Menu} borderless={true} className="left-sidebar" width='wide' visible={true} vertical inverted>
          <div className="site-list">
            <h4>Software</h4>
            { this.softWareList() }
            <h4>Hardware</h4>
            { this.hardWareList() }
          </div>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Main />
          </Segment>
        </Sidebar.Pusher>
      </div>
    )
  }
}

export default SidebarLeft;
