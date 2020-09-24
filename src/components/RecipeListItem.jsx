import React from 'react'

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
      </div>
  )
}

export default RecipeListItem