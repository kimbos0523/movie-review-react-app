import React from 'react';
import ReactSlider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import './Slider.css';

const SliderComponents = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipe: true,
    draggable: true,
    initialSlide: 0,
    prevArrow: <MdArrowBackIos />,
    nextArrow: <MdArrowForwardIos />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return <ReactSlider {...settings}>{children}</ReactSlider>;
};

export default SliderComponents;
