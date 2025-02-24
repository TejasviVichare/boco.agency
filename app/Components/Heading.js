import React from 'react'

const Heading = ({heading}) => {
  return (
    <div>
        <p className='text-5xl purple line-clamp-6 font-bold '>{heading}</p>

    </div>
  )
}

export default Heading