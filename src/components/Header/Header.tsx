import React from 'react';
import logo from './GitHub-Mark-Light-64px.png';
import "./Header.css";

const Header = () => (
  <div className='HeaderWrapper'>
    <img className='Logo' src={logo} alt='logo' />
    <h1>My Github Portfolio</h1>
  </div>
);

export default Header;