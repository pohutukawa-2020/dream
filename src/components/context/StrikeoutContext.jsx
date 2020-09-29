import React, { useState, createContext } from 'react'

export const StrikeOutContext = createContext()

export const StrikeOutProvider = ({ children }) => {
  const [striked, setStriked] = useState()

  return (
    <StrikeOutContext.Provider value={[striked, setStriked]}>
      {children}
    </StrikeOutContext.Provider>
  )
}