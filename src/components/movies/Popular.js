import React from 'react';
import { usePopularMovie } from '../../hooks';
import SliderComponents from '../Slider.js';
import CardComponent from '../Card.js';

const PopularMovieComponent = () => {
  const { data: popularMovieResponse, isLoading } = usePopularMovie();

  const getYear = (release_date) => release_date.split('-')[0] || '';

  return (
    <div className='mb-5'>
      <h2 className='ms-2 mb-1 text-xl font-bold'>Popular Movies</h2>
      {isLoading ? (
        <div>Need time to Load...</div>
      ) : (
        <div>
          <SliderComponents>
            {popularMovieResponse?.data?.results.map((movie) => (
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

export default PopularMovieComponent;
