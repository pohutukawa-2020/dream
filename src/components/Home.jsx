import React, { useContext, useState } from "react";
import { Link, Redirect } from 'react-router-dom'

import { UserContext } from './context/UserContext'

import { signIn, signInGoogle, signInFacebook, signOut } from '../utils'


export default function Home (props) {
  const {user} = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const clickHandler = () => {
    signIn(email, password)
    props.history.push('/')
  }
  
  return (
    <div>
      <form>
        <label>Email</label><br></br>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input><br></br>
        <label>Password</label><br></br>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input><br></br>
      </form>
      <button onClick={() => clickHandler()}>Sign In</button>
      <Link to='/sign-up'><button>Register</button></Link><br></br>
      {/* <button onClick={signInGoogle}>Sign In With Google</button><br></br>
      <button onClick={signInFacebook}>Sign In With Facebook</button> */}
    </div>
  )
}