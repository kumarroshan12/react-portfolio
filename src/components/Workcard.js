

import './Workcardstyle.css'

import React from 'react'

import { NavLink } from 'react-router-dom'

const Workcard = (props) => {
  return (
    <div className='project-card'> 
            <img src={props.imgsrc} alt='img' />
            <h2 className='project-title'>{props.title}</h2>
            <div className='pro-details'>
              <p>{props.text}</p>
              <div className='pro-buttons'>
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to="url.com" className="btn">source</NavLink>
              </div>
            </div>
            </div>
  )
}

export default Workcard