import React from 'react';
import blogData from '../data/blog'; // Import the data and the logo

function Article({ title, date, preview }) {
    // Default date if none is provided
    const defaultDate = "January 1, 1970";
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{date || defaultDate}</small>
        <p>{preview}</p>
      </article>
    );
  }
  export default Article;
