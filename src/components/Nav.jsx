import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = (props) => {


  const currentPage = props.location.pathname
  let navLinks = null

  switch (currentPage) {
    case '/week':
      navLinks = (

        <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle">
          <ul>
          <li>
                <Link to="/recipes">
                  <span className="icon is-large"><i className="fas fa-book"></i></span>

                </Link>
              </li>
            <li className="is-active">
              <Link to='/week' >
                <span className="icon is-large"><i className="fas fa-calendar-alt"></i></span>
                {/* <span>Planner</span> */}
              </Link>
            </li>
            <li>
              <Link to='/shopping' >
                <span className="icon is-large"><i className="fas fa-shopping-cart"></i></span>
                {/* <span>Shopping List</span> */}

              </Link>
            </li>
          </ul>
        </div>

      )
      break
    case '/recipes':
      navLinks = (
        <>
          <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle">
            <ul>
              <li className="is-active">

                <Link to='/recipes/add'>
                  <span className="icon is-large"><i className="fas fa-book-medical"></i></span>
                  {/* <span>Add Recipe</span> */}
                </Link>
              </li>
              <li>
                <Link to='/week'>
                  <span className="icon is-large"><i className="fas fa-calendar-alt"></i></span>
                  {/* <span>Planner</span> */}
                </Link>
              </li>
              <li>
                <Link to="/shopping">
                  <span className="icon is-large"><i className="fas fa-shopping-cart"></i></span>
                  {/* <span>Shopping List</span> */}
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
          <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle">
            <ul>
              <li>
                <Link to="/recipes">
                  <span className="icon is-large"><i className="fas fa-book"></i></span>
                </Link>
              </li>
              <li>
                <Link to='/week'>
                  <span className="icon is-large"><i className="fas fa-calendar-alt"></i></span>
                </Link>
              </li>
              <li className="is-active">
                <Link to='/shopping/add'>
                  <span className="icon is-large"><i className="fas fa-cart-plus"></i></span>
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
          <div className="tabs is-centered is-boxed is-fullwidth is-large is-toggle">
            <ul>
              <li>
                <Link to="/recipes">
                  <span className="icon is-large"><i className="fas fa-book"></i></span>

                </Link>
              </li>
              <li>
                <Link to='/week'>
                  <span className="icon is-large"><i className="fas fa-calendar-alt"></i></span>

                </Link>
              </li>
              <li>
                <Link to='/shopping'>
                  <span className="icon is-large"><i className="fas fa-shopping-cart"></i></span>

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
