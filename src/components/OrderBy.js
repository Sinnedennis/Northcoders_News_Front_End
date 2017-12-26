import React from 'react';
import PT from 'prop-types';

export default function OrderBy({ handleClick }) {
  return (
    <div>
      <p>Order by:</p>
      <div className="select">
        <select onChange={handleClick}>
          <option value="high">Most popular</option>
          <option value="low">Least popular</option>
        </select>
      </div>
    </div>
  );
}

OrderBy.propTypes = {
  handleClick: PT.func.isRequired
};
