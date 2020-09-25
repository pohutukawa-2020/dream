import React, { useState, useEffect } from 'react'

import firebase from 'firebase'

import WeekListItem from './WeekListItem'

function useWeekDays() {
  const [weekDays, setWeekDays] = useState([])

  useEffect(() => {
    firebase
    .firestore()
    .collection('weekDays')
    .onSnapshot(snapshot => {
      const newWeekDays = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setWeekDays(weekDays)
    })
  },[])

  return weekDays
}


function WeekList() {
  const weekDays = useWeekDays()

  return (
    <div className="WeekList">
      <div>
      <h2>List of days and meals</h2>
      <WeekListItem days={weekDays} />
      </div>

    </div>
  )
}

export default WeekList
