import React, { useContext, useState } from "react"
import { Link } from 'react-router-dom'
import { RecipeContext } from './RecipeContext'
import { DeleteRecipe } from '../utils'

import firebase from 'firebase/app'

function ExpandedRecipeCard (props) {
  const [recipes] = useContext(RecipeContext)
  const [weekDay, setWeekDay] = useState('')
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)

  function clickHandler (weekDay, evt) {
    evt.preventDefault()
    const newWeekDay = { [weekDay]: recipeId }

    firebase
      .firestore()
      .collection('week')
      .doc('XIZ75grLVIiFREmkcTlp')
      .update(newWeekDay)
      
    props.history.push('/week')
  }

  function changeHandler (evt) {
    evt.preventDefault()
    setWeekDay(evt.target.value)
  }
  
  return (
    <>
      <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={recipe.imagePath} alt={recipe.name}/>
              </figure>
          </div>
          <button>
          <Link to={`/recipe/edit/${recipeId}`}>Edit Recipe</Link>
          </button>
          <button onClick={() => DeleteRecipe(recipeId, props)}>
          Delete Recipe
          </button>
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
              <button onClick={evt => clickHandler(weekDay, evt)}>Confirm</button>
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