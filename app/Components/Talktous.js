import React from 'react'
import Link from 'next/link'
const Talktous = ({text}) => {
  return (
    <>
         <div className=' md:flex flex-row border rounded-full  text-white p-2 md:pl-6 pl-3' style={{backgroundColor:'#140152'}}>            
         <Link href="/" className='text-lg font-semibold pr-3 align-middle mt-2'>{text}</Link>
         <span className='border rounded-full bg-white text-indigo-950 md:py-1 py-1 md:px-3 px-1 md:text-3xl text-lg text-right'> &#8599;</span>
         </div>      
    </>
  )
}

export default Talktous