import React from 'react'

import ShoppingList from './ShoppingList'


function Shopping () {
  return (
    <>
        <section class="hero">
          <div class="hero-body">
            <div class="container">
               <h1 class="title is-4">
                Your Shopping List
              </h1>
            </div>
          </div>
        </section>
    <div className="Shopping weeklist">
      <ShoppingList />
    </div>
    </>
  )
}

export default Shopping
