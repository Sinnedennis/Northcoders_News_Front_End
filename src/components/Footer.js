import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
      <div className="Footer">
        <p>I made this: <Link to="https://github.com/Sinnedennis">Github profile</Link>. Copyright {currentYear} ©</p>
      </div>
    );
  }
}


export default Footer;