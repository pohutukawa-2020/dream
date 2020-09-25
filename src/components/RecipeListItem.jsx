import React from 'react'

import firebase from 'firebase/app'

import { deleteRecipe } from '../utils'

function RecipeListItem({ recipe }) {
  return (
    <div className='recipeEntry'>
      <h4>RecipeListItem</h4>
        <span>Name: {recipe.name}</span>
        <span>Serves: {recipe.serves}</span>
        <span>Prep Time: {recipe.prepTime}</span>
        Ingredients: <ul>
          {recipe.ingredients.map(ingredient => 
            <li key={ingredient}>
              {ingredient}
            </li>
          )}
        </ul>
        Method: <ol>
          {recipe.method.map(step => 
            <li key={step}>
              {step}
            </li>
          )}
        </ol>
        <button onClick={e => {
          e.preventDefault()
          deleteRecipe(recipe)
        }}>
          Remove
        </button>
      </div>
  )
}

export default RecipeListItem