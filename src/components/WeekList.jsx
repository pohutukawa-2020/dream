import React, { useState, useEffect } from 'react'

import firebase from 'firebase'

import WeekListItem from './WeekListItem'

function WeekList() {
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
        const newWeekPlan = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setWeek(newWeekPlan[0])
      })
  },[])

  return (
    <div className="WeekList">
      <div>
        <h2>List of days and meals</h2>
        <h3>Monday</h3>
        {week.monday}
        <h3>Tuesday</h3>
        {week.tuesday}
        <h3>Wednesday</h3>
        {week.wednesday}
        <h3>Thursday</h3>
        {week.thursday}
        <h3>Friday</h3>
        {week.friday}
        <h3>Saturday</h3>
        {week.saturday}
        <h3>Sunday</h3>
        {week.sunday}
      </div>
    </div>
  )
}

export default WeekList
