import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from 'react-icons/lib/fa/home';
const logo = require('./logo.png');

export default function NavbarUI({ topics }) {

  return (
    <div className="Navbar">

      <div className="Logo">
        <img className="LogoImg" src={logo} />
      </div>

      <Link to="/">
        <div className="Home">
          <HomeIcon className="HomeIcon" size={70} color="red" />
        </div>
      </Link>

      <div className="TopicList">
        {topics.map(topic =>
          <Link to={`/topic/${topic.slug}/${topic._id}`} key={topic._id}>
            <button className="button" value={topic.slug}>{topic.title}</button>
          </Link>
        )}
      </div>
      
    </div>
  );
}