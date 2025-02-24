import React from 'react'
import Link from 'next/link'
const Talktous = ({text}) => {
  return (
    <>
         <div className=' md:flex flex-row border rounded-full bg-violet-950 text-white p-2 px-6 '>            
         <Link href="/" className='text-lg font-semibold pr-3 align-middle mt-2'>{text}</Link>
         <span className='border rounded-full bg-white text-indigo-950 py-2 px-4 '> &#8599;</span>
         </div>      
    </>
  )
}

export default Talktous