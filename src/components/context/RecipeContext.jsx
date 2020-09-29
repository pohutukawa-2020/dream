import React, { useState, createContext, useEffect } from 'react'

import firebase from 'firebase/app'

export const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    const unsubscribe = firebase // note unsubscribe added in case funny behaviour
      .firestore()
      .collection('recipes')
      .onSnapshot(snapshot => {
        const newRecipes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setRecipes(newRecipes)
      })

    return () => unsubscribe() // note unsubscribe added in case funny behaviour
  }, [])

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipeContext.Provider>
  )
}
