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
      <div className="logologin">
        <img src="../rp.png" alt="Logo"/>
    </div>
      {/* <form>
        <label>Email</label><br></br>
        <input type='text' value={email} onChange={e => setEmail(e.target.value)}></input><br></br>
        <label>Password</label><br></br>
        <input type='password' value={password} onChange={e => setPassword(e.target.value)}></input><br></br>
      </form>
      <button onClick={() => signIn(email, password)}>Sign In</button>
      <Link to='/sign-up'><button>Register</button></Link><br></br> */}
      {/* <button onClick={signInGoogle}>Sign In With Google</button><br></br>
      <button onClick={signInFacebook}>Sign In With Facebook</button> */}

<div class="login">
  <div className="form">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
    <hr />
  </p>
</div>
  <p class="control has-icons-left">
    <input class="input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
    <hr />
  </p>
  </div>

  {/* <p class="control"> */}
  <div className="loginb">
    <button class="button is-primary" onClick={() => signIn(email, password)} >
      Login
    </button>
    <br />
    <Link to='/sign-up'><div className="register"><button class="button is-primary">
      Register
      </button></div></Link>  
    </div>
  {/* </p> */}

    </div>
  )
}