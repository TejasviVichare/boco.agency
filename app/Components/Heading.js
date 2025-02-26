import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className=''>
        <p className='md:text-5xl text-lg purple line-clamp-6 font-bold '>{heading}</p>

    </div>
  )
}

export default Heading