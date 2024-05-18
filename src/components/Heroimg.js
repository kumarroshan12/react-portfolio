import './Heroimgstyle.css'
import Introimg from '../assets/bg.jpg'
import Profile from '../assets/profile.png'

import React from 'react'
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
          <img className='intro-img' src={Introimg} alt="intro-img"/>

        </div>
        <div className='parent'>
           
           <div>
            <img className='profile' src={Profile} alt="profile" />
           </div>
           <div className='content'>
              <p>HI, I'M ROSHAN</p>
              <h1>A Computer Science Student. </h1>
              <div className='buttons'>
                <Link to="/projects" className='btn button'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contacts</Link>
              </div>
           </div> 
           
        </div>
    </div>
  )
}

export default Heroimg