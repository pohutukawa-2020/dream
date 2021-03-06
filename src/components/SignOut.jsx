import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from './context/UserContext'

import { signOut } from 'utils'

export default function SignOut (props) {
  const {user} = useContext(UserContext)

  const clickHandler = () => {
    signOut()
    props.history.push('/')
  }

  return(
    <div>
      {/* <button onClick={() => clickHandler()}>Sign Out</button> */}
    </div>
  )
}
