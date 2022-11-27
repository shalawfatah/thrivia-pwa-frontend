import React from 'react'
import {
  AiFillHome, 
  AiFillSetting, 
  AiFillExclamationCircle, 
} from 'react-icons/ai';
import { BsPersonFill} from 'react-icons/bs';
import '../styles/navbar.css';
import {Link} from 'gatsby';

const Footer = () => {
  return (
    <footer className='fixed left-0 right-0 bottom-0 bg-white flex justify-around text-gray-300'>
      <Link to='/home' className='nav-icons' activeClassName="active">
        <AiFillHome />
      </Link>
      <Link to="/profile" className='nav-icons' activeClassName="active">
        <BsPersonFill />
      </Link>
      <Link to="/about" className='nav-icons' activeClassName="active">
        <AiFillExclamationCircle />
      </Link>
      <Link to="/setting" className='nav-icons' activeClassName="active">
        <AiFillSetting />
      </Link>
    </footer>
  )
}

export default Footer