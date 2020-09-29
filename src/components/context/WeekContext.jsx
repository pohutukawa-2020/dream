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
    user: ''
  })

  useEffect(() => {
    const unsubscribe = firebase // note unsubscribe added in case funny behaviour
      .firestore()
      .collection('week')
      .where('user', '==', user ? user.uid : null)
      .onSnapshot(snapshot => {
        const newWeek = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setWeek(newWeek[0])
      })

    return () => unsubscribe() // note unsubscribe added in case funny behaviour
  }, [user])

  return (
    <WeekContext.Provider value={[week, setWeek]}>
      {children}
    </WeekContext.Provider>
  )
}
