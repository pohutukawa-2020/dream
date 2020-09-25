import React from "react"
import { Link } from "react-router-dom"

function RecipeCard ({ recipe }) {
    return (
      <>
      <div className="card">
        <Link to={{ pathname: `/recipe/${recipe.id}`, recipe: recipe}}> {/* --- DYNAMIC RECIPE ID PATH--- */}
            <div className="card-image">
              <figure className="image is-5by1">
                <img src={recipe.imagePath} alt={recipe.name}/> {/* --- IMAGE PATH --- */}
              </figure>
            </div>
              <div className="card-content">
                <div className="media mb-0">
                  <div className="media-content">
                    <p className="title is-5 mb-0">{recipe.name}</p> {/* --- NAME OF RECIPE --- */}
                    <div class="field is-grouped">
                      <p class="control">
                        <button class="button is-link is-small is-rounded">
                          <i class="far fa-calendar-plus"></i>
                        </button>
                      </p>
                      <p class="control">
                        <button class="button is-small is-rounded is-primary">
                        <i class="far fa-edit"></i>
                        </button>
                      </p>
                      <p class="control">
                        <button class="button is-danger is-small is-rounded">
                        <i class="fas fa-trash-alt"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="content">
                  <p className="mb-0">Serves: {recipe.serves}</p> {/* --- SERVES --- */}
                  <p>Prep time: {recipe.prepTime}</p> {/* --- PREP TIME --- */}
                </div>
            </div>
        </Link>
      </div>
            
      <div className="seperation"></div>
    </>
  )
}

export default RecipeCard