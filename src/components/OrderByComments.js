import React from 'react';
import PT from 'prop-types';

export default function OrderByComments({ handleClick }) {
  return (
    <div>
      <p>Order by:</p>
      <div className="select">
        <select onChange={handleClick}>
          <option value="high">Most popular</option>
          <option value="low">Least popular</option>
          <option value="new">Newest</option>
          <option value="old">Oldest</option>
        </select>
      </div>
    </div>
  );
}

OrderByComments.propTypes = {
  handleClick: PT.func.isRequired
};