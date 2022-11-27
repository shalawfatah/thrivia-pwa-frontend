import React, { useState } from 'react'
import '../../styles/login-page.css';
import {FcGoogle} from 'react-icons/fc';
import {AiFillFacebook} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('data')
    }
  return (
    <section className='login-page'>
        <form className="login-form flex flex-col" onSubmit={handleSubmit}>
            <input placeholder='Email...' className='regular-input login-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholder='Password...' className='regular-input login-input' type="password login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className='login-input signup-btn' type="submit" value="Sign Up" />
        </form>
            <h2 className='text-center color-icon font-bold text-2xl my-10'>Or Sign up using...</h2>
        <div className='flex justify-around text-5xl primary'>
            <FcGoogle />
            <AiFillFacebook />
            <BsTwitter />
        </div>
    </section>
  )
}

export default LogIn