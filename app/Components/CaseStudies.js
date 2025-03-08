'use client'
import React, { useEffect, useState } from 'react';
import Button from './Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CaseStudies = () => {
  const [images, setImages] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/case-studies?populate=*');
        const data = await response.json();

        console.log('API Response:', data); // Debugging: Check API response structure

        if (data?.data) {
          // Extract images from each case study
          const imageUrls = data.data.flatMap(item => 
            item?.images?.map(img => `http://localhost:1337${img?.url}`) || []
          );

          setImages(imageUrls);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    
    fetchImages();
  }, []);

  return (
    <>
      <div className='w-full md:px-32 md:pt-14 justify-center text-center'>
        {/* Desktop View */}
        <div className='hidden md:flex flex-row gap-14 pt-5 justify-center'>
          {images.length > 0 ? (
            images.map((image, id) => (
              <div key={id}>
                <img src={image} alt={`Case Study ${id + 1}`} width={500} height={500} />
              </div>
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>

        {/* Mobile View */}
        <div className='md:hidden gap-14 pt-14 justify-center mx-4'>
          {images.length > 0 ? (
            <Slider {...settings}>
              {images.map((image, id) => (
                <div key={id}>
                  <img src={image} alt={`Case Study ${id + 1}`} width={400} height={450} className='w-full' />
                </div>
              ))}
            </Slider>
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </div>

      <center>
        <div className='w-80 mt-20 text-center'>
          <Button text='View Case Studies' />
        </div>
      </center>
    </>
  );
};

export default CaseStudies;
