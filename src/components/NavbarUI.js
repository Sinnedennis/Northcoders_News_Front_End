import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import Loading from './Loading';
import Error from './Error';

import HomeIcon from 'react-icons/lib/fa/home';
import logo from './logo.png';

export default function NavbarUI({ topics, error, loading }) {

  return (
    <div className="Navbar">

      <div className="Logo">
        <img className="LogoImg" src={logo} alt='logo'/>
      </div>

      <Link to="/">
        <div className="Home">
          <HomeIcon className="HomeIcon" size={70} color="red" />
        </div>
      </Link>

      {
        error ? <Error error={error} />
          : loading ? <Loading />
            : topicDivs(topics)
      }

    </div>
  );
}

function topicDivs(topics) {
  return (
    <div className="TopicList">
      {topics.map(topic =>
        <Link to={`/topic/${topic.slug}/${topic._id}`} key={topic._id}>
          <button className="button" value={topic.slug}>{topic.title}</button>
        </Link>
      )}
    </div>
  );
}

NavbarUI.propTypes = {
  topics: PT.array.isRequired,
  error: PT.object,
  loading: PT.bool
};