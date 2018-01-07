import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

import MehFace from 'react-icons/lib/fa/meh-o';

import '../styling/Error.css';

export default function Error({ error }) {

 return (
    <div className="ErrorContainer">
      <h3 className="subtitle">Oh no, it looks like something went wrong!</h3>
      {error && <p>{error}</p>}
      <p><MehFace className="MehFace" size="80" /></p>
      <Link to="/">Click here to go home</Link>
    </div>
  );
}


Error.propTypes = {
  error: PT.string
};