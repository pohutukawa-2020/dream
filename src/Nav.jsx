import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <div className="Nav">
      <h1>Nav</h1>
      <div className='navLinks'>
        <Link to="/recipes">Recipe View</Link>  
        <Link to="/week">Week View</Link>
        <Link to="/shopping">Shopping View</Link>
      </div>
    </div>
  )
}

export default Nav
