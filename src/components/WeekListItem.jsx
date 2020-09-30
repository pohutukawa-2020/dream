import React from 'react'

export default function WeekListItem ({ weekDay }) {
  return (
    <div className="WeekListItem">
      <h4>WeekListItems</h4>
      <div>
        <h2> Meal: {weekDay.day}</h2>
      </div>

    </div>
  )
}
