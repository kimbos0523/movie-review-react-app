import React from 'react';
import { useUpcomingMovie } from '../../hooks';
import SliderComponents from '../Slider.js';
import CardComponent from '../Card.js';

const UpcomingMovieComponent = () => {
  const { data: upcomingMovieResponse, isLoading } = useUpcomingMovie();

  const getYear = (release_date) => release_date.split('-')[0] || '';

  return (
    <div className='mb-5'>
      <h2 className='ms-2 mb-1 text-xl font-bold'>Upcoming Movies</h2>
      {isLoading ? (
        <div>Need time to Load...</div>
      ) : (
        <div>
          <SliderComponents>
            {upcomingMovieResponse?.data?.results.map((movie) => (
              <CardComponent
                key={movie.id}
                url={`/movie/${movie.id}`}
                title={movie.title}
                poster={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                rate={movie.vote_average}
                year={getYear(movie.release_date)}
              />
            ))}
          </SliderComponents>
        </div>
      )}
    </div>
  );
};

export default UpcomingMovieComponent;
