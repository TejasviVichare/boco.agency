import React from 'react'
import Image from 'next/image'
import Elevate from '../../public/assets/elevate-everyday.png'
import Heading from './Heading'
import Button from './Button'
import Talktous from './Talktous'

const About = () => {
  return (
    <>
        <div className="  flex flex-col-reverse md:flex-row items-center">
  {/* Left Section (Content) */}
  <div className=" md:pl-20 px-4">
    <Heading heading="We build high-converting Shopify stores that drive Profit" />
    
    <p className="pt-5 font-medium purple text-lg md:text-xl">
      We&apos;re a leading Shopify & Shopify Plus agency who design and develop 
      strategic ecommerce websites
    </p>

    <ul className="pt-5 font-semibold purple text-lg md:text-xl pl-2 md:pl-4">
      <li><span className="text-purple-400 pr-2">&#10003;</span> Unmatched Speed & Stability</li>
      <li><span className="text-purple-400 pr-2">&#10003;</span> Build for Conversions</li>
      <li><span className="text-purple-400 pr-2">&#10003;</span> Reduced App Stack & Developer Dependencies</li>
    </ul>
    
    {/* Buttons */}
    <div className="flex flex-col md:flex-row mt-10 md:mt-28 gap-5">
      <Button text="Audit My Website" />
      <Talktous text="Talk to Us" />
    </div>
  </div>

  {/* Right Section (Image) */}
  <div className=" md:p-10 w-full flex justify-center">
    <Image src={Elevate} alt="IMAGE" className="w-full max-w-md md:max-w-full" />
  </div>
</div>
  
    </>
  )
}

export default About