import React, { useState, createContext } from 'react'

export const SelectedDayContext = createContext()

export const SelectedDayProvider = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState('monday')

  return (
    <SelectedDayContext.Provider value={[selectedDay, setSelectedDay]}>
      {children}
    </SelectedDayContext.Provider>
  )
}