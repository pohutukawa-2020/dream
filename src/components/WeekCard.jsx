import React from "react"

import { Link } from 'react-router-dom'

export default function WeekCard ({ recipe }) {
  const styles = {
    backgroundImage: `url(${recipe.imagePath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100px'
  }
    return (
      <>
      <div className="box">
      <Link to={{ pathname: `/recipe/${recipe.id}`, recipe: recipe }}>
        <article className="media" >
          <div className="media-left">
            <figure className="image is-96x96">
              {/* <img src={recipe.imagePath} alt={recipe.name} /> */}
              <div style={styles}></div>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong className="subtitle">{recipe.name}</strong></p>
              <p className="recipeServes mb-0">Prep Time: {recipe.prepTime} minutes</p>
              <p className="recipeServes">Serves: {recipe.serves}</p>
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
