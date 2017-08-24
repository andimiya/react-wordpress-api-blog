import React from 'react';
import { Link } from 'react-router-dom';
const logo = require('../assets/sudokrew-logo.png');

const Footer = () => {
  return(
    <footer className="site-footer">
      <div className="footer">
        <div className="container">
          <a className="footer__logo" href="https://sudokrew.com">
            <img src={logo} alt="Sudokrew Logo" height="60px" />
          </a>
          <p className="footer__copyright">
            Sudokrew 2017
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
