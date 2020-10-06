import React, { useState, createContext, useEffect, useContext } from 'react'

export const NewIngredientsContext = createContext()

export const NewIngredientsProvider = ({ children }) => {
  const [newIngredients, setNewIngredients] = useState([{ quantity: null, quantityType: 't', name: '' }])

  return (
    <NewIngredientsContext.Provider value={[newIngredients, setNewIngredients]}>
      {children}
    </NewIngredientsContext.Provider>
  )
}