
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Herimg2 from '../components/Herimg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Herimg2 heading="CONTACT" text="Lets have a chat"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact