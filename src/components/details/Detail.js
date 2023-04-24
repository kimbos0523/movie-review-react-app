import React, { useEffect } from 'react';
import PostComponent from './Post.js';
import PostContentComponent from './Content.js';
import { useDispatch, useSelector } from 'react-redux';
import { findCommentsThunk } from '../../services/comments-thunks.js';
import CommentItem from './CommentItem.js';
import CommentBox from './CommentBox.js';

const DetailComponent = () => {
  const { comments, loading } = useSelector((state) => state.commentsData);
  const { currentUser } = useSelector((state) => state.authData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findCommentsThunk());
  }, []);
  return (
    <div className='bg-white border-b-2 pb-10'>
      <PostComponent />
      <PostContentComponent />
      {}
      <div className='detail-reviews'>
        <h1 className='detail-reviews-title text-center text-3xl mb-2 font-bold tracking-wide text-blue-500'>
          Reviews
        </h1>
        <ul className='mt-2 mx-auto'>
          {loading && <li className='list-group-item'>Loading...</li>}
          {comments.map((comment) => (
            <CommentItem
              key={comments._id}
              commenter={comment.commenter}
              comment={comment.comment}
              createdAt={comment.createdAt}
            />
          ))}
        </ul>
      </div>
      <CommentBox />
    </div>
  );
};

export default DetailComponent;
