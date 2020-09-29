import React from 'react'

import RecipeList from './RecipesList'

function Recipes () {
  return (
    <>
        <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-4">
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
