import React from "react"
import { Link } from 'react-router-dom'

function Card() {
    return (
      <>
      <div className="card">
      <Link to="/recipe">
          <div className="card-image">
            <figure className="image is-3by1">
              <img src="https://picsum.photos/1500/1500" alt="Placeholder image"/>
             </figure>
         </div>
          <div className="card-content">
            <div className="media mb-0">
              <div className="media-content">
                <p className="title is-5">Mexican Taco's</p>
              </div>
            </div>

              <div className="content">
                <p className="mb-0">Serves 4</p>
                <p>Prep time: 45 Mins</p>
              </div>
          </div>
      </Link>
            </div>
            
            <div className="seperation">
            <div className="card">
          <div className="card-image">
            <figure className="image is-3by1">
              <img src="https://picsum.photos/1500/1500" alt="Placeholder image"/>
             </figure>
         </div>
          <div className="card-content">
            <div className="media mb-0">
              <div className="media-content">
                <p className="title is-5">Mexican Taco's</p>
              </div>
            </div>

              <div className="content">
                <p className="mb-0">Serves 4</p>
                <p>Prep time: 45 Mins</p>
              </div>
          </div>
            </div>
            </div>
    </>
      );
    }

    export default Card;