import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WeekContext } from './context/WeekContext'
import { RecipeContext } from './context/RecipeContext'
import { SelectedDayContext } from './context/SelectedDayContext'
import WeekCard from './WeekCard'
import { clearShoppingList, clearWeekDayAssignments } from '../utils'

function WeekList () {
  const [week] = useContext(WeekContext)
  const [recipes] = useContext(RecipeContext)
  const [, setSelectedDay] = useContext(SelectedDayContext)
  const mondayRecipe = recipes.find(x => x.id === week.monday)
  const tuesdayRecipe = recipes.find(x => x.id === week.tuesday)
  const wednesdayRecipe = recipes.find(x => x.id === week.wednesday)
  const thursdayRecipe = recipes.find(x => x.id === week.thursday)
  const fridayRecipe = recipes.find(x => x.id === week.friday)
  const saturdayRecipe = recipes.find(x => x.id === week.saturday)
  const sundayRecipe = recipes.find(x => x.id === week.sunday)

  function clickHandler () {
    clearWeekDayAssignments()
    clearShoppingList()
  }

  return (
    <>
    <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-4">
        Weekly Planner
      </h1>
    </div>
  </div>
</section>
    <div>
      <div>
        <hr />
        <div className="weeklist">
          <div>
        {mondayRecipe ? <h1 className="subtitle is-5">Monday<hr /></h1> : null}
        {mondayRecipe ? <WeekCard recipe={mondayRecipe} /> : <Link to='/recipes'>
        <h3 className="subtitle is-5"onClick={() => setSelectedDay('monday')}>Monday+<hr /></h3>
        </Link>}
        </div>

        {tuesdayRecipe ? <h1 className="subtitle is-5">Tuesday<hr /></h1> : null}
        {tuesdayRecipe ? <WeekCard recipe={tuesdayRecipe} /> : <Link to='/recipes'>
        <div className=""><h3 className="subtitle is-5" onClick={() => setSelectedDay('tuesday')}>Tuesday+<hr /></h3></div>
        </Link>}
    
        {wednesdayRecipe ? <h1 className="subtitle is-5">Wednesday<hr /></h1> : null}
        {wednesdayRecipe ? <WeekCard recipe={wednesdayRecipe} /> : <Link to='/recipes'>
        <h3 className="subtitle is-5"onClick={() => setSelectedDay('wednesday')}>Wednesday+<hr /></h3>
        </Link>}
        
        {thursdayRecipe ? <h1 className="subtitle is-5">Thursday<hr /></h1> : null}
        {thursdayRecipe ? <WeekCard recipe={thursdayRecipe} /> : 
        <Link to='/recipes'><h3 className="subtitle is-5" onClick={() => setSelectedDay('thursday')}>Thursday+<hr /></h3></Link>}
        
        
        {fridayRecipe ? <h1 className="subtitle is-5">Friday<hr /></h1> : null}
        {fridayRecipe ? <WeekCard recipe={fridayRecipe} /> : <Link to='/recipes'>
        <h3 className="subtitle is-5"onClick={() => setSelectedDay('friday')}>Friday+<hr /></h3>
        </Link>}
        
        {saturdayRecipe ? <h1 className="subtitle is-5">Saturday<hr /></h1>: null}
        {saturdayRecipe ? <WeekCard recipe={saturdayRecipe} /> : <Link to='/recipes'>
        <h3 className="subtitle is-5"onClick={() => setSelectedDay('saturday')}>Saturday+<hr /></h3>
        </Link>}
        
        {sundayRecipe ? <h1 className="subtitle is-5">Sunday<hr /></h1> : null}
        {sundayRecipe ? <WeekCard recipe={sundayRecipe} /> : <Link to='/recipes'>
        <h3 className="subtitle is-5"onClick={() => setSelectedDay('sunday')}>Sunday+</h3>
        </Link>}
        </div>
      </div>
    </div>
    </>
  )
}

export default WeekList
