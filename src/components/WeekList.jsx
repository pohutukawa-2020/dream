import React from 'react'

import WeekListItem from './WeekListItem'

import meals from '../data/week-plan'
import recipes from '../data/example recipe'

const WeekList = (props) => {
  const mondayMeal = meals.meals[0]
  const images = recipes.recipes

  return (
    <div className="WeekList">
      <div>
  <h2>Monday {mondayMeal.day} </h2>
      <WeekListItem />
      </div>
      
      <h2>Tuesday {images[1].image}</h2>

    
      <h2>Wednesday</h2>
      <h2>Thursday</h2>
      <h2>Friday</h2>
      <h2>Saturday</h2>
      <h2>Sunday</h2> 

    </div>
  )
}

export default WeekList
