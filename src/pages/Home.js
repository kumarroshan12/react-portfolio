
import Navbar from '../components/Navbar'
import './Home.css'
import Heroimg from '../components/Heroimg'
import Work from '../components/Work'
import Footer from '../components/Footer'


import React from 'react'

const Home = () => {
  return (
    <div className='Container'>
      <div className='home>'>
      <Navbar />
      <Heroimg />
      <Work />
      <Footer />
        
      </div>

    </div>
  )
}

export default Home