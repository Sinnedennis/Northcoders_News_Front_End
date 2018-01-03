import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

export default function Error({ error }) {

  return (
    <div>
      <p>Oh no, it looks like something went wrong!</p>
      {error ? <p>{error}</p> : null}
      <Link to="/">Click here to go home</Link>
    </div>

  );
}


Error.propTypes = {
  error: PT.object
};