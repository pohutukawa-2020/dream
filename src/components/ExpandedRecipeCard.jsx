import React, { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { RecipeContext } from './RecipeContext'
import { SelectedDayContext } from './SelectedDayContext'
import { WeekContext } from './WeekContext'
import { deleteRecipe, addIngredientsToList, removeIngredientsFromList, assignRecipeToWeekDay } from '../utils'

function ExpandedRecipeCard (props) {
  const [recipes] = useContext(RecipeContext)
  const [week, setWeek] = useContext(WeekContext)
  const [selectedDay, setSelectedDay] = useContext(SelectedDayContext)
  const [weekDay, setWeekDay] = useState(selectedDay)
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)

  function clickHandler (evt) {
    evt.preventDefault() 
    const newWeekDayAssignment = { [weekDay]: recipeId }

    if (window.confirm('Would you like to add this recipe and ingredients to your week?')) {
      if (week[weekDay]) {
        window.confirm('Recipe already assigned to this day')
      }
      assignRecipeToWeekDay(newWeekDayAssignment)
      addIngredientsToList(recipe, recipeId)
      setSelectedDay('monday')
      props.history.push('/week')
    }
  }

  function changeHandler (evt) {
    evt.preventDefault()
    setWeekDay(evt.target.value)
  }

  console.log(week)

  // check if day is already assigned
  // if assigned, remove ingredients from shopping list
  
  return (
    <>
      <div className="card1">
          <div className="card-image">
            <figure className="image1 is-5by1">
              <img src={recipe.imagePath} alt={recipe.name}/>
              </figure>
          </div>
          <button>
          <Link to={`/recipe/edit/${recipeId}`}>Edit Recipe</Link>
          </button>
          <button onClick={() => deleteRecipe(recipeId, props)}>
          Delete Recipe
          </button>
          {/* <button onClick={() => addIngredientsToList(recipe, recipeId)}>Add Ingredients To Shopping List</button> */}
          <button onClick={() => removeIngredientsFromList(recipeId)}>Remove Ingredients From Shopping List</button>
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-5">{recipe.name}</p> {/* --- NAME OF RECIPE --- */}
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
                Serves: {recipe.serves} <br/> {/* --- SERVES --- */}
                Prep time: {recipe.prepTime} {/* --- PREP TIME --- */}
              </div>
              <div className="ingredients">
                Ingredients needed:<br/><br/>
                {recipe.ingredients && recipe.ingredients.map(ingredient => (
                  <p>{ingredient}</p>
                ))}
              </div>
              <div className="Method">
              <br/>Method:<br/><br/>
                {recipe.method && recipe.method.map(step => (
                  <p>{step}</p>
                ))}
              </div>
          </div>
          
      </div>
    </>
  )
}

export default ExpandedRecipeCard
