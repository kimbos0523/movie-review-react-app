import React, { useEffect } from 'react';
import PostComponent from './Post.js';
import PostContentComponent from './Content.js';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { findCommentsThunk } from '../../services/comments-thunks.js';
import CommentItem from './CommentItem.js';
import CommentBox from './CommentBox.js';

const DetailComponent = () => {
  const { comments, loading } = useSelector((state) => state.commentsData);
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(findCommentsThunk());
  }, []);

  return (
    <div className='bg-white border-b-2 pb-10'>
      <PostComponent />
      <PostContentComponent />
      <div className='detail-reviews'>
        <h1 className='detail-reviews-title text-center text-3xl mb-2 font-bold tracking-wide text-blue-500'>
          Reviews
        </h1>
        <ul className='mt-2 w-9/12 mx-auto'>
          {loading && <li className='list-group-item'>Loading...</li>}
          {comments
            .filter((comment) => comment.movie === id)
            .map((comment) => (
              <CommentItem
                key={comments._id}
                commenter={comment.commenter}
                movie={id}
                comment={comment.comment}
                createdAt={comment.createdAt}
              />
            ))}
        </ul>
      </div>
      {currentUser && <CommentBox currentUser={currentUser.username} />}
    </div>
  );
};

export default DetailComponent;
