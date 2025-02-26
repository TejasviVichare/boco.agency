'use client';
import React from 'react';
import Slider from "react-slick";
import Image from "next/image";

const images = [
  '/assets/BrandsCounting/1.png',
  '/assets/BrandsCounting/2.png',
  '/assets/BrandsCounting/3.png',
  '/assets/BrandsCounting/4.png',
  '/assets/BrandsCounting/5.png',
  '/assets/BrandsCounting/6.png',
  '/assets/BrandsCounting/7.png',
  '/assets/BrandsCounting/8.png',
  '/assets/BrandsCounting/9.png',
  '/assets/BrandsCounting/10.png',
  '/assets/BrandsCounting/11.png',
  '/assets/BrandsCounting/12.png'
];

const BrandsCounting = () => {
  const settings = {
    infinite: true,
    speed: 2000, // Smooth auto-scroll
    slidesToShow: 5, // Default desktop view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Works with `cssEase: "linear"`
    cssEase: "linear", // Smooth transition
    arrows: false, // Hide prev/next buttons
    pauseOnHover: false, // Keep moving even on hover
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="w-full overflow-hidden  my-10 pt-5">
      <Slider {...settings}>
        {images.map((src, id) => (
          <div key={id} className="flex justify-center items-center">
            <Image 
              src={src} 
              alt={`Brand ${id + 1}`} 
              width={150} // Adjust based on your layout
              height={100} // Adjust based on your layout
              objectFit="contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsCounting;
