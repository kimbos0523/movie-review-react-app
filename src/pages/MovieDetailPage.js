import React from 'react';
import Header from '../components/Header';
import DetailComponent from '../components/details/Detail.js';

const MovieDetailPage = () => {
  return (
    <div className='relative' style={{ backgroundColor: '#f2f2f2' }}>
      <Header />
      <DetailComponent />
    </div>
  );
};

export default MovieDetailPage;
