import React from 'react';
import PT from 'prop-types';

export default function PageNumUI({ handlePageClick, pageTotal, activePage }) {

  const loopArray = [];

  for (let p = 0; p < pageTotal; p++) {
    loopArray.push(p);
  }

  return (
    <div className="PageNumbers">
      <p><strong className="has-text-grey-lighter">Page:</strong></p>
      <div className="buttons has-addons is-centered">
        {
          loopArray.map((i) => {
            if (activePage === i) return <button className="button is-focused" onClick={handlePageClick} value={i} key={i}>{i + 1}</button>;
            else return <button className="button" value={i} onClick={handlePageClick} key={i}>{i + 1}</button>;
          })
        }
      </div>
    </div>
  );
}

PageNumUI.propTypes = {
  handlePageClick: PT.func.isRequired,
  pageTotal: PT.number.isRequired,
  activePage: PT.number.isRequired
};