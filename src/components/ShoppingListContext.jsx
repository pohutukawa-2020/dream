import React, { useState, createContext, useEffect } from 'react'

import firebase from 'firebase/app'

export const ShoppingListContext = createContext()

export const ShoppingListProvider = ({ children }) => {
  const [shoppingList, setShoppingList] = useState([])

  useEffect(() => {
    const unsubscribe = firebase // note unsubscribe added in case funny behaviour
      .firestore()
      .collection('shoppingList')
      .onSnapshot(snapshot => {
        const newShoppingList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setShoppingList(newShoppingList)
      })

    return () => unsubscribe() // note unsubscribe added in case funny behaviour
  }, [])

  return (
    <ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
      {children}
    </ShoppingListContext.Provider>
  )
}
