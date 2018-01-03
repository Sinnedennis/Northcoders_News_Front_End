import React from 'react';
import { Link } from 'react-router-dom';

import '../styling/Footer.css';

class Footer extends React.Component {
  render() {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
      <div className="Footer level">
        <p className="level-item"><Link to="https://github.com/Sinnedennis">Github profile</Link></p> 
        <p className="level-item">Made by Dennis Foster </p>
        <p className="level-item">Copyright © {currentYear}</p>
      </div>
    );
  }
}


export default Footer;