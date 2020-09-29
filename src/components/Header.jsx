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
      <section className="hero">
          <div className="logo">
              <img src="../rp.png" alt="Logo"/>
          </div>
        <div className="hero-body">
          <div className="headertitle">
            <h1 className="subtitle is-4 has-centered-text">
              {headerTitle}
            </h1>
            <div className="signout">
            <h1 className="subtitle is-6" onClick={() => clickHandler()}>Sign Out</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
