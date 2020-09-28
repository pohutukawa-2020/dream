import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { RecipeContext } from './RecipeContext'
import { SelectedDayContext } from './SelectedDayContext'
import { WeekContext } from './WeekContext'
import { deleteRecipe, addIngredientsToList, removeIngredientsFromList, assignRecipeToWeekDay, capitalise } from '../utils'

function ExpandedRecipeCard (props) {
  const [recipes] = useContext(RecipeContext)
  const [week] = useContext(WeekContext)
  const [selectedDay, setSelectedDay] = useContext(SelectedDayContext)
  const [weekDay, setWeekDay] = useState(selectedDay)
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)
  const assignedRecipe = recipes.find(x => x.id === week[weekDay])

  function clickHandler (evt) {
    evt.preventDefault()
    const newWeekDayAssignment = { [weekDay]: recipeId }

    if (window.confirm(`Would you like to assign ${recipe.name} to ${capitalise(weekDay)} and its ingredients to your shopping list?`)) {
      if (week[weekDay]) {
        if (window.confirm(`${assignedRecipe.name} is already assigned to this ${capitalise(weekDay)}, would you like to reassign with ${recipe.name} and shopping list ingredients?`)) {
          removeIngredientsFromList(week[weekDay])
          assignRecipeToWeekDay(newWeekDayAssignment)
          addIngredientsToList(recipe, recipeId)
          setSelectedDay('monday')
          props.history.push('/week')
        }
      } else {
        assignRecipeToWeekDay(newWeekDayAssignment)
        addIngredientsToList(recipe, recipeId)
        setSelectedDay('monday')
        props.history.push('/week')
      }
    }
  }

  function changeHandler (evt) {
    evt.preventDefault()
    setWeekDay(evt.target.value)
  }

  return (
    <>
      <div className="card1">
        <div className="card-image">
          <figure className="image1 is-5by1">
            <img src={recipe ? recipe.imagePath : null} alt={recipe ? recipe.name : null}/>
          </figure>
        </div>
        <button>
          <Link to={`/recipe/edit/${recipeId}`}>Edit Recipe</Link>
        </button>
        <button onClick={() => deleteRecipe(recipeId, props)}>
          Delete Recipe
        </button>
        <button onClick={() => removeIngredientsFromList(recipeId)}>Remove Ingredients From Shopping List</button>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-5">{recipe ? recipe.name : null}</p> {/* --- NAME OF RECIPE --- */}
            </div>
          </div>
          <label>Add Recipe To:</label>{' '}
          <select value={weekDay} onChange={changeHandler}>
            <option value='monday'>Monday</option>
            <option value='tuesday'>Tuesday</option>
            <option value='wednesday'>Wednesday</option>
            <option value='thursday'>Thursday</option>
            <option value='friday'>Friday</option>
            <option value='saturday'>Saturday</option>
            <option value='sunday'>Sunday</option>
          </select>
          <button onClick={evt => clickHandler(evt)}>Confirm</button>
          <div className="content">
                Serves: {recipe ? recipe.serves : null} <br/> {/* --- SERVES --- */}
                Prep time: {recipe ? recipe.prepTime : null} {/* --- PREP TIME --- */}
          </div>
          <div className="ingredients">
                Ingredients needed:<br/><br/>
            {recipe ? recipe.ingredients.map(ingredient => (
              <p>{ingredient}</p>
            )) : null}
          </div>
          <div className="Method">
            <br/>Method:<br/><br/>
            {recipe ? recipe.method.map(step => (
              <p>{step}</p>
            )) : null}
          </div>
        </div>

      </div>
    </>
  )
}

export default ExpandedRecipeCard
