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
        <div className='noBulmaNav'>
          <img className="noBulmaNavLogo" src="../rp.png" alt="Logo"/>
          <div className='noBulmaNavTitle'>{headerTitle}</div>
          <h1 className="noBulmaNavSignOut" onClick={() => clickHandler()}>Sign Out</h1>
       </div>
    </>
  )
}

export default Header
