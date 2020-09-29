import React from 'react'

import { signOut } from 'utils'

function Header (props) {
  const currentPage = props.location.pathname
  let headerTitle = null

  const clickHandler = () => {
    signOut()
    props.history.push('/')
  }

  switch (currentPage) {
    case '/recipes':
      headerTitle = 'Your Recipes'
      break
    case '/week':
      headerTitle = 'Week Planner'
      break
    case '/shopping':
      headerTitle = 'Your Shopping List'
      break
    default:
      headerTitle = null
  }

  return (
    <>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <div className="logo">
              <img src="../rp.png" alt="Logo"/>
          </div>
          <div className="navtitle">
          <h1 className="subtitle is-4">
              {headerTitle}
            </h1></div>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
            {/* <div className="signout">
            <h1 className="subtitle is-6" onClick={() => clickHandler()}>Sign Out</h1>
            </div> */}
    </>
  )
}

export default Header