import React from 'react';
import PT from 'prop-types';

export default function VotesUI({ clickHandler, votes }) {

  return (
    <div>
      <button className="button" value="up" onClick={clickHandler}>Upvote</button>
      <button className="button" value="down" onClick={clickHandler}>Downvote</button>
      <p>{votes}</p>
    </div>
  );
}

VotesUI.propTypes = {
  clickHandler: PT.func.isRequired,
  votes: PT.number.isRequired
};