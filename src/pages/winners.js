import React from 'react'
import Layout from '../components/layout';
import Winner from '../components/match/Winner';
import WinnerPerson from '../components/match/WinnerPerson';

const winners = () => {
    const image = 'https://static.vecteezy.com/system/resources/previews/004/476/164/original/young-man-avatar-character-icon-free-vector.jpg';
    return (    
    <Layout>
        <Winner />
        <div className='winner-container'>
            <WinnerPerson email="winner@email.com" img={image} />
            <WinnerPerson email="winner@email.com" img={image} />
            <WinnerPerson email="winner@email.com" img={image} />
            <WinnerPerson email="winner@email.com" img={image} />
            <WinnerPerson email="winner@email.com" img={image} />
        </div>
    </Layout>
  )
}

export default winners