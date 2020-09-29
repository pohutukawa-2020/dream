import React, { useState } from "react"
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")
  const [error, setError] = useState(null)

  const createUserWithEmailAndPasswordHandler = (evt, email, password) => {
    evt.preventDefault()
    setEmail("")
    setPassword("")
    setDisplayName("")
  }

  const onChangeHandler = evt => {
    const { name, value } = evt.currentTarget

    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        {error !== null && (
          <div>
            {error}
          </div>
        )}
        <form>
          <label htmlFor="displayName">
            Display Name:
          </label>
          <input
            type="text"
            name="displayName"
            value={displayName}
            placeholder="E.g: Nimz"
            id="displayName"
            onChange={evt => onChangeHandler(evt)}
          />
          <label htmlFor="userEmail">
            Email:
          </label>
          <input
            type="email"
            name="userEmail"
            value={email}
            placeholder="E.g: nimz@spicey.mainframe.in"
            id="userEmail"
            onChange={evt => onChangeHandler(evt)}
          />
          <label htmlFor="userPassword">
            Password:
          </label>
          <input
            type="password"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={evt => onChangeHandler(evt)}
          />
          <button onClick={evt => {createUserWithEmailAndPasswordHandler(evt, email, password)}}>
            Sign up
          </button>
        </form>
        <p>or</p>
        <button>Sign In with Google</button>
        <p>Already have an account?{" "}
          <button>Sign in here</button>
        </p>
      </div>
    </div>
  )
}

export default SignUp
