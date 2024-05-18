import { Link } from 'react-router-dom'
import './AboutContentstyles.css'

import React from 'react'
import dev1 from '../assets/dev.jpg'
import dev2 from '../assets/dev2.png'

const AboutContent = () => {
  return (
    <div className='father'>
     <div className='about'>
        <div className='left'>
         <h1> Who Am I</h1>
         <p> I am a BTech Computer Science Student at SRM Chennai.As a Computer Science Engineering student, I am passionate about exploring and mastering new technologies.</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
         <div className='img-container'>
          <div className='img-stack top'>
            <img src={dev1} className='img' alt="true" />
          </div>
          <div className='img-stack bottom'>
            <img src={dev2} className='img' alt="true" />
          </div>
         </div>
        </div>
        </div>
        <div className='edu'>
        <div className='title'><h1>Education</h1></div>
        <div className='timeline'>
          <div className='checkpoint'>
            <div>
            <h2 className='h2'>Secondary School Certificate</h2>
            <h3 className='h2'>2019-2020</h3>
            <p>Completed my secondary school certificate from Church School Beldih, Jamshedpur with 88.2 % marks.</p>
            </div>
          </div>
          <div className='checkpoint'>
            <div>
            <h2 className='h2'>Higher Secondary Certificate</h2>
            <h3 className='h2'>2020-2022</h3>
            <p>Completed my Higher secondary certificate from Church School Beldih, Jamshedpur with 88.75 % marks.</p>
            </div>
          </div>
          <div className='checkpoint'>
            <div>
            <h2 className='h2'>BTech Computer Science and Engineering</h2>
            <h3 className='h2'>2022-2026</h3>
            <p>Currently pursuing my BTech CSE from SRMIST Chennai.</p>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default AboutContent