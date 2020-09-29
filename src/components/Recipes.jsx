import React from 'react'

import RecipeList from './RecipesList'

function Recipes () {
  return (
    <>
        <section class="hero">
        <div className="logo">
              <img src="../rp.png" alt="Logo"/>
          </div>
      <div class="hero-body">
        <div class="container">
      <h1 class="subtitle is-4">
        Your Recipes
      </h1>
    </div>
  </div>
</section>
    <div className="Recipes weeklist">
      <RecipeList />
    </div>
    </>
  )
}

export default Recipes
