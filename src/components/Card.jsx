import React from "react"

function Card() {
    return (
      <>
      <div class="card">
          <div class="card-image">
            <figure class="image is-2by1">
              <img src="https://picsum.photos/1500/1500" alt="Placeholder image"/>
             </figure>
         </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-5">Mexican Taco's</p>
              </div>
            </div>

              <div class="content">
                Serves 4 <br/>
                Prep time: 45 Mins
              </div>
          </div>
            </div>
    </>
      );
    }

    export default Card;