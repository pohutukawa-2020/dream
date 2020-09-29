import React from "react"

import { Link } from 'react-router-dom'

function WeekCard ({ recipe }) {
    return (
      <>
      <div class="box">
      <Link to={{ pathname: `/recipe/${recipe.id}`, recipe: recipe }}>
        <article class="media" >
          <div class="media-left">
            <figure class="image is-96x96">
              <img src={recipe.imagePath} alt={recipe.name} />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong className="subtitle">{recipe.name}</strong>
                <br />
                
              </p>
            </div>
            <nav class="level is-mobile">
            <div class="level-left">
            </div>
            </nav>
          </div>
        </article>
        </Link>
      </div>

    </>
  )
}

export default WeekCard

