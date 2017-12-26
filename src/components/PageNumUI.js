import React from 'react';
import PT from 'prop-types';

export default function PageNumUI({ handlePageClick, pageTotal, activePage }) {

  const loopArray = [];

  for (let p = 0; p < pageTotal; p++) {
    loopArray.push(p);
  }

  return (
    <div>
      <p>Page:</p>

      {
        loopArray.map((i) => {
          if (activePage === i) return <button className="button" onClick={handlePageClick} value={i} key={i}>{i + 1}A</button>;
          else return <button value={i} onClick={handlePageClick} key={i}>{i + 1}</button>;
        })
      }
    </div>
  );
}

PageNumUI.propTypes = {
  handlePageClick: PT.func.isRequired,
  pageTotal: PT.number.isRequired,
  activePage: PT.number.isRequired
};