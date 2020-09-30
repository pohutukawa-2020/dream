import React from 'react'

import { signOut } from 'utils'

export default function Header (props) {
  const currentPage = props.location.pathname
  let headerTitle = null

  const clickHandler = () => {
    signOut()
    props.history.push('/')
  }

  switch (currentPage) {
    case '/recipes':
      headerTitle = 'My Recipes'
      break
    case '/recipes/add':
      headerTitle = 'Add Recipe'
      break 
    // case '/recipe/edit/:id':
    //   headerTitle = 'Edit Recipe'
    //   break   
    case '/week':
      headerTitle = 'Week Planner'
      break
    case '/shopping':
      headerTitle = 'Your Shopping List'
      break

    default:
      headerTitle = 'Reciplan'
  }

  return (
    <>
        <div className='noBulmaNav'>
          <img className="noBulmaNavLogo" src="../rp.png" alt="Logo"/>
          <div className='noBulmaNavTitle'>{headerTitle}</div>
          <h1 className="noBulmaNavSignOut" onClick={(e) => clickHandler(e)}>Sign Out</h1>
        </div>
    </>
  )
}
