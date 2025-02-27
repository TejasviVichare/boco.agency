import React from 'react'

const Heading = ({heading}) => {
  return (
    <div >
        <p className='md:text-5xl text-3xl purple line-clamp-6 font-bold '>{heading}</p>

    </div>
  )
}

export default Heading