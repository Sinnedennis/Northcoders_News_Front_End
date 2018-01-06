import React from 'react';
import Github from 'react-icons/lib/fa/github';

import '../styling/Footer.css';

class Footer extends React.Component {
  render() {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
      <div className="Footer level">
        <p className="level-item"><Github size="40" /><a href="https://github.com/Sinnedennis">Github profile</a></p> 
        <p className="level-item">Made by Dennis Foster </p>
        <p className="level-item">Copyright © {currentYear}</p>
      </div>
    );
  }
}


export default Footer;