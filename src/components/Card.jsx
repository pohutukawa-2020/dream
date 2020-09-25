import React from "react"
import { Link } from "react-router-dom"

import recipes from '../data/example-recipe'

function Card() {
  const images = recipes.recipes
    return (
      <>
      <div className="card" >
          <div className="card-image">
            <figure className="image is-5by1">
              <img src={images[0].image} alt="Placeholder image"/>
             </figure>
         </div>
          <div className="card-content">
            <div className="media mb-0">
              <div className="media-content">
                <p className="title is-5 mb-0">Roasted Black Bean Burgers</p>
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
                <p className="mb-0">Serves 4</p>
                <p>Prep time: 45 Mins</p>
              </div>
          </div>
            </div>
            
            <div className="seperation">
            <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={images[1].image} alt="Placeholder image"/>
             </figure>
         </div>
          <div className="card-content">
            <div className="media mb-0">
              <div className="media-content">
                <p className="title is-5 mb-0">Spinich Lasagne</p>
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
                <p className="mb-0">Serves 2</p>
                <p>Prep time: 1 Hour 20 minutes Mins</p>
              </div>
          </div>
            </div>
            </div>
    </>
      );
    }

    export default Card;