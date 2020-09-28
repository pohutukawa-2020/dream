import React, { useState, createContext, useEffect, useContext } from 'react'

import firebase from 'firebase/app'
import 'firebase/auth'

import { UserContext } from './UserContext'

export const RecipeContext = createContext()

export const RecipeProvider = ({ children }) => {
  const {user} = useContext(UserContext)
  const [recipes, setRecipes] = useState([])
  // const user = firebase.auth().currentUser

  useEffect(() => {
    const unsubscribe = firebase // note unsubscribe added in case funny behaviour
      .firestore()
      .collection('recipes')
      .where('user', '==', user ? user.uid : null)
      .onSnapshot(snapshot => {
        console.log(snapshot)
        const newRecipes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setRecipes(newRecipes)
      })

    return () => unsubscribe() // note unsubscribe added in case funny behaviour
  }, [user])

  return (
    <RecipeContext.Provider value={[recipes, setRecipes]}>
      {children}
    </RecipeContext.Provider>
  )
}
