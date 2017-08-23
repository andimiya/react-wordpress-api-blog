import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return(
    <header className="header" role="banner">
        <div className="container">
          <a className="header__logo" href="https://sudokrew.com">
            <img className="sudokrew-logo-img" src="/assets/sudokrew-logo.png" alt="Sudokrew Logo" />
          </a>
        <div className="navigation">
          <a className="navigation__link" href="https://sudokrew.com/about">About Us</a>
          <a className="navigation__link" href="https://sudokrew.com/work">Our Work</a>
          <a className="navigation__link" href="https://sudokrew.com/team">Team</a>
          <a className="navigation__link" href="http://blog.sudokrew.com">Blog</a>
          <a className="navigation__link" href="https://sudokrew.com/contact">Contact</a>
        </div>
        </div>
    </header>
  )
}

export default TopNav;
