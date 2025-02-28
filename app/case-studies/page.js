import React from 'react'
import CaseStudies from '../Components/CaseStudies'
import Heading  from '../Components/Heading'
import Footer from '../Components/Footer'

const Page = () => {
  return (
    <div className='w-full pt-32 '>
       <p className='text-2xl mt-3 text-center' style={{color:'#666287'}} >
        Case Studies
       </p> 

      <div className="flex justify-center pt-5">
        <Heading heading="Success Stories & Results"/>
      </div>
      <div className='md:px-32'>
       <p className='md:text-2xl text-base text-left mt-7' style={{color:'#140152'}}>We've worked with nearly 100 brands in different modes and capacities over the years. Here's a few of our favorite success stories.</p>
      </div>
       <CaseStudies />

      <div className="overflow-hidden whitespace-nowrap mt-16 pt-20" style={{borderTop:'solid 1px #d3c3f8'}}>
        <div className="flex justify-center mb-20 sm:animate-none animate-marquee">
          <Heading heading="Faster Websites. Higher Conversion. More Revenue." />
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Page