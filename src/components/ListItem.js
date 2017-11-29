import React from 'react';
// https://www.webpagefx.com/blog/web-design/beautiful-blog-designs/
/*class ListItem extends React.Component {
  render() {
    return (
      <div className="item-container">
        <h2>TOP OF THE GAME</h2>
        <p>Posted by <span className="colordf4747">Preksa Mam</span></p>
        <p className="content">
          Devote every single minute of everyday in the pursit of pure excellence as
          a developer and engineer, and while in that pursit, you will elevate yourself
          into a stronger state of mind that will be indestrutible. This happens when you 
          decide to centralize your focus. 
        </p>
      </div>
    )
  }
}*/

const ListItem = ({ items }) => {
  // console.log('items: ', items)
  const author = items.author;
  const score = items.score;
  const title = items.title;
  const url = items.url;

  return (
    <div className="item-container">
      <h2>{title}</h2>
      <p>Posted by <span className="colordf4747">{author}</span></p>

    </div>
  )
}


export default ListItem;
/*
<p className="content">
  Devote every single minute of everyday in the pursit of pure excellence as
  a developer and engineer, and while in that pursit, you will elevate yourself
  into a stronger state of mind that will be indestrutible. This happens when you 
  decide to centralize your focus. 
</p>
*/