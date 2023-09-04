import React from 'react';
import blogData from '../data/blog'; // Import the data and the logo

function About() {
    return (
      <aside>
        <img src={blogData.image} alt="blog logo" />
        <p>{blogData.about}</p>
      </aside>
    );
  }
   export default About;