import React from 'react';
import { useParams } from 'react-router-dom';
import { useDetail } from '../../hooks';
import './Post.css';

const PostComponent = () => {
  const { id } = useParams();
  const { isLoading, data } = useDetail(id ?? '');
  return isLoading || !data ? (
    <div>Need time to Load...</div>
  ) : (
    <div className='w-full h-full'>
      <div className='post-background flex w-full h-96 overflow-hidden'>
        <img
          src={`https://image.tmdb.org/t/p/w300/${data.data.backdrop_path}`}
          className='post-background-image'
          alt={`${data.data.title} background`}
        ></img>
      </div>
    </div>
  );
};

export default PostComponent;
