import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = (props) => {
  const currentPage = props.location.pathname
  let navLinks = null

  switch (currentPage) {
    case '/week':
      navLinks = (

        <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle has-background-white">
          <ul>
            <li>
              <Link to="/recipes">
                <div>
                  <div className="icon is-centered is-large"><i className="fas fa-book"></i></div>
                  <div><p className='navp'>  Recipes</p></div>
                </div>
              </Link>
            </li>
            <li className="is-active">
              <Link to='/week' >
                <div>
                  <div className="icon is-centered is-large"><i className="fas fa-calendar-alt"></i></div>
                  <div><p className='navp'>Week Plan</p></div>
                </div>
              </Link>
            </li>
            <li>
              <Link to='/shopping' >
                <div>
                  <div className="icon is-centered is-large"><i className="fas fa-shopping-cart"></i></div>
                  <div><p className='navp'>Shopping List</p></div>
                </div>
              </Link>
            </li>
          </ul>
        </div>

      )
      break
    case '/recipes':
      navLinks = (
        <>
          <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle has-background-white">
            <ul>
              <li className="is-active ">

                <Link to='/recipes/add'>
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-book-medical"></i></div>
                    <div><p className='navp'>Add Recipe</p></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/week'>
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-calendar-alt"></i></div>
                    <div><p className='navp'>Week Plan</p></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/shopping">
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-shopping-cart"></i></div>
                    <div><p className='navp'>Shopping List</p></div>
                  </div>
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
          <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle has-background-white">
            <ul>
              <li>
                <Link to="/recipes">
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-book"></i></div>
                    <div><p className='navp'>   Recipes</p></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/week'>
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-calendar-alt"></i></div>
                    <div><p className='navp'>Week Plan</p></div>
                  </div>
                </Link>
              </li>
              <li className="is-active">
                <Link to='/shopping/add'>
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-cart-plus"></i></div>
                    <div><p className='navp'>Add Items</p></div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )
      break
    case '/':
      navLinks = (
        <>
          <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle has-background-white">
            <ul>
              <li>
                <Link to="/recipes">
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-book"></i></div>
                    <div><p className='navp'>  Recipes</p></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/week'>
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-calendar-alt"></i></div>
                    <div><p className='navp'>Week Plan</p></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/shopping'>
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-shopping-cart"></i></div>
                    <div><p className='navp'>Shopping List</p></div>
                  </div>
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
          <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle has-background-white">
            <ul>
              <li>
                <Link to="/recipes">
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-book"></i></div>
                    <div><p className='navp'>Recipes</p></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/week'>
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-calendar-alt"></i></div>
                    <div><p className='navp'>Week Plan</p></div>
                  </div>
                </Link>
              </li>
              <li>
                <Link to='/shopping'>
                  <div>
                    <div className="icon is-centered is-large"><i className="fas fa-shopping-cart"></i></div>
                    <div><p className='navp'>Shopping List</p></div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )
  }
  return (
    <>
      <div>
        {navLinks}
      </div>
    </>
  )
}
