import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from './context/UserContext'

import { signOut } from 'utils'

export default function SignOut () {
  const {user} = useContext(UserContext)

  return(
    <div>
      <button><Link to='/home'>Home</Link></button>
      <button onClick={signOut}>Sign Out</button>
      Signed in: {user ? user.email : 'not signed in'}
    </div>
  )
}
