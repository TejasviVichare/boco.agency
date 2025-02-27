import React from 'react'
import Heading from './Heading'
import Button from './Button'
import Talktous from './Talktous'

const LetsgetStarted = () => {
  return (
    <div className='w-full mt-28 px-16 flex flex-col justify-center border border-l-2 border-t-0 mb-28 pb-14 ' style={{backgroundColor:'#F4F1FF', borderBottom:'solid 1px #d3c3f8'}}>


        <div className="w-full flex  md:flex-row  mt-10 md:mt-16 gap-5 text-center justify-center">
        <Heading heading="Let’s Get Started" />
        </div>
        {/* Buttons */}
        <div className="w-full flex  md:flex-row flex-col mt-10 md:mt-16 gap-5 text-center justify-center">
          <Talktous text="Book a Call" />
          <Button text="Audit your Website" />
        </div>
    </div>
  )
}

export default LetsgetStarted