import React from 'react'

function WeekListItem ({ days }) {
  return (
    <div className="WeekListItem">
      <h4>WeekListItems</h4>
      <div>
        <h2> Meal: {days[0]}</h2>
      </div>

    </div>
  )
}

export default WeekListItem
