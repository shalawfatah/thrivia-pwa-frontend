import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import '../../styles/winners.css';

const WinnerPerson = ({img, email}) => {
  return (
    <div className='bg-blue flex items-center p-2 m-2 rounded-full'>
        <img src={img} alt="winner name " className='mx-2 h-6 w-6 rounded-full' />
        <p className='mx-2 font-bold'>{email}</p>
    </div>
  )
}

export default WinnerPerson