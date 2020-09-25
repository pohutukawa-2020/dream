import React from 'react'

import RecipeList from './RecipesList'
import AddRecipe from './AddRecipe'

function Recipes () {
  return (
    <div className="Recipes">
      <h1>Recipes</h1>
      <RecipeList />
      <AddRecipe />
    </div>
  )
}

export default Recipes
