"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images =[
    '/assets/StunninglyCrafted/1.png',
    '/assets/StunninglyCrafted/2.png',
    '/assets/StunninglyCrafted/3.png',
    '/assets/StunninglyCrafted/4.png',
    '/assets/StunninglyCrafted/5.png',
    '/assets/StunninglyCrafted/6.png',
    '/assets/StunninglyCrafted/7.png',
    '/assets/StunninglyCrafted/8.png',
]

const StunninglyCraftedSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
    


  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="image-slide">
            <img src={src} alt={`Slide ${index}`} className="slider-img" />
          </div>
        ))}
      </Slider>
    </div>
  )
}
const NextArrow = ({ onClick }) => {
    return (
      <button className="arrow next" onClick={onClick}>
        &#8594;
      </button>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <button className="arrow prev " onClick={onClick}>
        &#8592;
      </button>
    );
  };
export default StunninglyCraftedSlider