import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { RecipeContext } from './RecipeContext'

function ExpandedRecipeCard (props) {
  const [recipes] = useContext(RecipeContext)
  const recipeId = props.match.params.id
  const recipe = recipes.find(x => x.id === recipeId)
  
  return (
    <>
      <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={recipe.imagePath} alt={recipe.name}/>
              </figure>
          </div>
          <Link to={`/recipe/edit/${recipeId}`}>Edit Recipe</Link>
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