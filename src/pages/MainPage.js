import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findCommentsThunk } from '../services/comments-thunks.js';
import Header from '../components/Header.js';
import UpcomingMovieComponent from '../components/movies/Upcoming.js';
import PopularMovieComponent from '../components/movies/Popular.js';
import TopRateMovieComponent from '../components/movies/TopRate.js';
import CommentItem from '../components/details/CommentItem.js';

const MainPage = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const { comments, loading } = useSelector((state) => state.commentsData);
  const dispatch = useDispatch();
  const profileComments = comments
    .filter((comment) => comment.commenter._id === currentUser?._id)
    .reverse()
    .slice(0, 3);

  useEffect(() => {
    dispatch(findCommentsThunk());
  }, []);

  return (
    <>
      <Header />
      <main className='mx-auto my-0' style={{ maxWidth: 1280 }}>
        <div className='py-6 px-0 mt-16'>
          <UpcomingMovieComponent />
          <TopRateMovieComponent />
          <PopularMovieComponent />
          {profileComments && (
            <>
              <h1 className='font-bold text-center text-3xl mb-3'>
                Your 3 Recent Comments
              </h1>
              <ul className='mt-2 w-9/12 mx-auto'>
                {loading && <li className='list-group-item'>Loading...</li>}
                {profileComments.map((comment) => (
                  <CommentItem
                    key={comments._id}
                    commenter={comment.commenter}
                    movie={comment.movie}
                    comment={comment.comment}
                    createdAt={comment.createdAt}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default MainPage;
