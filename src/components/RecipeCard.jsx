import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard ({ recipe }) {
  return (
    <>
      <div className="card">
        <Link to={{ pathname: `/recipe/${recipe.id}`, recipe: recipe }}> {/* --- DYNAMIC RECIPE ID PATH--- */}
          <div className="card-image">
            <figure className="image is-1by10">
              <img src={recipe.imagePath} alt={recipe.name}/> {/* --- IMAGE PATH --- */}
            </figure>
          </div>
          <div className="card-content">
            <div className="media mb-0">
              <div className="media-content">
                <div className="subtitle is-5 mb-0">{recipe.name}</div> {/* --- NAME OF RECIPE --- */}
                <div className="field is-grouped">
                  <div className="control">
                    <i className="fas fa-plus"></i><Link to={`/recipe/${recipe.id}`}>
                      </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              <div className="subtitle is-6 mb-0">Serves: {recipe.serves}</div> {/* --- SERVES --- */}
              <div className="subtitle is-6">Prep time: {recipe.prepTime}</div> {/* --- PREP TIME --- */}
            </div>
          </div>
        </Link>
      </div>

      <div className="seperation"></div>
    </>
  )
}

export default RecipeCard
