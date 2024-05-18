


import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Herimg2 from '../components/Herimg2'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar />
      <Herimg2 heading="ABOUT" text="I am a 2nd year CSE Student exploring the world of new technologies."/>
      <AboutContent />
      
      <Footer />
    </div>
  )
}

export default About