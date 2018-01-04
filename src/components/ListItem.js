import React from 'react';
import moment from 'moment';
import { List } from 'semantic-ui-react'
// https://www.webpagefx.com/blog/web-design/beautiful-blog-designs/

const ListItem = ({ items }) => {
  //console.log('items: ', items)
  const author = items.author;
  const score = items.score;
  const title = items.title;
  const description = items.description;
  const url = items.url;
  const site = items.site;
  let time = items.time;
  time = moment.unix(time).format("ddd, MMM D YYYY");

  return (
    <List.Item className="item-container" href={url} target="_blank">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{site} {time}</p>
    </List.Item>
  )
}


export default ListItem;

