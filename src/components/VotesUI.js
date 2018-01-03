import React from 'react';
import PT from 'prop-types';

import '../styling/Votes.css';

export default function VotesUI({ clickHandler, votes }) {

  return (
    <div>
      <div class="buttons has-addons is-centered">
        <button className="VoteButtons button" value="up" onClick={clickHandler}>Upvote</button>
        <button className="VoteButtons button" value="down" onClick={clickHandler}>Downvote</button>
      </div>
      <p>{votes}</p>
    </div>
  );
}

VotesUI.propTypes = {
  clickHandler: PT.func.isRequired,
  votes: PT.number.isRequired
};