import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard ({ recipe }) {
  return (
    <>
      <div className="card">
        <Link to={{ pathname: `/recipe/${recipe.id}`, recipe: recipe }}> {/* --- DYNAMIC RECIPE ID PATH--- */}
          <div className="card-image">
            <figure className="image is-5by1">
              <img src={recipe.imagePath} alt={recipe.name}/> {/* --- IMAGE PATH --- */}
            </figure>
          </div>
          <div className="card-content">
            <div className="media mb-0">
              <div className="media-content">
                <div className="title is-5 mb-0">{recipe.name}</div> {/* --- NAME OF RECIPE --- */}
                <div className="field is-grouped">
                  <div className="control">
                    <button className="button is-link is-small is-rounded"><i className="far fa-calendar-plus"></i><Link to={`/recipe/${recipe.id}`}>
                      </Link>
                    </button>
                    
                  </div>
                  <div className="control">
                  <Link to={`/recipe/edit/${recipe.id}`}>
                    <button className="button is-small is-rounded is-primary">
                      <i className="far fa-edit"></i>
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">
              <div className="mb-0">Serves: {recipe.serves}</div> {/* --- SERVES --- */}
              <div>Prep time: {recipe.prepTime}</div> {/* --- PREP TIME --- */}
            </div>
          </div>
        </Link>
      </div>

      <div className="seperation"></div>
    </>
  )
}

export default RecipeCard
