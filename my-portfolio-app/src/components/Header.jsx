import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <h1>Developer Name</h1>
      <Navigation />
    </header>
  );
}

export default Header;