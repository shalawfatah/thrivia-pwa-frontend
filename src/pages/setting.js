import React, { useState } from 'react';
import Layout from '../components/layout';
import {AiFillSetting} from 'react-icons/ai';
import Heading from '../components/shared/Heading';
import '../styles/setting-page.css';
import {MdCircleNotifications} from 'react-icons/md';
import Winner from '../components/match/Winner';

const Setting = () => {
  const [active, setActive] = useState(false)
  const handleNotifications = () => {
    setActive(prev => !prev)
  }
  return (
    <Layout>
      <Heading title="Settings" size="small-heading">
        <AiFillSetting />
      </Heading>
      <section className='setting-page'>
        <p className='prevent-select'>Enable Notifications</p>
        <MdCircleNotifications onClick={handleNotifications} className={`${active === true && 'notification-active'} notification-icon`} />
      </section>
    </Layout>
  )
}

export default Setting;