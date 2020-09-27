import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { WeekContext } from './WeekContext'
import { RecipeContext } from './RecipeContext'
import RecipeCard from './RecipeCard'

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

  return (
    <div className="WeekList">
      <div>
        <h2 className="subtitle is-5 has-text-centered">Your list of days and meals below:</h2>
        <br></br>
        <h3 className="subtitle is-5 has-text-centered">Monday</h3>
        {mondayRecipe ? <RecipeCard recipe={mondayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Monday</button></Link>}
        <h3 className="subtitle is-5 has-text-centered">Tuesday</h3>
        {tuesdayRecipe ? <RecipeCard recipe={tuesdayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>}
        <h3 className="subtitle is-5 has-text-centered">Wednesday</h3>
        {wednesdayRecipe ? <RecipeCard recipe={wednesdayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>}
        <h3 className="subtitle is-5 has-text-centered">Thursday</h3>
        {thursdayRecipe ? <RecipeCard recipe={thursdayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>}
        <h3 className="subtitle is-5 has-text-centered">Friday</h3>
        {fridayRecipe ? <RecipeCard recipe={fridayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>}
        <h3 className="subtitle is-5 has-text-centered">Saturday</h3>
        {saturdayRecipe ? <RecipeCard recipe={saturdayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>}
        <h3 className="subtitle is-5 has-text-centered">Sunday</h3>
        {sundayRecipe ? <RecipeCard recipe={sundayRecipe} /> : <Link to='/recipes'><button>Add Recipe For Tuesday</button></Link>}
      </div>
    </div>
  )
}

export default WeekList
