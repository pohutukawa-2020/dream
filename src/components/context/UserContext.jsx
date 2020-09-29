import React, { useState, createContext, useEffect } from "react"
import firebase from 'firebase/app'
import 'firebase/auth'

export const UserContext = createContext({ user: null })

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ user: null })

  useEffect(() => {
    firebase.auth().onAuthStateChanged(userAuth => {
      setUser({ user: userAuth});
    })
  }, [])

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}
