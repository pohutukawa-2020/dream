import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = (props) => {
  let currentPage = props.location.pathname
  let navLinks = null

  switch (currentPage) {
    case '/week':
      navLinks = (
        
        <div className="tabs is centered is-boxed is-fullwidth is-large">
  <ul>
    <li className="is-active">
      <Link to="/recipes">
        <span className="icon"><i class="fas fa-book"></i></span>
        
        <span>Recipes</span>   
        </Link>
    </li>
    <li>
      <Link to='/week'>
        <span className="icon"><i class="fas fa-calendar-alt"></i></span>
        <span>Planner</span> 
      </Link>
    </li>
    <li>
      <Link to='/shopping'>
        <span className="icon"><i class="fas fa-shopping-cart"></i></span>
        <span>Shopping List</span>
        
      </Link>
    </li>
    </ul>
    </div>
        
      )
      break
    case '/recipes':
      navLinks = (
        <>
              <div className="tabs is-fullwidth is-large is-boxed">
  <ul>
    <li className="is-active">
      
        <Link to='/recipes/add'>
        <span className="icon"><i class="fas fa-book-medical"></i></span>
        <span>Add Recipe</span>
      </Link>
    </li>
    <li>
      <Link to='/week'>
        <span className="icon"><i class="fas fa-calendar-alt"></i></span>
        <span>Planner</span>
      </Link>
    </li>
    <li>
    <Link to="/shopping">
        <span className="icon"><i class="fas fa-shopping-cart"></i></span>
        <span>Shopping List</span>
        </Link>
    </li>
    </ul>
    </div>
        </>
      )
      break
    case '/shopping':
      navLinks = (
        <>
              <div className="tabs is-fullwidth is-large is-boxed">
  <ul>
    <li className="is-active">
      <Link to="/recipes">
        <span className="icon"><i class="fas fa-book"></i></span>
        <br/>
        <span>Recipes</span>
        
        </Link>
    </li>
    <li>
    <Link to='/week'>
        <span className="icon"><i class="fas fa-calendar-alt"></i></span>
        <br/>
        <span>Planner</span>
        
      </Link>
     
    </li>
    <li>
    <Link to='/shopping/add'>
        <span className="icon"><i class="fas fa-cart-plus"></i></span>
        <br/>
        <span>Add to List</span>

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
              <div className="tabs is-fullwidth is-large is-boxed">
  <ul>
    <li className="is-active">
      <Link to="/recipes">
        <span className="icon"><i class="fas fa-book"></i></span>
        
        </Link>
    </li>
    <li>
      <Link to='/week'>
        <span className="icon"><i class="fas fa-shopping-cart"></i></span>
        
      </Link>
    </li>
    <li>
      <Link to='/shopping'>
        <span className="icon"><i class="fas fa-shopping-cart"></i></span>
       
      </Link>
    </li>
    </ul>
    </div>
        </>
      )
  }
  return (
    <>
    
        
      
    
       {navLinks}
      </>
    
        
    
    
  )
}



