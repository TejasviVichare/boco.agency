"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Talktous from './Talktous';

const Navbar = () => {
 
    const [isOpen,  setIsopen] = useState(false);



  return (
    <>
      <nav className='p-6'>
        <div className='flex justify-around'>
             {/* Mobile Menu Button */}
             <button   onClick={() => setIsopen(!isOpen)} className='md:hidden block  text-3xl purple'>
               {isOpen ? "✖" : '☰'}
             </button>

            <div>
                {/* Logo */}
                <Link href="/" className='text-4xl font-bold purple'>
                   boco
                </Link>
            </div>

            {/* Desktop Links */}           
            <div className='hidden md:flex  space-x-6 purple border  border-indigo-200 rounded-full p-4 px-6'>
                <Link href="/" className='text-lg font-semibold'>Shopify store build</Link>
                <Link href="/" className='text-lg font-semibold'>Landing page design</Link>
                <Link href="/" className='text-lg font-semibold'>Case studies</Link>
            </div>    
              <div className='hidden md:flex'>
               <Talktous text="Talk to Us" />
              </div>       

             <div className='md:hidden block border rounded-full bg-violet-950 text-white p-1 px-3'>
                <Link href="/" className='text-lg font-semibold'>&#8599;</Link>
            </div>          
        </div>

        
           

             {/* Mobile Menu */}
             {isOpen && (
                 <div className='md:hidden flex flex-col mt-4 justify-between space-y-4'>
                 <Link href="/" className='text-lg font-normal purple '>Shopify store build</Link>
                 <Link href="/" className='text-lg font-normal purple'>Landing page design</Link>
                 <Link href="/" className='text-lg font-normal purple'>Case studies</Link>
                </div>               
             )}

      
      </nav>
    
    
    </>
  )
}

export default Navbar