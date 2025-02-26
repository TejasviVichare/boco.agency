import React from 'react'
import Image from 'next/image';
import CaseStudies1 from '../../public/assets/CaseStudies1.png';
import CaseStudies2 from '../../public/assets/CaseStudies2.png';
import Heading from './Heading';
import { Butcherman } from 'next/font/google';
import Button from './Button';

const CaseStudies = () => {
  return (
    <>
    <div className='w-full md:px-32 pt-20 justify-center text-center'>
        <Heading heading="Read our recent Case Studies"/>
        <div className='flex md:flex-row  flex-col gap-14 pt-10 '>
            <div>
                <Image src={CaseStudies1} alt="Image" />
            </div>
            <div>
                <Image src={CaseStudies2} alt="Image" />

            </div>
        </div>
        <div className='w-60 text-center justify-center'>
            <Button text="View Case Studies"/>
        </div>
    </div>
   

    </>
  )
}

export default CaseStudies