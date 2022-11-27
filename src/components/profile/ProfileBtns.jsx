import React from 'react'

const ProfileBtns = ({text, handleClick}) => {
  return (
    <button className='bg-icon text-white py-2 px-8 text-lg font-bold rounded' onClick={handleClick}>{text}</button>
  )
}

export default ProfileBtns