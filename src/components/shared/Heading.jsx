import React from 'react'
import '../../styles/heading.css';

const Heading = ({title, size, children, bgPic}) => {
  return (
    <section className={`relative ${size} bg-gradient-to-b from-[#298DFF] to-[#abd0fa] flex justify-center items-center`}>
        <h1 className='z-2 text-white text-4xl font-heading'>{title}</h1>
        <div className='z-2 h-20 w-20 absolute -bottom-10 bg-icon rounded-full border-2 border-white flex justify-center items-center text-white text-4xl'>
            {children}
        </div>
    </section>
  )
}

export default Heading