'use client';
import React from 'react';
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";

// const images = [
//   '/assets/BrandsCounting/1.png',
//   '/assets/BrandsCounting/2.png',
//   '/assets/BrandsCounting/3.png',
//   '/assets/BrandsCounting/4.png',
//   '/assets/BrandsCounting/5.png',
//   '/assets/BrandsCounting/6.png',
//   '/assets/BrandsCounting/7.png',
//   '/assets/BrandsCounting/8.png',
//   '/assets/BrandsCounting/9.png',
//   '/assets/BrandsCounting/10.png',
//   '/assets/BrandsCounting/11.png',
//   '/assets/BrandsCounting/12.png'
// ];

const BrandsCounting = () => {

  const [logos, setLogos] = useState([]);

  useEffect(() => {
    async function fetchLogos() {
      try {
        const res = await fetch("http://localhost:1337/api/brands-sliders?populate=*");
        const data = await res.json();

        if (data.data) {
          setLogos(
            data.data.flatMap((item) =>
              item.logos?.map((logo) => ({
                id: logo.id,
                url: `http://localhost:1337${logo.url}`,
              })) || []
            )
          );
        }
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    }

    fetchLogos();
  }, []);

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
        {/* {images.map((src, id) => (
          <div key={id} className="flex justify-center items-center">
            <Image 
              src={src} 
              alt={`Brand ${id + 1}`} 
              width={150} // Adjust based on your layout
              height={100} // Adjust based on your layout
              objectFit="contain"
            />
          </div>
        ))} */}

      {logos.length > 0 ? (
          logos.map((logo) => (
            <div key={logo.id} className="flex justify-center items-center">
            <img  src={logo.url} alt="Brand Logo" className="object-contain" width={150} height={100}/>
            </div>
          ))
        ) : (
          <p>Loading logos or no logos found...</p>
        )}

      </Slider>
    </div>
  );
};

export default BrandsCounting;
