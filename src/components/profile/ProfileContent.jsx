import React, { useState } from 'react'
import ProfileBtns from './ProfileBtns'
import GlobalRecords from './sections/GlobalRecords'
import ProfileDetail from './sections/ProfileDetail'
import Records from './sections/Records'

const ProfileContent = () => {
    const [profile, setProfile] = useState(true)
    const [records, setRecords] = useState(false)
    const [global, setGlobal] = useState(false)
    const handleProfile = () => {
        setProfile(true)
        setRecords(false)
        setGlobal(false)
    }

    const handleRecords = () => {
        setProfile(false)
        setRecords(true)
        setGlobal(false)
    }
    const handleGlobal = () => {
        setProfile(false)
        setRecords(false)
        setGlobal(true)
    }
  return (
    <section>
        <div className='flex justify-around'>
            <ProfileBtns text="Profile" handleClick={handleProfile}/>
            <ProfileBtns text="Records" handleClick={handleRecords}/>
            <ProfileBtns text="Global Records" handleClick={handleGlobal}/>
        </div>
        {profile === true && <ProfileDetail />}
        {records === true && <Records />}
        {global === true && <GlobalRecords />}
    </section>
  )
}

export default ProfileContent