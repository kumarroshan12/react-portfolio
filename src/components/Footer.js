import './Footerstyle.css'
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
             <div className='location'>
                <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}} />
                <div>
                    <p>Abode Valley.</p>
                    <p>Chennai, India.</p>
                </div>
             </div>
             <div className='phone'>
             <h4><FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}} />
             91-7301107923</h4>
             </div>

             <div className='email'>
             <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}} />
             roshankumarjsr25@gmail.com</h4>
             </div>

            </div>
             <div className='right'>
                 <h4>About me</h4>
                 <p>This is Roshan Kumar. I enjoy learning new technologies.</p>
                 <div className='social'>
                 <FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}} />
                 <FaInstagram size={30} style={{color:'#fff',marginRight:'1rem'}} />
                 <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}} />
                 </div>
                </div>   
            
        </div>
    </div>
  )
}

export default Footer