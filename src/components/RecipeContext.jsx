import React, { useState, createContext, useEffect } from 'react'

import firebase from 'firebase/app'

export const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('recipes')
      .onSnapshot(snapshot => {
        const newRecipes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setRecipes(newRecipes)
      })
  },[])

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipeContext.Provider>
  )
}
// export const updateUserContext = (setUser) => {
//   const { username, isAdmin, gardenId } = getDecodedToken()
//   return isAuthenticated() ? setUser({ username, isAdmin, gardenId }) : null
// }
