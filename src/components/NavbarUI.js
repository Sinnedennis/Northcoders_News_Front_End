import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import Loading from './Loading';
import Error from './Error';

import HomeIcon from 'react-icons/lib/fa/home';
import logo from './logo.png';
import '../styling/NavbarUI.css';

export default function NavbarUI({ topics, error, loading }) {

  return (
    <div className="NavbarBackground">
      <div className="NavbarContainer">
        <div className="columns is-gapless level">
          <div className="column is-two-fifths level-item">
            <img className="LogoImg is-pulled-left" src={logo} alt='logo' />
          </div>

          <Link to="/">
            <div className="Home column level-item">
              <HomeIcon className="HomeIcon" size={70} color="red" />
            </div>
          </Link>

          <div className='column is-two-fifths level-item'>
            {
              error ? <Error error={error} />
                : loading ? <Loading />
                  : topicDivs(topics)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function topicDivs(topics) {
  return (
    <div className="buttons is-right">
      {
        topics.map(topic =>
          <Link to={`/topic/${topic.slug}/${topic._id}`} key={topic._id}>
            <span className="button is-dark" value={topic.slug}>{topic.title}</span>
          </Link>
        )
      }
    </div>
  );
}

NavbarUI.propTypes = {
  topics: PT.array.isRequired,
  error: PT.object,
  loading: PT.bool
};