import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = (props) => {
  let currentPage = props.location.pathname
  let navLinks = null

  switch (currentPage) {
    case '/week':
      navLinks = (
        
        <div class="tabs is-toggle is-fullwidth is-large">
  <ul>
    <li class="is-active">
      <Link to="/recipes">
        <span class="icon"><i className="far fa-smile"></i></span>
       
        </Link>
    </li>
    <li>
      <Link to='/shopping'>
        <span class="icon"><i class="fas fa-lemon" ></i></span>
        
      </Link>
    </li>
    <li>
      <Link to='/week'>
        <span class="icon"><i class="fas fa-fighter-jet" ></i></span>
        
      </Link>
    </li>
    </ul>
    </div>
        
      )
      break
    case '/recipes':
      navLinks = (
        <>
              <div class="tabs is-toggle is-fullwidth is-large">
  <ul>
    <li class="is-active">
      <Link to="/recipes">
        <span class="icon"><i className="far fa-smile"></i></span>
      
        </Link>
    </li>
    <li>
      <Link to='/week'>
        <span class="icon"><i class="fas fa-lemon" ></i></span>
        
      </Link>
    </li>
    <li>
      <Link to='/shopping'>
        <span class="icon"><i class="fas fa-fighter-jet" ></i></span>
        
      </Link>
    </li>
    </ul>
    </div>
        </>
      )
      break
    case '/list':
      navLinks = (
        <>
              <div class="tabs is-toggle is-fullwidth is-large">
  <ul>
    <li class="is-active">
      <Link to="/recipes">
        <span class="icon"><i className="far fa-smile"></i></span>
        
        </Link>
    </li>
    <li>
      <Link to='/shopping'>
        <span class="icon"><i class="fas fa-lemon" ></i></span>
       
      </Link>
    </li>
    <li>
      <Link to='/week'>
        <span class="icon"><i class="fas fa-fighter-jet" ></i></span>
        
      </Link>
    </li>
    </ul>
    </div>
        </>
      )
      break
    default:
      navLinks = (
        <>
              <div class="tabs is-toggle is-fullwidth is-large">
  <ul>
    <li class="is-active">
      <Link to="/recipes">
        <span class="icon"><i className="far fa-smile"></i></span>
        <span>Pictures</span>
        </Link>
    </li>
    <li>
      <Link to='/shopping'>
        <span class="icon"><i class="fas fa-lemon" ></i></span>
        <span>Music</span>
      </Link>
    </li>
    <li>
      <Link to='/week'>
        <span class="icon"><i class="fas fa-fighter-jet" ></i></span>
        <span>Videos</span>
      </Link>
    </li>
    </ul>
    </div>
        </>
      )
  }
  return (
    <>
      <div className="nav">
        
      <div className="Nav">
      <h1>Nav</h1>
      <div className='navLinks'>
       {navLinks}
      </div>
    </div>
        
      </div>
    </>
  )
}



