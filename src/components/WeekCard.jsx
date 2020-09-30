import React from "react"

import { Link } from 'react-router-dom'

export default function WeekCard ({ recipe }) {
    return (
      <>
      <div className="box">
      <Link to={{ pathname: `/recipe/${recipe.id}`, recipe: recipe }}>
        <article className="media" >
          <div className="media-left">
            <figure className="image is-96x96">
              <img src={recipe.imagePath} alt={recipe.name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong className="subtitle">{recipe.name}</strong>
                <br />
                
              </p>
            </div>
            <nav className="level is-mobile">
            <div className="level-left">
            </div>
            </nav>
          </div>
        </article>
        </Link>
      </div>
    </>
  )
}
