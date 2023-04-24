import React from 'react';
import { useParams } from 'react-router-dom';
import { useDetail } from '../../hooks';
import './Content.css';

const PostContentComponent = () => {
  const { id } = useParams();
  const { isLoading, data } = useDetail(id ?? '');
  return isLoading || !data ? (
    <div>Need time to Load...</div>
  ) : (
    <main className='text-center'>
      <div className='relative my-0 mx-auto max-w-4xl'>
        {/* Poster */}
        <div className='border-b-2 pb-10'>
          <div className='post-container absolute w-40 h-56 border left-0 rounded bg-white'>
            <img
              className='w-full h-full object-cover'
              src={`https://image.tmdb.org/t/p/w300/${data.data.poster_path}`}
              alt={data.data.title}
            />
          </div>
          {/* Info */}
          <div className='my-0 ms-48 text-left'>
            <h1 className='text-4xl font-bold'>{data.data.title}</h1>
            <div className='text-xl font-normal mt-1 text-grey'>
              {`${data.data.release_date}  ${data.data.genres
                .map((g) => g.name)
                .join(' / ')}`}
            </div>
            <div className=''>{`Average Rate ${data.data.vote_average}`}</div>
            <div className='flex mt-2 h-14 text-center'>
              <div className='w-60 h-14 m-0 text-cneter'>
                <div className='text-sm text-grey'></div>
                <div className=''>
                  <div className=''></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Overview */}
        <div className='my-3 pb-5 border-b-2'>
          <h1 className='text-3xl mb-2 font-bold tracking-wide text-blue-500'>
            Overview
          </h1>
          <div className=''>{data.data.overview}</div>
        </div>
      </div>
    </main>
  );
};

export default PostContentComponent;
