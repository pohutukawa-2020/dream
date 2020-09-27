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
        <h2 className="subtitle is-5 has-text-centered">Your list of days and meals below:</h2>
        <br></br>
        <h3 className="title is-3 has-text-centered">Monday</h3>
        {mondayRecipe ? <RecipeCard recipe={mondayRecipe} /> : null}
        <h3 className="title is-3 has-text-centered">Tuesday</h3>
        <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>
        <h3 className="title is-3 has-text-centered">Wednesday</h3>
        {week.wednesday}
        <h3 className="title is-3 has-text-centered">Thursday</h3>
        {week.thursday}
        <h3 className="title is-3 has-text-centered">Friday</h3>
        {week.friday}
        <h3 className="title is-3 has-text-centered">Saturday</h3>
        {week.saturday}
        <h3 className="title is-3 has-text-centered">Sunday</h3>
        {week.sunday}
      </div>
    </div>
  )
}

export default WeekList
