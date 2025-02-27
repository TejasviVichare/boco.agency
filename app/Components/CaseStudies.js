'use client'
import React from 'react'
import Image from 'next/image';
import Heading from './Heading';
import Button from './Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const CaseStudies = () => {

 const images = [
    '/assets/CaseStudies1.png',
    '/assets/CaseStudies2.png'
 ]
 const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
 }
  return (
    <>
    <div className='w-full md:px-32 md:pt-14 justify-center text-center'>
       

        {/* Desktop View */}
        <div className='hidden  md:flex flex-row   gap-14 pt-5 justify-center'>
            {images.map((image, id) =>(
             <div key={id}>
                <Image src={image} alt="Image" width={500} height={500} />
             </div>
            ))
            }
        </div>
   
     {/* Mobile View */}
    <div className='md:hidden   gap-14 pt-14 justify-center mx-4'>
        <Slider {...settings}>
            {images.map((image, id)=>(
                <div key={id}>
                    <Image src={image} alt="Image" width={400} height={450} 
                       className="w-full" />
                </div>
            ))

            }
        </Slider>
    </div>

    </div>


    <center>
    <div className='w-80 mt-20 text-center'>
        <Button text="View Case Studies" />
    </div>
    </center>
    </>
  )
}

export default CaseStudies