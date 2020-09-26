import React, { useContext } from "react"

import { RecipeContext } from './RecipeContext'

function ExpandedRecipeCard (props) {
  const [recipes] = useContext(RecipeContext)
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)

  return (
    <>
      <div class="card">
          <div class="card-image">
            <figure class="image is-2by1">
              <img src={recipe.imagePath} alt={recipe.name}/>
              </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-5">{recipe.name}</p> {/* --- NAME OF RECIPE --- */}
              </div>
            </div>
              <div class="content">
                Serves: {recipe.serves} <br/> {/* --- SERVES --- */}
                Prep time: {recipe.prepTime} {/* --- PREP TIME --- */}
              </div>
              <div class="ingredients">
                Ingredients needed:<br/><br/>
                {recipe.ingredients && recipe.ingredients.map(ingredient => (
                  <p>{ingredient}</p>
                ))}
              </div>
              <div class="Method">
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