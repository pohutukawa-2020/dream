import React, { useState, createContext, useEffect, useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

import { UserContext } from './UserContext'

export const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const {user} = useContext(UserContext)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const unsubscribe = firebase 
      .firestore()
      .collection('recipes')
      .where('userId', '==', user ? user.uid : null)
      .onSnapshot(snapshot => {
        const newRecipes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setRecipes(newRecipes)
      })

    return () => unsubscribe()
  }, [user])

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipeContext.Provider>
  )
}