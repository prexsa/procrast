import React from 'react';
import { Sidebar, Segment, Menu, Image, Header } from 'semantic-ui-react';
import ListItem from './ListItem';
import HackerNews from './HackerNews';
import HacksMozilla from './HacksMozilla';

class SidebarLeft extends React.Component {
  renderSiteList() {
  const sites = ['Hacker News', 'Smashing Magazine', 'Slashdot', 'Medium', 'lifehacker', 'scotch.io'];
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
            { this.renderSiteList() }
          </div>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <HacksMozilla />
            <br />
            <HackerNews />
          </Segment>
        </Sidebar.Pusher>
      </div>
    )
  }
}

export default SidebarLeft;
