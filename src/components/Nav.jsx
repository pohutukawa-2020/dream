import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <div className="Nav">
      <h1>Nav</h1>
      <div className='navLinks'>
        <Link to="/recipes">My Recipes</Link>  
        <Link to="/week">My Week</Link>
        <Link to="/shopping">Shopping List</Link>
      </div>
    </div>
  )
}

export default Nav
