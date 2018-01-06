import React from 'react';
import PT from 'prop-types';

import UpArrow from 'react-icons/lib/fa/angle-up';
import DownArrow from 'react-icons/lib/fa/angle-down';

import '../styling/Votes.css';

export default function VotesUI({ clickHandler, votes }) {

  return (

    <div className="">
      <UpArrow className="UpArrow" size={50} color="dark" onClick={(e) => clickHandler(e, 'up')} />
      <p className="VoteNumber is-large">{votes}</p>
      <DownArrow className="DownArrow" size={50} color="dark" onClick={(e) => clickHandler(e, 'down')} />

    </div>
  );
}

VotesUI.propTypes = {
  clickHandler: PT.func.isRequired,
  votes: PT.number.isRequired
};