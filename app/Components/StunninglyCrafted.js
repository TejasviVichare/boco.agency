import React from 'react'
import Heading from './Heading'
import StunninglyCraftedSlider from './StunninglyCraftedSlider'

const StunninglyCrafted = () => {
  return (
    <>
      <div className='w-full justify-center md:text-center text-left pl-3 pt-10'>
      <Heading heading={<>Stunningly Crafted Shopify Solutions <br /> Driven by Insights</>} />
      <p className="pt-10 font-medium purple text-lg md:text-xl mb-10">
      As Shopify Partners and a leading eCommerce Web Design Agency, we empower brands to thrive <br />
       through strategic design and robust Shopify development. We bring a fresh strategic approach to  <br />
       your brand, focussing on delivering pixel perfect websites, built for Conversions & Growth. 

        </p>
          <StunninglyCraftedSlider />

      </div>
    </>
  )
}

export default StunninglyCrafted