import React from 'react'
import Link from 'next/link'

const Button = ({text}) => {
  return (
    <>
        <div className=' md:flex flex-row border border-violet-950 rounded-full text-violet-950 p-2 px-6 py-4 '>            
         <Link href="/" className='text-lg font-semibold pr-3 align-middle'>{text}</Link>
       </div>   
    </>
  )
}

export default Button