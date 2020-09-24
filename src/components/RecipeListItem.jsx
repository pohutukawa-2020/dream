import React from 'react'

function RecipeListItem({ recipe }) {
  return (
    <li key={recipe} className="RecipeListItem">
      <h4>RecipeListItem</h4>
      <div className='recipeEntry'>
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
    </li>
  )
}

export default RecipeListItem