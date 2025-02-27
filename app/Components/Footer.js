import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <>
    <div className='w-full grid md:grid-cols-2 grid-col-1 md:px-20 px-6 pt-10' style={{borderTop:'solid 1px #d3c3f8'}}>
       <div>
            {/* Logo */}
             <Link href="/" className='text-4xl font-bold purple' >
              boco
             </Link>
             <p style={{color:'#666287'}} className='mt-4 text-xl'>We are driven by quality and we’re 0 bullshit. If you think the same way, we love a good chat.</p>
            <div className='flex flex-row gap-8'>
            <FontAwesomeIcon icon={faSquareInstagram} className='w-5 mt-5' style={{color:'#140152'}}/>
            <FontAwesomeIcon icon={faLinkedinIn} className='w-5 mt-5' style={{color:'#140152'}}/>
            </div>
           
        </div> 
        <div className='md:text-right text-left leading-7 mt-10'>
             <Link href="/" className='text-2xl font-bold purple'>
             Products
             </Link>
            <p className='text-xl mt-3'>
            <Link href="/" style={{color:'#666287'}} >Shopify Store Build</Link>
            </p> 
            <p className='text-xl'>
            <Link href="/" style={{color:'#666287'}}>Custom Landing Pages</Link>
            </p>
            <p className='text-xl'>
            <Link href="/case-studies" style={{color:'#666287'}} >Case Studies</Link>
            </p>
        </div>
    </div>
    <div className='mb-11 md:mx-20 mt-6 pt-6 pl-6' style={{borderTop:'dashed 1px #d3c3f8'}}>
        <p style={{color:'#666287'}}>© Copyright, BOCO 2024</p>
    </div>
    </>
  )
}

export default Footer