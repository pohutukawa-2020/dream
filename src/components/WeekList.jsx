import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { WeekContext } from './WeekContext'
import { RecipeContext } from './RecipeContext'
import RecipeCard from './RecipeCard'
import { clearWeekDayAssignments } from '../utils'

function WeekList() {
  const [week] = useContext(WeekContext)
  const [recipes] = useContext(RecipeContext)
  const mondayRecipe = recipes.find(x => x.id === week.monday)
  const tuesdayRecipe = recipes.find(x => x.id === week.tuesday)
  const wednesdayRecipe = recipes.find(x => x.id === week.wednesday)
  const thursdayRecipe = recipes.find(x => x.id === week.thursday)
  const fridayRecipe = recipes.find(x => x.id === week.friday)
  const saturdayRecipe = recipes.find(x => x.id === week.saturday)
  const sundayRecipe = recipes.find(x => x.id === week.sunday)

  function clickHandler () {
    clearWeekDayAssignments()
  }

  return (
    <div className="WeekList">
      <div>
        <h2>List of days and meals</h2><button onClick={clickHandler}>Clear Week Assignments</button>
        <h3>Monday</h3>
        {mondayRecipe ? <RecipeCard recipe={mondayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Monday</button></Link>}
        <h3>Tuesday</h3>
        {tuesdayRecipe ? <RecipeCard recipe={tuesdayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>}
        <h3>Wednesday</h3>
        {wednesdayRecipe ? <RecipeCard recipe={wednesdayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Wednesday</button></Link>}
        <h3>Thursday</h3>
        {thursdayRecipe ? <RecipeCard recipe={thursdayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Thursday</button></Link>}
        <h3>Friday</h3>
        {fridayRecipe ? <RecipeCard recipe={fridayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Friday</button></Link>}
        <h3>Saturday</h3>
        {saturdayRecipe ? <RecipeCard recipe={saturdayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Saturday</button></Link>}
        <h3>Sunday</h3>
        {sundayRecipe ? <RecipeCard recipe={sundayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Sunday</button></Link>}
      </div>
    </div>
  )
}

export default WeekList
