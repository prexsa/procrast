import React from 'react';
import moment from 'moment';
// https://www.webpagefx.com/blog/web-design/beautiful-blog-designs/

const ListItem = ({ items, site }) => {
  if(site === 'Hacker News') {
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
  } else {
    let time = items.created / 1000;
    // console.log("TIME ", time)
    time = moment.unix(time).format("ddd, MMM D YYYY");
    const title = items.title;
    const url = items.url;
    const description = items.description;

    return (
      <a key={title} className="item-container" href={url} target="_blank">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Hacks Mozilla {time}</p>
      </a>
    )
  }
}


export default ListItem;

