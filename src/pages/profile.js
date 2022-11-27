import React from 'react';
import Layout from '../components/layout';
import Heading from '../components/shared/Heading';
import {BsPersonFill} from 'react-icons/bs';
import LogIn from '../components/profile/LogIn';
import ProfileContent from '../components/profile/ProfileContent';

const profile = () => {
  
  return (
    <Layout>
        <Heading title="Create Your Account" size="small-heading">
            <BsPersonFill />
        </Heading>
        <LogIn />
        <ProfileContent />
    </Layout>
  )
}

export default profile