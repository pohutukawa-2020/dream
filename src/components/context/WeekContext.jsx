import React, { useState, createContext, useEffect, useContext } from 'react'
import firebase from 'firebase/app'

import { UserContext } from './UserContext'

export const WeekContext = createContext()

export const WeekProvider = ({ children }) => {
  const {user} = useContext(UserContext)
  const [week, setWeek] = useState({
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
    userId: ''
  })

  useEffect(() => {
    const unsubscribe = firebase 
      .firestore()
      .collection('week')
      .where('userId', '==', user ? user.uid : null)
      .onSnapshot(snapshot => {
        const newWeek = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setWeek(newWeek[0])
      })

    return () => unsubscribe()
  }, [user])

  return (
    <WeekContext.Provider value={[week, setWeek]}>
      {children}
    </WeekContext.Provider>
  )
}
