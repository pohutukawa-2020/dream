import React, { useState, createContext, useEffect } from 'react'

import firebase from 'firebase/app'

export const WeekContext = createContext()

export const WeekProvider = ({ children }) => {
  const [week, setWeek] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  })
 

  useEffect(() => {
    firebase
      .firestore()
      .collection('week')
      .onSnapshot(snapshot => {
        const newWeek = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setWeek(newWeek[0])
      })
  },[])

  return (
    <WeekContext.Provider value={[week, setWeek]}>
      {children}
    </WeekContext.Provider>
  )
}