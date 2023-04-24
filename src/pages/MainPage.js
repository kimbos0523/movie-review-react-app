import React from 'react';
import Header from '../components/Header.js';
import UpcomingMovieComponent from '../components/movies/Upcoming.js';
import PopularMovieComponent from '../components/movies/Popular.js';
import TopRateMovieComponent from '../components/movies/TopRate.js';

const MainPage = () => {
  return (
    <>
      <Header />
      <main className='mx-auto my-0' style={{ maxWidth: 1280 }}>
        <div className='py-6 px-0 mt-16'>
          <UpcomingMovieComponent />
          <TopRateMovieComponent />
          <PopularMovieComponent />
        </div>
      </main>
    </>
  );
};

export default MainPage;
