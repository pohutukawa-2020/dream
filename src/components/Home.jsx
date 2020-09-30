import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/auth'

import { UserContext } from './context/UserContext'

import { signUp, signIn, signInGoogle, signInFacebook, signOut } from '../utils'

export default function Home (props) {
  const {user} = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const signInClickHandler = () => {
    // signIn(email, password)
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('successfully signed in!')
      props.history.push('/')
    })
    .catch(error => {
      setError(error.code)
      console.log('unsuccessful sign in: ', error.message + ' ' + error.code)
    })
  }

  const registerClickHandler = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      console.log('successful sign up: ', response.user.uid)
      firebase.firestore().collection('week').doc(response.user.uid)
        .set({
          monday: '',
          tuesday: '',
          wednesday: '',
          thursday: '',
          friday: '',
          saturday: '',
          sunday: '',
          userId: response.user.uid
        })
      })
      .catch(error => {
      console.log('unsuccessful sign up: ', error.message + ' ' + error.code)
      setError(error.code)
    })
  }


  const facebookClickHandler = () => {
  signInFacebook()
  }

  const googleClickHandler = () => {
    signInGoogle()
  }

  return (
    <div>
  <div class="login">
    <div className="form">
      <p class="control has-icons-left has-icons-right">
        <input class="input" type="text" value={email} required onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <hr />
      </p>
  </div>
    <p class="control has-icons-left">
      <input class="input" type="password" value={password} required onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <hr />
    </p>
  </div>

  <div className="loginb">
    <button class="button is-primary" onClick={() => signInClickHandler(email, password)} >
      Login
    </button>
    <br />
  <div className='register'><button class="button is-primary" onClick={() => registerClickHandler()} >
      Register
    </button></div>

    </div>
    <img onClick={() => facebookClickHandler()} className='facebookLogin' src='/facebook.png'></img><br></br>
    <img onClick={() => googleClickHandler()} className='googleLogin' src='/google.png'></img><br></br>

    {/* <button onClick={() => facebookClickHandler()}>Log in/register with Facebook</button> */}
    {/* <button onClick={() => googleClickHandler()}>Log in/register with Google</button> */}

    {error === 'auth/user-not-found' ? <div>User not found, please register!</div> : null}
    {error === 'auth/invalid-email' ? <div>Please use a real email.</div> : null}
    {error === 'auth/weak-password' ? <div>Password must be at least 6 characters.</div> : null}
  </div>
  )
}