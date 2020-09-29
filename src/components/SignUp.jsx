import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'

import { UserContext } from './UserContext'

import { signUp, signInGoogle, signInFacebook } from '../utils'

export default function SignUp (props) {
  const {user} = useContext(UserContext)
  // const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const signUpClickHandler = () => {
    signUp(email, password)
    props.history.push('/recipes')
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>Email</label><br></br>
        <input type='text' value={email} placeholder="eg: ari@mainframe.in" onChange={e => setEmail(e.target.value)}></input><br></br>
        <label>Password</label><br></br>
        <input type='password' value={password} placeholder="must be 6+ characters" onChange={e => setPassword(e.target.value)}></input><br></br>
        <button onClick={signUpClickHandler}>Sign Up</button>
      </form><br></br>
      <button onClick={() => signInGoogle()}>Sign up with Google</button><br></br>
      <button onClick={() => signInFacebook()}>Sign up with Facebook</button><br></br>
      Already have an account? <br></br>
      <Link to='/home'><button>Sign in</button></Link>
    </div>
  )
}