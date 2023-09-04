import React from 'react';
import blogData from '../data/blog'; // Import the data and the logo
// Header component
function Header() {
    return (
      <header>
        <h1>{blogData.name}</h1>
      </header>
    );
  }
  export default Header;