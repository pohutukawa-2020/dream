import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { WeekContext } from './WeekContext'
import { RecipeContext } from './RecipeContext'
import RecipeCard from './RecipeCard'

function WeekList() {
  const [week] = useContext(WeekContext)
  const [recipes] = useContext(RecipeContext)
  const mondayRecipe = recipes.find(x => x.id === week.monday)
  console.log("WeekList ", mondayRecipe)

  return (
    <div className="WeekList">
      <div>
        <h2>List of days and meals</h2>
        <h3>Monday</h3>
        {mondayRecipe ? <RecipeCard recipe={mondayRecipe} /> : null}
        <h3>Tuesday</h3>
        <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>
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
