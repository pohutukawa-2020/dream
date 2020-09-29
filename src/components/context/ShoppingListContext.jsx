import React, { useState, createContext, useEffect, useContext } from 'react'

import firebase from 'firebase/app'

import { UserContext } from './UserContext'

export const ShoppingListContext = createContext()

export const ShoppingListProvider = ({ children }) => {
  const {user} = useContext(UserContext)
  const [shoppingList, setShoppingList] = useState([])

  useEffect(() => {
    const unsubscribe = firebase // note unsubscribe added in case funny behaviour
      .firestore()
      .collection('shoppingList')
      .where('userId', '==', user ? user.uid : null)
      .onSnapshot(snapshot => {
        const newShoppingList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setShoppingList(newShoppingList)
      })

    return () => unsubscribe() // note unsubscribe added in case funny behaviour
  }, [user])

  return (
    <ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
      {children}
    </ShoppingListContext.Provider>
  )
}
