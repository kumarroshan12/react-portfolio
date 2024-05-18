
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Herimg2 from '../components/Herimg2'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Herimg2 heading="PROJECTS." text="Some of my most recent works."/>
      <Work />
      <Footer />
    </div>
  )
}

export default Projects