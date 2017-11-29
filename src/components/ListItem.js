import React from 'react';
import moment from 'moment';
// https://www.webpagefx.com/blog/web-design/beautiful-blog-designs/

const ListItem = ({ items, site }) => {
  // console.log('items: ', items)
  const author = items.author;
  const score = items.score;
  const title = items.title;
  const url = items.url;
  let time = items.time;
  time = moment.unix(time).format("ddd, MMM D YYYY");

  return (
    <a className="item-container" href={url} target="_blank">
      <h2>{title}</h2>
      <p>{site} by <span>{author}</span> {time}</p>
    </a>
  )
}


export default ListItem;
