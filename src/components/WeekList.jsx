import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from './context/UserContext'
import RecipeCard from './RecipeCard'

import { WeekContext } from './context/WeekContext'
import { RecipeContext } from './context/RecipeContext'
import { SelectedDayContext } from './context/SelectedDayContext'
import WeekCard from './WeekCard'
import { clearShoppingList, clearWeekDayAssignments } from '../utils'

export default function WeekList () {
  const {user} = useContext(UserContext)
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
    clearWeekDayAssignments(user.uid)
    clearShoppingList(user.uid)
  }

  return (
    <>

    <div>
      <div>
        <hr />
        <div className="weeklist">
            <div className='clear-week'>
          <button className="button is-small is-rounded is-outline is-centered" onClick={() => clickHandler()}>Clear Week</button> {/* --- NIMZ STYLE PLUZ --- */}
          </div>
          <div className='monday-clear'>
        {mondayRecipe ? <div className="list"><h1 className="subtitle is-5">Monday<div className="hrspcing"><hr /></div></h1></div> : null}
        {mondayRecipe ? <WeekCard recipe={mondayRecipe} /> : <Link to='/recipes'>
        <div className="list"><h3 className="subtitle is-5"onClick={() => setSelectedDay('monday')}>Monday+ <hr /></h3></div>
        </Link>}
        </div>

        {tuesdayRecipe ? <div className="list"><h1 className="subtitle is-5">Tuesday<hr /></h1></div> : null}
        {tuesdayRecipe ? <WeekCard recipe={tuesdayRecipe} /> : <Link to='/recipes'>
        <div className="list"><h3 className="subtitle is-5" onClick={() => setSelectedDay('tuesday')}>Tuesday+<hr /></h3></div>
        </Link>}
    
        {wednesdayRecipe ? <div className="list"><h1 className="subtitle is-5">Wednesday<hr /></h1></div> : null}
        {wednesdayRecipe ? <WeekCard recipe={wednesdayRecipe} /> : <Link to='/recipes'>
        <div className="list"><h3 className="subtitle is-5"onClick={() => setSelectedDay('wednesday')}>Wednesday+<hr /></h3></div>
        </Link>}
        
        {thursdayRecipe ?  <div className="list"><h1 className="subtitle is-5">Thursday<hr /></h1></div> : null}
        {thursdayRecipe ? <WeekCard recipe={thursdayRecipe} /> : <Link to='/recipes'>
        <div className="list"><h3 className="subtitle is-5" onClick={() => setSelectedDay('thursday')}>Thursday+<hr /></h3></div>
        </Link>}
        
        
        {fridayRecipe ? <div className="list"><h1 className="subtitle is-5">Friday<hr /></h1></div> : null}
        {fridayRecipe ? <WeekCard recipe={fridayRecipe} /> : <Link to='/recipes'>
        <div className="list"><h3 className="subtitle is-5"onClick={() => setSelectedDay('friday')}>Friday+<hr /></h3></div>
        </Link>}
        
        {saturdayRecipe ? <div className="list"><h1 className="subtitle is-5">Saturday<hr /></h1></div> : null}
        {saturdayRecipe ? <WeekCard recipe={saturdayRecipe} /> : <Link to='/recipes'>
        <div className="list"><h3 className="subtitle is-5"onClick={() => setSelectedDay('saturday')}>Saturday+<hr /></h3></div>
        </Link>}
        
        {sundayRecipe ? <div className="list"><h1 className="subtitle is-5">Sunday<hr /></h1></div> : null}
        {sundayRecipe ? <WeekCard recipe={sundayRecipe} /> : <Link to='/recipes'>
        <div className="list"><h3 className="subtitle is-5"onClick={() => setSelectedDay('sunday')}>Sunday+<hr /></h3></div>
        </Link>}
    
        </div>
      </div>
    </div>
    </>
  )
}
