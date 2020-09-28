import React from 'react'
import { Link } from 'react-router-dom'
import { deleteCardRecipe } from '../utils'

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
                <p className="title is-5 mb-0">{recipe.name}</p> {/* --- NAME OF RECIPE --- */}
                <div className="field is-grouped">
                  <p className="control">
                    <Link to={`/recipe/${recipe.id}`}><button className="button is-link is-small is-rounded">
                      <i className="far fa-calendar-plus"></i>
                    </button>
                    </Link>
                  </p>
                  <p className="control">
                    <Link to={`/recipe/edit/${recipe.id}`}><button className="button is-small is-rounded is-primary">
                      <i className="far fa-edit"></i>
                    </button>
                    </Link>
                  </p>
                  <p className="control">
                    <Link to='/recipes'>
                      <button onClick={() => deleteCardRecipe(recipe)}className="button is-danger is-small is-rounded">
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </Link>
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
