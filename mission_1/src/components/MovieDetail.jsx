import React from 'react';

const MovieDetail = ({ title, overview }) => {
  return (
    <div className="detail">
      <div className='detailTitle'>{title}</div>
      <div className='detailContent'>
        {overview.length > 50 ? `${overview.substring(0, 50)}...` : overview}
      </div>
    </div>
  );
};

export default MovieDetail;