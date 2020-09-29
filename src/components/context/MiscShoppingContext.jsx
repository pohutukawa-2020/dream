import React, { useState, createContext, useEffect, useContext } from 'react'

import firebase from 'firebase/app'

import { UserContext } from './UserContext'

export const MiscShoppingContext = createContext()

export const MiscShoppingProvider = ({ children }) => {
  const {user} = useContext(UserContext)
  const [miscCollection, setMiscCollection] = useState([])

  useEffect(() => {
    const unsubscribe = firebase // note unsubscribe added in case funny behaviour
      .firestore()
      .collection('miscShoppingList')
      .where('userId', '==', user ? user.uid : null)
      .onSnapshot(snapshot => {
        const miscCollection = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setMiscCollection(miscCollection)
      })

    return () => unsubscribe() // note unsubscribe added in case funny behaviour
  }, [user])

  return (
    <MiscShoppingContext.Provider value={[miscCollection, setMiscCollection]}>
      {children}
    </MiscShoppingContext.Provider>
  )
}
