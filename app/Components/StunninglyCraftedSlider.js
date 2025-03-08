"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";


const StunninglyCraftedSlider = () => {

  const [images, setImages] = useState([]);
  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("http://localhost:1337/api/imagesliders?populate=*");
        const data = await res.json();

        if (data.data) {
          setImages(
            data.data.flatMap((item) =>
              item.image?.map((img) => ({
                id: img.id,
                url: `http://localhost:1337${img.url}`,
              })) || []
            )
          );
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchImages();
  }, []);

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
         {images.length > 0 ? (
          images.map((img) => (
            <div key={img.id} className="image-slide">
             <img  src={img.url} alt="Slider" className="slider-img" />
            </div>
          ))
        ) : (
          <p>Loading images or no images found...</p>
        )}
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