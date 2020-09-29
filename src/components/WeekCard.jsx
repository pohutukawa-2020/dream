import React from "react"

function WeekCard ({ recipe }) {
    return (
      <>
      <div class="box">
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
              <a class="level-item" aria-label="reply">
                {/* <span class="icon is-small">
                  <i class="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="retweet">
                <span class="icon is-small">
                  <i class="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a class="level-item" aria-label="like">
                <span class="icon is-small">
                  <i class="fas fa-heart" aria-hidden="true"></i>
                </span> */}
              </a>
            </div>
            </nav>
          </div>
        </article>
      </div>

    </>
  )
}

export default WeekCard

