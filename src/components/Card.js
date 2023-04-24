import React from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';
import './Card.css';

const CardComponent = ({ url, title, year, poster, rate }) => {
  const path = url.replace('movie', 'details');

  return (
    <Link to={path} className='no-underline block ms-2 me-2'>
      <div className='flex flex-col w-full h-full'>
        <div className='w-full h-72'>
          <img
            src={poster}
            alt={`${title} poster`}
            className='w-full h-full object-cover rounded'
          />
        </div>
        <div className='text-left w-full'>
          <h4 className='card-title'>{title}</h4>
          <div className='card-year'>{year}</div>
          <div className='card-rate'>
            <span>Average Rate &nbsp;</span>
            <span>
              <BsStarFill />
            </span>
            <span>&nbsp;{rate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardComponent;
