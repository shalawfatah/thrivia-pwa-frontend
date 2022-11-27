import React from 'react'
import Layout from '../components/layout'
import Heading from '../components/shared/Heading'
import {BsFillPeopleFill} from 'react-icons/bs';
import {Link} from 'gatsby';
import '../styles/about.css';

const about = () => {
  return (
    <Layout>
        <Heading title="About Us" size="small-heading">
            <BsFillPeopleFill />
        </Heading>
        <section className='flex flex-col justify-around items-center about-page'>
          <p>We are the best you can imagine even better, we can do stuff. We don't stop. Don't think too much it hurts you, instead work. Fucking work. Damn.</p>
          <p className='primary font-bold'>Contact: <span >thrivia-2022@gmail.com</span></p>
          <Link to="/" className='primary font-bold'>Privacy Policy</Link>
        </section>
    </Layout>
  )
}

export default about