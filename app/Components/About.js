import React from 'react'
import Image from 'next/image'
import Elevate from '../../public/assets/elevate-everyday.png'
import ElevateMobile from '../../public/assets/elevate-everyday-mobile.png'

import Heading from './Heading'
import Button from './Button'
import Talktous from './Talktous'

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start justify-start h-full">
      
      {/* Left Section (Content) */}
      <div className="md:pl-20 px-2 flex flex-col items-start justify-start h-full self-start md:pt-36">
        <Heading heading="We build high-converting Shopify stores that drive Profit" />
        
        <p className="pt-2 font-medium purple text-lg md:text-xl">
          We&apos;re a leading Shopify & Shopify Plus agency who design and develop 
          strategic ecommerce websites
        </p>

        <ul className="pt-5 font-semibold purple text-lg md:text-xl pl-2 md:pl-4 ">
          <li><span className="text-purple-400 pr-2">&#10003;</span> Unmatched Speed & Stability</li>
          <li><span className="text-purple-400 pr-2">&#10003;</span> Build for Conversions</li>
          <li><span className="text-purple-400 pr-2">&#10003;</span> Reduced App Stack & Developer Dependencies</li>
        </ul>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-16 gap-5 text-center justify-center">
          <Button text="Audit My Website" />
          <Talktous text="Talk to Us" />
        </div>
      </div>
      {/* Right Section (Image) for mobile*/}
      <div className="md:hidden   pt-3 w-full flex justify-center">
        <Image src={ElevateMobile} alt="IMAGE" className="w-full max-w-md md:max-w-full" />
      </div>
      {/* Right Section (Image) */}
      <div className="hidden md:p-10 pt-3 w-full md:flex justify-center">
        <Image src={Elevate} alt="IMAGE" className="w-full max-w-md md:max-w-full" />
      </div>
    </div>
  )
}

export default About
